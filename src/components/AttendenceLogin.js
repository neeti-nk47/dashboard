import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Center,
  Heading,
  Input,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

export default function AttendenceLogin() {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const navigate = useNavigate();

  const loginButtonHandler = (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    if (enteredEmail === "abc@test.com" && enteredPassword === "1234") {
      localStorage.setItem("AttendenceLogin", true);
      navigate(0);
    } else {
      alert("Wrong ID / Password");
    }
  };

  return (
    <Center mt="10">
      <Card bg="red.800" width="400px" align="center">
        <CardHeader>
          <Heading size="md"> Attendance Login</Heading>
        </CardHeader>
        <CardBody>
          <Input
            mb="5"
            bg="white"
            type="email"
            name="email"
            placeholder="Enter Email ID"
            ref={emailInputRef}
            required
          />
          <Input
            mb="5"
            bg="white"
            type="password"
            name="password"
            placeholder="Enter Password"
            ref={passwordInputRef}
            required
          />
          <Center>
            <Button onClick={loginButtonHandler}>Login</Button>
          </Center>
        </CardBody>
      </Card>
    </Center>
  );
}
