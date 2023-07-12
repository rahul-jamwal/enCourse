import React from 'react';
import {
  Stack,
  VStack,
  Heading,
  Text,
  Button,
  Image,
  Box,
  HStack,
} from '@chakra-ui/react';
import './home.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { CgGoogle, CgYoutube } from 'react-icons/cg';
import { SiCoursera, SiUdemy } from 'react-icons/si';
import { DiAws } from 'react-icons/di';
import intro from '../../assets/videos/intro.mp4';

const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <Stack
          direction={['column', 'row']}
          height="100%"
          justifyContent={['center', 'space-between']}
          alignItems="center"
          spacing={['16', '56']}
        >
          <VStack spacing="8" width={'full'} alignItems={['center', 'flex-end']}>
            <Heading children="Learn from the experts" size={'2xl'} />
            <Text fontSize={"2xl"} fontFamily="cursive" textAlign={["center", 'left']} children="Find Valuable content at reasonable price" />
            <Link to="/courses">
              <Button size={'lg'} colorScheme="yellow">
                Explore Now
              </Button>
            </Link>
          </VStack>

          <Image
            className="vector-graphics"
            boxSize={'md'}
            src={logo}
            objectFit="contain"
          />
        </Stack>
      </div>
      <Box padding={'8'} bg="blackAlpha.800">
        <Heading
          textAlign={'center'}
          fontFamily="body"
          color={'yellow.400'}
          children="Our Brands"
        />
        <HStack
          className="brandsBanner"
          justifyContent={'space-evenly'}
          marginTop={'4'}
        >
          <CgGoogle />
          <CgYoutube />
          <SiUdemy />
          <SiCoursera />
          <DiAws />
        </HStack>
      </Box>

      <div className="videoContainer">
        <video
          autoPlay
          controls
          controlsList="nodownload nofullscreen noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
          src={intro}
        >
        </video>
      </div>
    </section>
  );
};
export default Home;
