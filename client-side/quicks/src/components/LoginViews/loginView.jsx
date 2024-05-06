import axios from "axios";
import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

export default function LoginView() {
  const navigate = useNavigate();
  const [isLogged, setIsLogged] = useOutletContext();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const change = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:3000/login", user);

      const token = data.access_token;
      localStorage.setItem("access_token", token);

      setIsLogged(true);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <main className="min-h-screen flex flex-col items-center justify-center bg-[#2f80ed] space-y-10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md h-[30rem] w-full mx-auto bg-white shadow rounded-lg p-7 space-y-6">
          <form
            onSubmit={handleSubmit}
            className="max-w-md h-[24rem] w-full mx-auto bg-white shadow-xl rounded-lg p-7 space-y-6">
            <div className="flex flex-col">
              <label className="text-sm font-bold text-[#828282] mb-1">
                Email
              </label>
              <input
                className="border rounded-md bg-white px-3 py-2 text-black"
                type="email"
                name="email"
                value={user.email}
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
                value={user.password}
                onChange={change}
                placeholder="Enter your Password"
              />
            </div>
            <div className="flex mt-[1.5rem] justify-between items-center text-sm">
              <div className="flex items-center space-x-2">
                <input
                  className="h-4 w-4 text-[#2f80ed] focus:ring-[#2f80ed] border-[#828282] rounded"
                  type="checkbox"
                  name="remember"
                  id="remember"
                />
                <label className="text-[#828282]">Remember me</label>
              </div>
              <div>
                <a href="#" className="text-[#2f80ed]">
                  Forgot your Password?
                </a>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full mt-[1.5rem] bg-[##2f80ed] text-white bg-[#2f80ed] rounded-md p-2">
                Submit
              </button>
            </div>
          </form>
          <p className="flex gap-2 justify-center mt-2 text-center text-sm text-gray-600">
            You do not have an account?
            <button
              onClick={() => navigate("/register")}
              className="font-medium text-[#2f80ed] border-b border-[#2f80ed]">
              Register
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
