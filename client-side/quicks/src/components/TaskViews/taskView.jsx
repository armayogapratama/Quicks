import { FaRegUser } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
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

          <div className="flex bg-[#2f80ed] rounded px-2 w-[7rem] h-[2.5rem]">
            <button className="text-white">New Task</button>
          </div>
        </div>

        <div className="overflow-x-scroll my-[22px] mx-[32px]">
          <div className="flex flex-row gap-1 border-b pb-[22px] border-b-black">
            <div className="flex flex-row">
              <div className="flex flex-row justify-center items-center bg-[#e0e0e0] w-[2.5rem] h-[2.5rem] rounded-full">
                <FaRegUser className="text-[#4f4f4f]" />
              </div>

              <div className="flex flex-row justify-center items-center relative left-[-1.3rem] bg-[#2f80ed] w-[2.5rem] h-[2.5rem] rounded-full">
                <FaRegUser className="text-white" />
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex flex-row gap-4 w-full">
                <div className="flex w-[80%]">
                  <h3 className="text-[#2f80ed]">
                    Update My Application For Ready To Deploy
                  </h3>
                </div>

                <div className="flex justify-end w-[10rem]">
                  <h3 className="text-[#4f4f4f] opacity-65 text-[14px]">
                    May 3,2024 19.48
                  </h3>
                </div>
              </div>

              <h3 className="text-[14px] font-semibold">Ellen :</h3>
              <p className="text-[12px]">
                Please check your whatsapp to get my message, because it is very
                important!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
