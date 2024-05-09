import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { useEffect, useState } from "react";
import TodoCard from "../TodoCards/todoCard";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodoList } from "../../stores/slices/todoSlice";
import axios from "axios";

export default function TaskView() {
  const myTodos = useSelector((state) => {
    return state.todos.data;
  });
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const drops = ["Personal Errands", "Urgent To-Do"];

  const [dropDown, setDropDown] = useState(false);
  const [selected, setSelected] = useState(false);

  const [status, setStatus] = useState({});

  const { _id } = useParams();

  useEffect(() => {
    dispatch(fetchTodoList());
    setSelected(false);
  }, []);

  const handleNewTodo = () => {
    setSelected(true);
    navigate("/todo/new-todo");
  };

  const fetchTodoDetail = async (_id) => {
    try {
      const { data } = await axios.get(`http://localhost:3000/todo/${_id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });

      setStatus(data.todo);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTodoDetail();
  }, [_id]);

  const handleStatus = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.patch(
        `http://localhost:3000/todo/${_id}`,
        {
          status: true,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );

      setStatus(data.todo);
    } catch (error) {
      console.log(error);
    }
  };

  const change = (e) => {
    setStatus({
      ...status,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="flex flex-col absolute bg-white w-[78rem] h-[41.5rem]">
        <div className="flex flex-row gap-[53rem] w-[74.8rem] mt-[24px] mx-[32px]">
          <button
            onClick={() => setDropDown((prev) => !prev)}
            className="flex flex-row gap-3 border border-[#4f4f4f] items-center px-2 w-[7rem] h-[2.5rem] rounded ml-[6rem]">
            <h3>My Tasks</h3>
            {!dropDown ? <FaAngleDown /> : <FaAngleUp />}
          </button>

          {dropDown && (
            <div className="flex flex-col items-center bg-white z-10 top-[4.5rem] w-[19rem] absolute">
              {drops.map((drop, i) => {
                return (
                  <div className="flex flex-col" key={i}>
                    <h3 className="border border-[#4f4f4f] w-[19rem] h-[2.5rem] pt-2 pl-4 rounded">
                      {drop}
                    </h3>
                  </div>
                );
              })}
            </div>
          )}

          <div className="flex justify-center items-center hover:outline hover:outline-2 hover:outline-[#828282] hover:shadow-md bg-[#2f80ed] rounded px-2 w-[7rem] h-[2.5rem]">
            <button onClick={handleNewTodo} className="text-white">
              New Task
            </button>
          </div>
        </div>

        <div className="overflow-x-scroll my-[22px] mx-[32px]">
          {selected ? (
            <Outlet />
          ) : (
            <>
              {myTodos.todos &&
                myTodos.todos.map((todo, i) => {
                  return <TodoCard key={i} todo={todo} />;
                })}
            </>
          )}
        </div>
      </div>
    </>
  );
}
