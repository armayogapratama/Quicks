/* eslint-disable react/prop-types */
import { BsThreeDots } from "react-icons/bs";
import { MdOutlineWatchLater } from "react-icons/md";
import { GoPencil } from "react-icons/go";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import separateDate, {
  countDown,
  dateFormat,
} from "../../helpers/separateDate";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function TodoCard({ todo }) {
  const [date, setDate] = useState(new Date(todo.date));
  const [open, setOpen] = useState(false);

  const dateParse = separateDate(new Date(todo.date));

  const formatDate = dateFormat(new Date(todo.date));

  const countDownTime = countDown(new Date(todo.date));

  const handleDate = (e) => {
    setDate(new Date(e.taget.value));
  };

  const handleMinimize = () => {
    setOpen(true);
  };

  return (
    <div className="flex flex-row gap-1 mb-[22px] border-b pb-[22px] border-b-black">
      <div className="flex flex-row">
        <div className="flex flex-row justify-center mt-[.3rem] mr-[20px]">
          <input
            className="size-4 bg-[#4f4f4f] text-[#4f4f4f] border-2 border-[#4f4f4f] cursor-pointer"
            type="checkbox"
            name="tasks"
          />
        </div>
      </div>

      <div className="flex flex-col">
        {open ? (
          <div className="flex flex-row gap-4 w-full">
            <div className="flex w-[100%]">
              <h3 className="text-[#2f80ed]">{todo.title}</h3>
            </div>

            <div className="flex w-[20rem] gap-3 absolute right-[-6rem]">
              <h3 className="text-[14px] text-[#eb5757]">{countDownTime}</h3>

              <h3 className="text-[#4f4f4f] opacity-65 text-[14px]">
                {dateParse}
              </h3>

              <div className="flex flex-row justify-center] gap-2">
                {open ? (
                  <button onClick={() => setOpen(false)}>
                    <FaAngleDown className="text-[#4f4f4f]" />
                  </button>
                ) : (
                  <button onClick={handleMinimize}>
                    <FaAngleUp className="text-[#4f4f4f] cursor-pointer" />
                  </button>
                )}

                <BsThreeDots className="text-[#4f4f4f] cursor-pointer" />
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="flex flex-row gap-4 w-full">
              <div className="flex w-[70%]">
                <h3 className="text-[#2f80ed]">{todo.title}</h3>
              </div>

              <div className="flex w-[20rem] gap-3 absolute right-[-6rem]">
                <h3 className="text-[14px] text-[#eb5757]">{countDownTime}</h3>

                <h3 className="text-[#4f4f4f] opacity-65 text-[14px]">
                  {dateParse}
                </h3>

                <div className="flex flex-row justify-center] gap-2">
                  {open ? (
                    <button onClick={() => setOpen(false)}>
                      <FaAngleDown className="text-[#4f4f4f]" />
                    </button>
                  ) : (
                    <button onClick={handleMinimize}>
                      <FaAngleUp className="text-[#4f4f4f]" />
                    </button>
                  )}

                  <BsThreeDots className="text-[#4f4f4f]" />
                </div>
              </div>
            </div>

            <div className="flex flex-row gap-4 items-center my-[14px]">
              <MdOutlineWatchLater className="text-[#2f80ed]" />

              <input
                className="border border-[#4f4f4f] cursor-pointer rounded p-[0.2rem] w-[10rem]"
                type="date"
                name="date"
                value={formatDate}
                onChange={handleDate}
              />
            </div>

            <div className="flex flex-row gap-4 items-center">
              <GoPencil className="text-[#2f80ed]" />

              <p className="text-[14px] w-[80%]">{todo.description}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
