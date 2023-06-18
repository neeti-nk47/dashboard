import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Table,
  TableContainer,
  Tabs,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

export default function MembersList() {
  return (
    <Tabs variant="enclosed">
      <TabList>
        <Tab>All</Tab>
        <Tab>Expiring</Tab>
        <Tab>Expired</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <TableContainer border="0.5px solid" borderRadius="10px" p="2">
            <Table variant="striped" colorScheme="red">
              <Thead>
                <Tr>
                  <Th>Membersip ID</Th>
                  <Th>First Name</Th>
                  <Th>Last Name</Th>
                  <Th>Start Date</Th>
                  <Th>End Date</Th>
                  <Th>Contact</Th>
                  <Th>Email</Th>
                  <Th>Membersip Cost</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>inches</Td>
                  <Td>active</Td>
                  <Td>25.4</Td>
                  <Td>inches</Td>
                  <Td>millimetres (mm)</Td>
                  <Td>25.4</Td>
                  <Td>25.4</Td>
                  <Td>25.4</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </TabPanel>
        <TabPanel>
          <TableContainer border="0.5px solid" borderRadius="10px" p="2">
            <Table variant="striped" colorScheme="red">
              <Thead>
                <Tr>
                  <Th>Membersip ID</Th>
                  <Th>First Name</Th>
                  <Th>Last Name</Th>
                  <Th>Start Date</Th>
                  <Th>End Date</Th>
                  <Th>Contact</Th>
                  <Th>Email</Th>
                  <Th>Membersip Cost</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>inches</Td>
                  <Td>expriing</Td>
                  <Td>25.4</Td>
                  <Td>inches</Td>
                  <Td>millimetres (mm)</Td>
                  <Td>25.4</Td>
                  <Td>25.4</Td>
                  <Td>25.4</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </TabPanel>
        <TabPanel>
          <TableContainer border="0.5px solid" borderRadius="10px" p="2">
            <Table variant="striped" colorScheme="red">
              <Thead>
                <Tr>
                  <Th>Membersip ID</Th>
                  <Th>First Name</Th>
                  <Th>Last Name</Th>
                  <Th>Start Date</Th>
                  <Th>End Date</Th>
                  <Th>Contact</Th>
                  <Th>Email</Th>
                  <Th>Membersip Cost</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>inches</Td>
                  <Td>expired</Td>
                  <Td>25.4</Td>
                  <Td>inches</Td>
                  <Td>millimetres (mm)</Td>
                  <Td>25.4</Td>
                  <Td>25.4</Td>
                  <Td>25.4</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
