import {
  Container,
  FormLabel,
  Heading,
  Input,
  VStack,
  Box,
  Button,
  Avatar,
} from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../../Redux/actions/user';

export const fileUploadCss = {
  cursor: 'pointer',
  marginLeft: '-5%',
  width: '110%',
  height: '100%',
  border: 'none',
  color: '#ECC94B',
  backgroundColor: 'white',
};

const Register = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [imagePrev, setImagePrev] = useState('');
  const [image, setImage] = useState('');

  const changeImageHandler = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
  };

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    const myForm = new FormData()

    myForm.append("name", name)
    myForm.append("email", email)
    myForm.append("password", password)
    myForm.append('file', image)


    dispatch(register(myForm))
  }

  return (
    <Container h={'89vh'}>
      <VStack h={'full'} justifyContent={'center'} spacing="16">
        <Heading textTransform={'uppercase'} children="Registeration" />
        <form onSubmit={submitHandler} style={{ width: '100%' }}>
          <Box my="4" display={'flex'} justifyContent={'center'}>
            <Avatar src={imagePrev} size="2xl" />
          </Box>

          <Box my={'4'}>
            <FormLabel htmlFor="name" children="Name"></FormLabel>
            <Input
              required
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="abc"
              type={'text'}
              focusBorderColor="yellow.500"
            />
          </Box>

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

          <Box my={'4'}>
            <FormLabel
              htmlFor="chooseAvatar"
              children="Chose Avatar"
            ></FormLabel>
            <Input
              accept="image/*"
              required
              id="chooseAvatar"
              type={'file'}
              focusBorderColor="yellow.500"
              css={{
                '&::file-selector-button': fileUploadCss,
              }}
              onChange={changeImageHandler}
            />
          </Box>

          <Button my="4" colorScheme={'yellow'} type="submit">
            Sign Up
          </Button>

          <Box my="4">
            Already Signed Up?{' '}
            <Link to="/login">
              <Button colorScheme={'yellow'} variant={'link'}>
                Login
              </Button>{' '}
              here
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Register;
