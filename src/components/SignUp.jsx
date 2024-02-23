import React from "react";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import {
  AiOutlineMail,
  AiOutlineLock,
  AiOutlineUser,
  AiOutlinePhone,
} from "react-icons/ai";

// Define initial form values
const initialValues = {
  fullname: '',
  email: '',
  phonenumber:'',
  password: '',
  confirmpassword: '',

};

export default function SignUp() {
  // Define form submission function
  const onSubmit = (values,{resetForm}) => {
    // Handle form submission logic here
    let flag = values.password === values.confirmpassword
    if (flag) {
    console.log('Form submitted with values:', values);
    resetForm()
  }
  else{
    alert("Password and Confirm Password should be same")
  }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      <div className="sign_up">
        <div className="w-full bg-slate-700 p-20 flex justify-around align-middle items-center gap-10">
          <div className="sign_up_area w-[50%] p-10">
            <div className="form">
              <div className="text-5xl my-5 text-white font-bold">Sign Up</div>
              <Form className="sign_up-form my-10">
                <div className="form-group my-5 border rounded flex justify-center items-center align-middle">
                  <div className="icons w-[10%] text-center">
                    <AiOutlineUser
                      autoFocus
                      className="p-0 text-white text-2xl w-full text-center"
                    />
                  </div>
                  <div className="input w-[90%]">
                    <Field
                      type="text"
                      className="p-2 outline-none w-full"
                      placeholder="Full Name"
                      name="fullname" id="fullname"
                    />
                    <ErrorMessage name="fullname" component="div" />
                  </div>
                </div>

                <div className="form-group my-5 border rounded flex justify-center items-center align-middle">
                  <div className="icons w-[10%] text-center">
                    <AiOutlineMail
                      autoFocus
                      className="p-0 text-white text-2xl w-full text-center"
                    />
                  </div>
                  <div className="input w-[90%]">
                    <Field
                      type="text"
                      className="p-2 outline-none  w-full"
                      placeholder="Email"
                      name="email" id="email"

                    />
                    <ErrorMessage name="email" component="div" />

                  </div>
                </div>

                <div className="form-group my-5 border rounded flex justify-center items-center align-middle">
                  <div className="icons w-[10%] text-center">
                    <AiOutlinePhone
                      autoFocus
                      className="p-0 text-white text-2xl w-full text-center"
                    />
                  </div>
                  <div className="input w-[90%]">
                    <Field
                      type="text"
                      className="p-2 outline-none  w-full"
                      placeholder="Phone Number"
                      name="phonenumber" id="phonenumber"
                    />
                  </div>
                  <ErrorMessage name="phonenumber" component="div" />

                </div>

                <div className="form-group my-5 border rounded flex justify-center items-center align-middle">
                  <div className="icons w-[10%] text-center">
                    <AiOutlineLock className="p-0 text-white text-2xl w-full text-center" />
                  </div>
                  <div className="input w-[90%]">
                    <Field
                      type="password"
                      className="p-2 outline-none w-full"
                      placeholder="Password"
                      name="password" id="password"
                    />
                  </div>
                  <ErrorMessage name="password" component="div" />
                </div>

                <div className="form-group my-5 border rounded flex justify-center items-center align-middle">
                <div className="icons w-[10%] text-center">
                  <AiOutlineLock className="p-0 text-white text-2xl w-full text-center" />
                </div>
                <div className="input w-[90%]">
                  <Field
                    type="password"
                    className="p-2 outline-none w-full"
                    placeholder="Confirm Password"
                    name="confirmpassword" id="confirmpassword"
                  />
                </div>
                <ErrorMessage name="confirmpassword" component="div" />
              </div>

                <div></div>
                <div>
                  <button
                    type="submit"
                    className="p-2 my-5 px-16 border bg-slate-700 text-white duration-300 hover:bg-white hover:text-slate-700 rounded-md"
                  >
                    Register
                  </button>
                </div>
              </Form>
            </div>
          </div>

          <div className="engage text-center p-10 w-[50%] bg-white rounded">
            <div className="text-3xl my-5 text-slate-800 font-bold">
              One of Us ?
            </div>
            <div className="text-xl text-slate-800 font-bold">
              Please Login if you already have an account.
            </div>
            <div className="my-10">
              <a
                href="/login"
                className="p-3 px-14 border hover:bg-slate-700 hover:text-white duration-300 border-slate-700 rounded-full"
              >
                Login
              </a>
            </div>
          </div>
        </div>
      </div>
    </Formik>
  );
}
