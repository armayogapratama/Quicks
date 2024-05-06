import { TfiBoltAlt } from "react-icons/tfi";
import { GoSearch } from "react-icons/go";
import { PiChatsDuotone } from "react-icons/pi";
import { FaTasks } from "react-icons/fa";
import { useState } from "react";
import { CiLogin } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import { useNavigate, useOutletContext } from "react-router-dom";

export default function HomeView() {
  const navigate = useNavigate();
  const [active, setActive] = useState(false);
  const [isLogged, setIsLogged] = useOutletContext();

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    setIsLogged(false);
    navigate("/");
  };

  return (
    <>
      <div className="flex flex-row gap-[.1rem]">
        <div className="bg-[#4f4f4f] w-[13rem] h-[50.8rem]">
          {!isLogged ? (
            <button
              onClick={() => navigate("/login")}
              className="flex flex-row bg-[#2f80ed] w-full py-2 rounded items-center justify-center gap-2 relative bottom-[-48rem]">
              <CiLogin className="text-[#ffffff] text-2xl" />
              <h3 className="text-white text-xl">Login</h3>
            </button>
          ) : (
            <button
              onClick={handleLogout}
              className="flex flex-row bg-[#2f80ed] w-full py-2 rounded items-center justify-center gap-2 relative bottom-[-48rem]">
              <CiLogout className="text-[#ffffff] text-2xl" />
              <h3 className="text-white text-xl">Logout</h3>
            </button>
          )}
        </div>

        <div className="bg-[#4f4f4f] w-full">
          <div>
            <input
              className="bg-[#828282] rounded w-full h-[2.5rem] px-[4rem] text-white"
              type="text"
              name="search"
            />
            <GoSearch className="relative top-[-1.8rem] left-[1rem] text-white" />
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
