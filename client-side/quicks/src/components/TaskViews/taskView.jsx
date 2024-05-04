import { FaRegUser } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { MdOutlineWatchLater } from "react-icons/md";
import { GoPencil } from "react-icons/go";
import { useState } from "react";

export default function TaskView() {
  const drops = ["Personal Errands", "Urgent To-Do"];

  const [dropDown, setDropDown] = useState(false);

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
            <button className="text-white">New Task</button>
          </div>
        </div>

        <div className="overflow-x-scroll my-[22px] mx-[32px]">
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
              <div className="flex flex-row gap-4 w-full">
                <div className="flex w-[70%]">
                  <h3 className="text-[#2f80ed]">
                    Update My Application For Ready To Deploy
                  </h3>
                </div>

                <div className="flex w-[20rem] gap-3 absolute right-[-2rem]">
                  <h3 className="text-[#eb5757] text-[14px]">2 Days Left</h3>

                  <h3 className="text-[#4f4f4f] opacity-65 text-[14px]">
                    May 3,2024 19.48
                  </h3>

                  <div className="flex flex-row justify-center] gap-2">
                    <FaAngleUp className="text-[#4f4f4f]" />

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
                />
              </div>

              <div className="flex flex-row gap-4 items-center">
                <GoPencil className="text-[#2f80ed]" />

                <p className="text-[14px] w-[80%]">
                  Please check your whatsapp to get my message, because it is
                  very important!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
