import { Flex } from "@chakra-ui/core";
import Dropdown from "./Dropdown.component";

const TopBar = (props) => {
  return (
    <>
      <Flex
        bg='#F5F5F5'
        h='24px'
        px='5%'
        as='nav'
        justifyContent='space-between'
        wrap='wrap'
      ></Flex>
    </>
  );
};

export default TopBar;
