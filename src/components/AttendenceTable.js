import { useState } from "react";
import {
  Button,
  Card,
  Center,
  Checkbox,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

export default function AttendenceTable() {
  const [inputNumber, setInputNumber] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  function handleInputChange(event) {
    setInputNumber(event.target.value);
  }

  function handleCheckboxChange(event) {
    setIsChecked(event.target.checked);
  }

  const buttonHandler = () => {
    if (isChecked) {
      alert(`Attendence Marked `);
    }
  };

  return (
    <>
      <Center mt="10">
        <Card bg="red.600" color="white" width="400px" align="center">
          <Heading> Daily Attendance </Heading>
          <FormControl p="5" isRequired>
            <FormLabel>Membership ID or Phone number</FormLabel>
            <Input
              placeholder="Enter Membership ID"
              bg="white"
              color="black"
              mb="4"
              type="number"
              value={inputNumber}
              onChange={handleInputChange}
            />
            <Checkbox
              iconColor="white"
              checked={isChecked}
              onChange={handleCheckboxChange}
            >
              Mark Todays Attendence
            </Checkbox>
          </FormControl>
          <Button mb="5" onClick={buttonHandler}>
            Submit
          </Button>
        </Card>
      </Center>
      <Center mt="5">
        <TableContainer border="0.5px solid" borderRadius="10px" p="2">
          <Table variant="striped" colorScheme="red">
            <Thead>
              <Tr>
                <Th>S.No.</Th>
                <Th>First Name</Th>
                <Th>Last Name</Th>
                <Th>Membersip ID</Th>
                <Th>Contact Number</Th>
                <Th>Check in Time</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>inches</Td>
                <Td>actiddddddddve</Td>
                <Td>25dddddddddddddddddddddddddddd.4</Td>
                <Td>indddddddddddches</Td>
                <Td>25.4</Td>
                <Td>25.4</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Center>
    </>
  );
}
