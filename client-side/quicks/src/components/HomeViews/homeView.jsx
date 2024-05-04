import ChatView from "../ChatViews/chatView";
import TaskView from "../TaskViews/taskView";

import { TfiBoltAlt } from "react-icons/tfi";
import { GoSearch } from "react-icons/go";
import { PiChatsDuotone } from "react-icons/pi";
import { FaTasks } from "react-icons/fa";
import { useState } from "react";
import MessageBoxView from "../MessageBoxViews/MessageBoxView";

export default function HomeView() {
  const [active, setActive] = useState(false);

  return (
    <>
      <div className="flex flex-row gap-[.1rem]">
        <div className="bg-[#4f4f4f] w-[13rem] h-[50.8rem]"></div>

        <div className="bg-[#4f4f4f] w-full">
          <div>
            <input
              className="bg-[#828282] rounded w-full h-[2.5rem] px-[4rem] text-white"
              type="text"
              name="search"
            />
            <GoSearch className="relative top-[-1.8rem] left-[1rem] text-white" />
          </div>

          {/* <div>
            <ChatView />
          </div> */}

          {/* <div>
            <TaskView />
          </div> */}

          <div>
            <MessageBoxView />
          </div>

          {!active ? (
            <div className="flex flex-row">
              <button
                onClick={() => setActive(true)}
                className="flex justify-center items-center relative bottom-[-43.5rem] right-[-75rem] bg-[#2f80ed] w-[2.5rem] h-[2.5rem] rounded-[50%] cursor-pointer">
                <TfiBoltAlt className="text-white text-2xl" />
              </button>
            </div>
          ) : (
            <div className="flex flex-row">
              <button
                onClick={() => setActive(false)}
                className="flex justify-center items-center relative bottom-[-43.5rem] right-[-75rem] bg-[#2f80ed] w-[2.5rem] h-[2.5rem] rounded-[50%] cursor-pointer">
                <TfiBoltAlt className="text-white text-2xl" />
              </button>

              <div className="flex flex-col">
                <h3 className="flex text-white text-[14px] justify-center items-center relative bottom-[-42rem] right-[-69rem]">
                  Chats
                </h3>
                <button className="flex justify-center items-center relative bottom-[-42.2rem] right-[-69rem] bg-[#ffffff] w-[2.5rem] h-[2.5rem] rounded-[50%] cursor-pointer">
                  <PiChatsDuotone className="text-[#2f80ed] text-xl" />
                </button>
              </div>

              <div className="flex flex-col">
                <h3 className="flex text-white text-[14px] justify-center items-center relative bottom-[-42rem] right-[-63rem]">
                  Tasks
                </h3>
                <button className="flex justify-center items-center relative bottom-[-42.2rem] right-[-63rem] bg-[#ffffff] w-[2.5rem] h-[2.5rem] rounded-[50%] cursor-pointer">
                  <FaTasks className="text-[#f8b76b] text-lg" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
