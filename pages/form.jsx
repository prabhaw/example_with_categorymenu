import { useState } from "react";
import PublicLayout from "../Layout/PublicLayout";
import Link from "next/link";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Checkbox,
  Button,
  Text,
  SimpleGrid,
  FormErrorMessage,
} from "@chakra-ui/core";

const Form = (props) => {
  const formik = useFormik({
    validationSchema: Yup.object().shape({
      email: Yup.string().email().required("Email is required."),
      phonenumber: Yup.number().required("Phone Number is Required"),
      password: Yup.string()
        .required("Password is Required")
        .min(8, "passwore is too short.")
        .matches(/(?=.*[0-9])/, "password should contain Number"),
    }),
    initialValues: {
      email: "",
      phonenumber: "",
      password: "",
      rememberme: false,
    },
    onSubmit: (values, action) => {
      console.log(values);
    },
  });
  // function validateName(value) {
  //   let error;
  //   if (!value) {
  //     error = "Name is required";
  //   }
  //   return error;
  // }

  // const validatephone = (value) => {
  //   let error;
  //   if (!value) {
  //     error = "Phone number should be enter.";
  //   }
  //   return error;
  // };
  // const passwordValidation = (value) => {
  //   let error;
  //   if (!value) {
  //     error = "Password is Required";
  //   }
  //   return error;
  // };
  return (
    <>
      <PublicLayout>
        <Flex
          minHeight='70vh'
          width='full'
          align='center'
          justifyContent='center'
        >
          <Box w={["90%", "90%", "50%", "50%"]}>
            <Box textAlign='center'>
              <Heading>Sign Up Form</Heading>
              <Text>
                <Link href='/'>
                  <a>Statr your 14day Trial</a>
                </Link>
              </Text>
            </Box>
            <Box>
              <form onSubmit={formik.handleSubmit}>
                <SimpleGrid columns={[1, 1, 2, 2]} mb='4' spacing={5}>
                  {/* <Field name='email' validate={validateName}>
                        {({ field, form }) => ( */}
                  <FormControl
                    isInvalid={formik.errors.email && formik.touched.email}
                  >
                    <FormLabel htmlFor='email' mb='0' pb='0'>
                      Email Address
                    </FormLabel>
                    <Input
                      type='text'
                      id='email'
                      // {...field}
                      errorBorderColor='red.300'
                      focusBorderColor='pink.400'
                      placeholder='Enter Your email'
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                  </FormControl>
                  {/* )} */}
                  {/* </Field> */}
                  {/* <Field name='phonenumber' validate={validatephone}>
                        {({ field, form }) => ( */}
                  <FormControl
                    isInvalid={
                      formik.errors.phonenumber && formik.touched.phonenumber
                    }
                  >
                    <FormLabel htmlFor='phonenumber' mb='0' pb='0'>
                      Phone Number
                    </FormLabel>
                    <Input
                      type='number'
                      id='phonenumber'
                      errorBorderColor='red.300'
                      focusBorderColor='pink.400'
                      placeholder='Enter Your PhoneNumber'
                      // {...field}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <FormErrorMessage>
                      {formik.errors.phonenumber}
                    </FormErrorMessage>
                  </FormControl>
                  {/* )} */}
                  {/* </Field> */}
                </SimpleGrid>
                {/* <Field name='password' validate={passwordValidation}>
                      {({ field, form }) => ( */}
                <FormControl
                  isInvalid={formik.errors.password && formik.touched.password}
                >
                  <FormLabel htmlFor='password' mb='0' pb='0'>
                    Password
                  </FormLabel>
                  <Input
                    type='password'
                    id='password'
                    // {...field}
                    errorBorderColor='red.300'
                    placeholder='Enter Your Password'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
                </FormControl>
                {/* )}
                    </Field> */}
                <Stack isInline justifyContent='space-between' mt='4'>
                  <Box>
                    <Checkbox name='rememberme' size='sm'>
                      Rmember Me
                    </Checkbox>
                  </Box>
                  <Box>
                    <Link href='/'>
                      <Text fontSize='sm'>Forgot your Password</Text>
                    </Link>
                  </Box>
                </Stack>
                <Button
                  w='full'
                  borderRadius='0'
                  variantColor='teal'
                  mt={4}
                  type='submit'
                  disabled={!(formik.isValid && formik.dirty)}
                >
                  Sign Up
                </Button>
              </form>
            </Box>
          </Box>
        </Flex>
      </PublicLayout>
    </>
  );
};

export default Form;
