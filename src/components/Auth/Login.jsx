import {
  Container,
  FormLabel,
  Heading,
  Input,
  VStack,
  Box,
  Button,
} from '@chakra-ui/react';
import {Link} from 'react-router-dom'
import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../Redux/actions/user';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch()

  const submitHandler = (e)=>{
    e.preventDefault()
    dispatch(login(email, password))
  }

  return (
    <Container h={'89vh'}>
      <VStack h={'full'} justifyContent={'center'} spacing="16">
        <Heading children="Welcome to EnCourse" />
        <form style={{ width: '100%' }} onSubmit={submitHandler}>
          <Box my={'4'}>
            <FormLabel htmlFor="email" children="Email address"></FormLabel>
            <Input
              required
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="abc@gmail.com"
              type={'email'}
              focusBorderColor="yellow.500"
            />
          </Box>

          <Box my={'4'}>
            <FormLabel htmlFor="password" children="Password"></FormLabel>
            <Input
              required
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Enter your password"
              type={'password'}
              focusBorderColor="yellow.500"
            />
          </Box>

          <Box>
            <Link to="/forgotPassword" fontSize={'sm'}>
              <Button variant="link">Forgot Password?</Button>
            </Link>
          </Box>
          <Button my="4" colorScheme={'yellow'} type="submit">
            Login
          </Button>
          <Box my="4">
            New User?{' '}
            <Link to="/register">
              <Button colorScheme={'yellow'} variant={'link'}>
                Sign Up
              </Button>{' '}
              here
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Login;
