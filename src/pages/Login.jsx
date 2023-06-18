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

export default function Login() {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const navigate = useNavigate();

  const loginButtonHandler = (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    if (enteredEmail === "test@test.com" && enteredPassword === "Test1234") {
      localStorage.setItem("Email", enteredEmail);
      localStorage.setItem("isLoggedIn", true);
      navigate(0);
    } else {
      alert("Wrong admin login");
    }
  };

  return (
    <Center mt="10">
      <Card bg="red.800" width="400px" align="center">
        <CardHeader>
          <Heading size="md"> Management Login</Heading>
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
