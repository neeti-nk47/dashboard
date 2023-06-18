import { Box, Grid, GridItem } from "@chakra-ui/react";

export default function Stats() {
  return (
    <Grid templateColumns="repeat(3, 1fr)" m="5" bgColor="gray.100">
      <GridItem as="div" colSpan="1" p="10px">
        <Box bg="red.600" height="50px" color="white" textAlign="center">
          Total members
        </Box>
      </GridItem>
      <GridItem as="div" colSpan="1" p="10px">
        <Box bg="red.700" height="50px" color="white" textAlign="center">
          Membership Due
        </Box>
      </GridItem>
      <GridItem as="div" colSpan="1" p="10px">
        <Box bg="red.800" height="50px" color="white" textAlign="center">
          Monthly Revenue
        </Box>
      </GridItem>
    </Grid>
  );
}
