import { BsThreeDots } from "react-icons/bs";
import { MdOutlineWatchLater } from "react-icons/md";
import { GoPencil } from "react-icons/go";
import { FaAngleUp } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodoList } from "../../stores/slices/todoSlice";
import { useNavigate } from "react-router-dom";
import { addTodo } from "../../stores/slices/newTodoSlice";

export default function NewTodoView() {
  const myTodos = useSelector((state) => {
    return state.todos.data;
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchTodoList());
  }, [dispatch, navigate]);

  const [showDropdown, setShowDropdown] = useState(false);
  const [task, setTask] = useState({
    title: "",
    description: "",
    date: "",
  });

  const handleSubmitNewTodo = async (e) => {
    e.preventDefault();
    dispatch(addTodo(task));
    navigate("/todo");
    dispatch(fetchTodoList());
  };

  const change = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
      <div className="flex flex-row gap-1 mb-[22px] border-b pb-[22px] border-b-black">
        <div className="flex flex-row">
          <div className="flex flex-row justify-center mt-[.3rem] mr-[20px]">
            <input
              className="size-4 bg-[#4f4f4f] text-[#4f4f4f] border-2 border-[#4f4f4f] cursor-pointer"
              type="checkbox"
              name="tasks"
              disabled
            />
          </div>
        </div>

        <form onSubmit={handleSubmitNewTodo}>
          <div className="flex flex-col">
            <div className="flex flex-row gap-4 w-full">
              <div className="flex w-[70%]">
                <input
                  className="border border-[#828282] rounded h-[2.5rem] w-[50rem] pl-[1.5rem]"
                  type="text"
                  name="title"
                  value={task.title}
                  onChange={change}
                  placeholder="Type Task Title"
                />
              </div>

              <div className="flex w-[13rem] gap-3 absolute right-[-6rem]">
                <div className="flex flex-row justify-center] gap-2">
                  <FaAngleUp className="text-[#4f4f4f] cursor-pointer" />

                  <div className="relative">
                    <BsThreeDots
                      className="text-[#4f4f4f] cursor-pointer"
                      onClick={toggleDropdown}
                    />
                    {showDropdown && (
                      <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg z-10">
                        <div>
                          <button
                            type="submit"
                            className="py-2 px-4 text-[#2f80ed] cursor-pointer hover:bg-gray-100">
                            Save
                          </button>

                          <button className="py-2 px-4 cursor-pointer text-[#eb5757] hover:bg-gray-100">
                            Delete
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-row gap-4 items-center my-[14px]">
              <MdOutlineWatchLater className="text-[#2f80ed]" />

              <input
                className="border border-[#4f4f4f] cursor-pointer rounded p-[0.2rem] w-[10rem]"
                type="date"
                name="date"
                placeholder="Set Date"
                value={task.date}
                onChange={change}
              />
            </div>

            <div className="flex flex-row gap-4 items-center">
              <GoPencil className="text-[#2f80ed]" />

              <input
                type="text"
                name="description"
                placeholder="No Description"
                value={task.description}
                onChange={change}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
