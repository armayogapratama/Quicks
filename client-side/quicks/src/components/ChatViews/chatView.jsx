import { GoSearch } from "react-icons/go";
import { FaRegUser } from "react-icons/fa6";

export default function ChatView() {
  return (
    <>
      <div className="flex flex-col absolute bg-white w-[78rem] h-[41.5rem]">
        <div className="flex flex-row justify-center w-[74.8rem] mt-[24px] mx-[32px]">
          <input
            className="outline outline-1 outline-[#4f4f4f] w-[78rem] h-[2rem] pl-[4rem] rounded"
            type="text"
            name="search"
            placeholder="Search"
          />
          <GoSearch className="relative bottom-[-0.5rem] left-[-5rem] text-[#4f4f4f]" />
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
