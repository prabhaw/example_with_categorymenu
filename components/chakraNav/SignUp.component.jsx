const { Flex, Button, Text } = require("@chakra-ui/core");

const SignupBtn = (props) => {
  return (
    <>
      <Flex display='block'>
        <Button variantColor='teal' w='full' size='sm' mb='5px'>
          Sign In
        </Button>
        <Text fontSize='xs'>New Customer?</Text>
        <Button bg='main' variantColor='teal' w='full' size='sm' mb='3px'>
          Start Here
        </Button>
      </Flex>
    </>
  );
};

export default SignupBtn;
