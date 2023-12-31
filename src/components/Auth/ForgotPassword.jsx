import React from 'react';
import { Container, Heading, VStack, Input, Button} from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { forgetPassword } from '../../Redux/actions/profile';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
const ForgotPassword = () => {
  const [email, setEmail] = useState('')

  const {loading, message, error} = useSelector(state=>state.profile)

  const dispatch = useDispatch()
  const submitHandler = (e)=>{
    e.preventDefault()
    dispatch(forgetPassword(email))
  }

  useEffect(() => {
    if(error) {
      toast.error(error)
      dispatch({type: 'clearError'})
    }
    if(message) {
      toast.success(message)
      dispatch({type: 'clearMessage'})
    }
  }, [dispatch, error, message]) 

  return (
    <Container padding={"16"} h="89vh">
      <form onSubmit={submitHandler}>
        <Heading
          children="Forgot Password"
          my="16"
          textTransform="uppercase"
          textAlign={["center", "left"]}
        />

          <VStack spacing={"8"}>
            <Input required id='email' value={email} onChange={e => setEmail(e.target.value)}
            placeholder="abc@gmail.com" type={'email'} focusBorderColor="yellow.500"
            />

            <Button isLoading={loading} type="submit" w={"full"} colorScheme={"yellow"}>Send Reset Link</Button>
          </VStack>
      </form>
    </Container>
  );
};

export default ForgotPassword;
