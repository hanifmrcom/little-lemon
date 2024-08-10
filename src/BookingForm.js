import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { Box, Button, FormControl, FormLabel, Input, FormErrorMessage, Select, VStack } from '@chakra-ui/react';

const BookingForm = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phone: Yup.string().required('Phone number is required'),
    date: Yup.date().required('Booking date is required'),
    time: Yup.string().required('Booking time is required'),
    guests: Yup.number().min(1).required('Number of guests is required'),
  });

  return (
    <Box
      as="section"
      bg="white"
      p={8}
      maxW="md"
      m="auto"
      mt={-20}
      borderRadius="lg"
      boxShadow="lg"
    >
      <Formik
        initialValues={{ name: '', email: '', phone: '', date: '', time: '', guests: 1 }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <VStack spacing={4}>
              <FormControl isInvalid={errors.name && touched.name}>
                <FormLabel htmlFor="name">Name</FormLabel>
                <Field as={Input} id="name" name="name" placeholder="Your Name" />
                <FormErrorMessage>{errors.name}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={errors.email && touched.email}>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Field as={Input} id="email" name="email" placeholder="Your Email" />
                <FormErrorMessage>{errors.email}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={errors.phone && touched.phone}>
                <FormLabel htmlFor="phone">Phone Number</FormLabel>
                <Field as={Input} id="phone" name="phone" placeholder="Your Phone Number" />
                <FormErrorMessage>{errors.phone}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={errors.date && touched.date}>
                <FormLabel htmlFor="date">Date</FormLabel>
                <Field as={Input} id="date" name="date" type="date" />
                <FormErrorMessage>{errors.date}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={errors.time && touched.time}>
                <FormLabel htmlFor="time">Time</FormLabel>
                <Field as={Select} id="time" name="time">
                  <option value="">Select Time</option>
                  <option value="18:00">18:00</option>
                  <option value="19:00">19:00</option>
                  <option value="20:00">20:00</option>
                </Field>
                <FormErrorMessage>{errors.time}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={errors.guests && touched.guests}>
                <FormLabel htmlFor="guests">Guests</FormLabel>
                <Field as={Input} id="guests" name="guests" type="number" min={1} />
                <FormErrorMessage>{errors.guests}</FormErrorMessage>
              </FormControl>

              <Button type="submit" colorScheme="yellow" width="full">
                Book Now
              </Button>
            </VStack>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default BookingForm;
