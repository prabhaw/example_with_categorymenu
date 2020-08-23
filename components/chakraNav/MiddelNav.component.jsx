import AutoComplete from "./SearchBox.component";
import SignupBtn from "./SignUp.component";
import {
  Box,
  Divider,
  Badge,
  Flex,
  Text,
  Stack,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
} from "@chakra-ui/core";

import { IoMdCart, IoIosArrowDown } from "react-icons/io";
import { FiUser } from "react-icons/fi";

const MiddelNavbar = (props) => {
  return (
    <>
      <Flex
        bg='#ffff'
        h='60px'
        px='5%'
        as='nav'
        justifyContent='space-between'
        wrap='wrap'
      >
        <Box align='left' display={["none", "none", "block"]}>
          <img src='/logo.png' className='logo-img' alt='Segun Adebayo' />
        </Box>

        <Box my='10px' w={["100%", "100%", "45%"]}>
          <AutoComplete />
        </Box>
        <Flex align='right'>
          <Box
            as={IoMdCart}
            display={["none", "none", "block"]}
            size='30px'
            color='main'
            mt='13px'
          />
          <Badge
            variant='solid'
            variantColor='teal'
            position='absolute'
            rounded='7px'
            my='10px'
            display={["none", "none", "block"]}
          >
            9
          </Badge>
          <Divider
            display={["none", "none", "block"]}
            orientation='vertical'
            borderColor='second'
            my='10px'
          />
          <Popover>
            <PopoverTrigger>
              <Flex my='10px' cursor='pointer'>
                <Box
                  as={FiUser}
                  size='34px'
                  display={["none", "none", "block"]}
                  mr='0'
                />
                {/* <Avatar
                  src='https://bitly/sage-adebayo'
                  display={["none", "none", "block"]}
                  size='sm'
                  my='2px'
                /> */}
                <Box ml='3' ml='0' display={["none", "none", "block"]}>
                  <Text isTruncated isTruncated fontSize='xs' mb='0'>
                    Namaste, Sign In
                  </Text>
                  <Stack isInline>
                    <Text
                      isTruncated
                      fontSize='sm'
                      mt='0'
                      mr='0'
                      fontWeight='bold'
                    >
                      My Account
                    </Text>
                    <Box as={IoIosArrowDown} fontsize='sm' />
                  </Stack>
                </Box>
              </Flex>
            </PopoverTrigger>
            <PopoverContent w='200px' placement='bottom-end' zIndex={4}>
              <PopoverArrow />

              <PopoverBody>
                <SignupBtn />
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Flex>
      </Flex>

      <style jsx>{`
        .logo-img {
          height: 60px;
        }
      `}</style>
    </>
  );
};

export default MiddelNavbar;
