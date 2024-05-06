import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import axios from "../../instances/instance";
import axios from "axios";

export default function RegisterView() {
  const navigate = useNavigate();

  const [newUser, setNewUser] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
  });

  const change = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/register", newUser);

      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <main className="min-h-screen flex flex-col items-center justify-center bg-[#2f80ed] space-y-10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center"></div>

        <div className="max-w-md w-full mx-auto bg-white shadow rounded-lg p-7 space-y-6">
          <form
            onSubmit={handleSubmit}
            className="max-w-md w-full mx-auto bg-white shadow-xl rounded-lg p-7 space-y-6">
            <div className="flex flex-col">
              <label className="text-sm font-bold text-[#828282] mb-1">
                FullName
              </label>
              <input
                className="border rounded-md bg-white px-3 py-2 text-black"
                type="text"
                name="fullName"
                value={newUser.fullName}
                onChange={change}
                placeholder="Enter your Full Name"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-bold text-[#828282] mb-1">
                Username
              </label>
              <input
                className="border rounded-md bg-white px-3 py-2 text-black"
                type="text"
                name="username"
                value={newUser.username}
                onChange={change}
                placeholder="Enter your Username"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-bold text-[#828282] mb-1">
                Email Address
              </label>
              <input
                className="border rounded-md bg-white px-3 py-2 text-black"
                type="email"
                name="email"
                value={newUser.email}
                onChange={change}
                placeholder="Enter your Email Address"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-bold text-[#828282] mb-1">
                Password
              </label>
              <input
                className="border rounded-md bg-white px-3 py-2 text-black"
                type="password"
                name="password"
                value={newUser.password}
                onChange={change}
                placeholder="Enter your Password"
              />
            </div>

            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center space-x-2">
                <input
                  className="h-4 w-4 text-[#2f80ed] focus:ring-#2f80ed border-[#e0e0e0] rounded"
                  type="checkbox"
                  name="remember"
                  id="remember"
                />
                <label className="text-[#828282]">Remember me</label>
              </div>
              <div>
                <a href="#" className="text-[#2f80ed]">
                  Remember Your Account
                </a>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#2f80ed] text-white rounded-md p-2">
              Submit
            </button>
          </form>
          <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900"></h1>
          <p className="flex justify-center gap-2 mt-2 text-center text-sm text-[#828282]">
            You do not have an account?
            <button
              onClick={() => navigate("/login")}
              className="font-medium text-[#2f80ed] border-b border-[#2f80ed]">
              Login
            </button>
            or
            <button
              onClick={() => navigate("/")}
              className="text-[#2f80ed] font-medium border-b border-[#2f80ed]">
              Home
            </button>
          </p>
        </div>
      </main>
    </>
  );
}
