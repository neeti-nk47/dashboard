import { Button, Flex, Spacer } from "@chakra-ui/react";
import AttendenceLogin from "../components/AttendenceLogin";
import AttendenceTable from "../components/AttendenceTable";
import { useNavigate } from "react-router-dom";

export default function Attendence() {
  const AttendenceLog = localStorage.getItem("AttendenceLogin");
  const navigate = useNavigate();

  const buttonHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("AttendenceLogin");
    navigate(0);
  };
  return (
    <>
      {AttendenceLog && (
        <Flex as="nav" p="10px" alignItems="end" gap="10px">
          <Spacer />
          <Button onClick={buttonHandler} colorScheme="blue" pos="right">
            Logout
          </Button>
        </Flex>
      )}
      {AttendenceLog === false ||
        (AttendenceLog === null && <AttendenceLogin />)}

      {AttendenceLog && <AttendenceTable />}
    </>
  );
}
