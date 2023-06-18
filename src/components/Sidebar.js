import { AtSignIcon, CalendarIcon, EditIcon } from "@chakra-ui/icons";
import { Image, List, ListIcon, ListItem } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import Logo from "./vite.svg";

export default function Sidebar() {
  let date = new Date().toJSON().slice(0, 10);
  let path = `/attendence${date}`;

  return (
    <List color="white" fontSize="1.2rem" spacing={4}>
      <ListItem>
        <Image
          src={Logo}
          boxSize="120px"
          objectFit="cover"
          ml="10"
          mr="10"
          mb="10"
        />
      </ListItem>
      <ListItem>
        <NavLink to="/">
          <ListIcon as={CalendarIcon} color="white" />
          Dashboard
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="/addNewMember">
          <ListIcon as={EditIcon} color="white" />
          Add new member
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to={path}>
          <ListIcon as={AtSignIcon} color="white" />
          Attendance
        </NavLink>
      </ListItem>
    </List>
  );
}
