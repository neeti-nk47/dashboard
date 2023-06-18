import {
  Container,
  FormLabel,
  Input,
  Select,
  Button,
  Grid,
  GridItem,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

export default function AddNew() {
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    ContactNo: "",
    Email: "",
    DOB: "",
    Weight: "",
    Height: "",
    Gender: "",
    Profession: "",
    HealthIssue: "",
    MembershipID: "",
    Goal: "",
    EmergencyName: "",
    EmergencyNumber: "",
    MembershipStartDate: "",
    MembershipEndDate: "",
    MembershipCost: "",
    ModeofPayment: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <Text mt="10px" mb="2" fontSize="1.5rem">
        Enter details of member:
      </Text>
      <Container
        as="form"
        maxW="container"
        border="0.4px solid"
        borderRadius="10px"
        mb="10"
        onSubmit={handleSubmit}
      >
        <Grid templateColumns="repeat(6, 1fr)">
          <GridItem as="div" colSpan="3" p="10px">
            <FormLabel>First Name</FormLabel>
            <Input
              type="text"
              name="FirstName"
              value={formData.FirstName}
              onChange={handleInputChange}
            />
          </GridItem>
          <GridItem as="div" colSpan="3" p="10px">
            <FormLabel>Last Name</FormLabel>
            <Input
              type="text"
              name="LastName"
              value={formData.LastName}
              onChange={handleInputChange}
            />
          </GridItem>

          <GridItem as="div" colSpan="3" p="10px">
            <FormLabel>Contact number</FormLabel>
            <Input
              type="number"
              name="ContactNo"
              value={formData.ContactNo}
              onChange={handleInputChange}
            />
          </GridItem>
          <GridItem as="div" colSpan="3" p="10px">
            <FormLabel>Email ID</FormLabel>
            <Input
              type="email"
              name="Email"
              value={formData.Email}
              onChange={handleInputChange}
            />
          </GridItem>
          <GridItem as="div" colSpan="2" p="10px">
            <FormLabel>Date of Birth</FormLabel>
            <Input
              type="date"
              name="DOB"
              value={formData.DOB}
              onChange={handleInputChange}
            />
          </GridItem>
          <GridItem as="div" colSpan="2" p="10px">
            <FormLabel>Weight</FormLabel>
            <Input
              type="text"
              name="Weight"
              value={formData.Weight}
              onChange={handleInputChange}
            />
          </GridItem>
          <GridItem as="div" colSpan="2" p="10px">
            <FormLabel>Height</FormLabel>
            <Input
              type="text"
              name="Height"
              value={formData.Height}
              onChange={handleInputChange}
            />
          </GridItem>
          <GridItem as="div" colSpan="2" p="10px">
            <FormLabel>Gender</FormLabel>
            <Select
              placeholder="Select gender"
              name="Gender"
              value={formData.Gender}
              onChange={handleInputChange}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </Select>
          </GridItem>
          <GridItem as="div" colSpan="2" p="10px">
            <FormLabel>Profession</FormLabel>
            <Input
              type="text"
              name="Profession"
              value={formData.Profession}
              onChange={handleInputChange}
            />
          </GridItem>
          <GridItem as="div" colSpan="2" p="10px">
            <FormLabel>Health Issue</FormLabel>
            <Input
              type="text"
              name="HealthIssue"
              value={formData.HealthIssue}
              onChange={handleInputChange}
            />
          </GridItem>

          <GridItem as="div" colSpan="3" p="10px">
            <FormLabel>Membership ID</FormLabel>
            <Input
              type="number"
              name="MembershipID"
              value={formData.MembershipID}
              onChange={handleInputChange}
            />
          </GridItem>
          <GridItem as="div" colSpan="3" p="10px">
            <FormLabel>Goal</FormLabel>
            <Select
              placeholder="Select option"
              name="Goal"
              value={formData.Goal}
              onChange={handleInputChange}
            >
              <option value="athletic">Athletic</option>
              <option value="bodybuilding">Body building</option>
              <option value="fitness">Fitness</option>
            </Select>
          </GridItem>
          <GridItem as="div" colSpan="3" p="10px">
            <FormLabel>Emergency contact name</FormLabel>
            <Input
              type="text"
              name="EmergencyName"
              value={formData.EmergencyName}
              onChange={handleInputChange}
            />
          </GridItem>
          <GridItem as="div" colSpan="3" p="10px">
            <FormLabel>Emergency contact number</FormLabel>
            <Input
              type="number"
              name="EmergencyNumber"
              value={formData.EmergencyNumber}
              onChange={handleInputChange}
            />
          </GridItem>

          <GridItem as="div" colSpan="3" p="10px">
            <FormLabel>Membership Start date</FormLabel>
            <Input
              type="date"
              name="MembershipStartDate"
              value={formData.MembershipStartDate}
              onChange={handleInputChange}
            />
          </GridItem>
          <GridItem as="div" colSpan="3" p="10px">
            <FormLabel>Membership End Date</FormLabel>
            <Input
              type="date"
              name="MembershipEndDate"
              value={formData.MembershipEndDate}
              onChange={handleInputChange}
            />
          </GridItem>
          <GridItem as="div" colSpan="3" p="10px">
            <FormLabel>Membership Cost</FormLabel>
            <Input
              type="number"
              name="MembershipCost"
              value={formData.MembershipCost}
              onChange={handleInputChange}
            />
          </GridItem>
          <GridItem as="div" colSpan="3" p="10px">
            <FormLabel>Mode of payment</FormLabel>
            <Select
              placeholder="Select option"
              name="ModeofPayment"
              value={formData.ModeofPayment}
              onChange={handleInputChange}
            >
              <option value="Online">Online</option>
              <option value="Cash">Cash</option>
            </Select>
          </GridItem>
        </Grid>

        <Button colorScheme="red" m="10px" type="submit">
          Submit
        </Button>
      </Container>
    </>
  );
}
