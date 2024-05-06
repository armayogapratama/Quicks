import { useState } from "react";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const [isLogged, setIsLogged] = useState(
    localStorage.access_token ? true : false
  );
  return (
    <>
      <Outlet context={[isLogged, setIsLogged]} />
    </>
  );
}
