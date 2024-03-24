"use client"
// import React from 'react'
import Link from "next/link";
import React, {useEffect} from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import { FormEvent } from 'react'
import {
    MDBContainer,
    MDBInput,
    MDBCheckbox,
    MDBBtn,
    MDBIcon
  } from 'mdb-react-ui-kit';

export default function LoginPage() {
    const router = useRouter();
    const flexCol = "flex flex-col items-center"
//   async function handleSubmit(event: FormEvent<HTMLFormElement>) {
//     event.preventDefault()
 
    // const formData = new FormData(event.currentTarget)
    // const email = formData.get('email')
    // const password = formData.get('password')
 
    // const response = await fetch('/api/auth/login', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ email, password }),
    // })
 
    // if (response.ok) {
    // //   router.push('/profile')
    // } else {
    //   // Handle errors
    // }
    const [user, setUser] = React.useState({
        email: "",
        password: "",
       
    })
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);


    const onLogin = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/user/login", user);
            console.log("Login success", response.data);
            toast.success("Login success");
            router.push("/");
        } catch (error:any) {
            console.log("Login failed", error.message);
            toast.error(error.message);
        } finally{
        setLoading(false);
        }
    }

    useEffect(() => {
        if(user.email.length > 0 && user.password.length > 0) {
            setButtonDisabled(false);
        } else{
            setButtonDisabled(true);
        }
    }, [user]);
  
  return (
    <div className={`${flexCol} app pt-36 text-white`}>
        <h2 className='text-center'>Log In</h2>
          <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
              <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'value={user.email}
            onChange={(e) => setUser({...user, email: e.target.value})} />
              <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' value={user.password}
            onChange={(e) => setUser({...user, password: e.target.value})}/>
              <div className="d-flex justify-content-between mx-3 mb-4">
                  <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                  <a href="!#">Forgot password?</a>
              </div>
              <MDBBtn className="mb-4" type="submit" onClick={onLogin}>Sign in</MDBBtn>
              <div className="text-center">
                  <p>Not a member? <a href="/register">Register</a></p>
                  <p>or sign up with:</p>

                  <div className='d-flex justify-content-between mx-auto' style={{ width: '40%' }}>
                      <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                          <MDBIcon fab icon='facebook-f' size="sm" />
                      </MDBBtn>

                      <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                          <MDBIcon fab icon='twitter' size="sm" />
                      </MDBBtn>

                      <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                          <MDBIcon fab icon='google' size="sm" />
                      </MDBBtn>

                      <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                          <MDBIcon fab icon='github' size="sm" />
                      </MDBBtn>

                  </div>
              </div>

          </MDBContainer>
      </div>
  )
}
