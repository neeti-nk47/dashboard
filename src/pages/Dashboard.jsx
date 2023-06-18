import Stats from "../components/Stats";
import Login from "./Login";
import MembersList from "./MembersList";

export default function Dashboard() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  return (
    <>
      {isLoggedIn === false || (isLoggedIn === null && <Login />)}
      {isLoggedIn && <Stats />}
      {isLoggedIn && <MembersList />}
    </>
  );
}
