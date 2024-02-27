import React from "react";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from "react-router-dom";



// Define initial form values
const initialValues = {
  email: '',
  password: '',
};

// Define validation schema using Yup
const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().required('Password is required'),
});


export default function Login() {
  // Define form submission function
  const onSubmit = (values, { resetForm }) => {
    // Handle form submission logic here
    console.log('Form submitted with values:', values);
    resetForm()

  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <div className="login">
        <div className="w-full bg-slate-700 p-20 flex justify-around align-middle items-center gap-10">
          <div className="login_area w-[50%] p-10">
            <div className="form">
              <div className="text-5xl my-5 text-white font-bold">Sign In</div>
              <Form className="login-form my-10">
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
                      name="email"
                      id="email"
                    />
                    <ErrorMessage name="email" component="div" />
                  </div>
                </div>

                <div className="form-group my-5 border rounded flex justify-center items-center align-middle">
                  <div className="icons w-[10%] text-center">
                    <AiOutlineLock className="p-0 text-white text-2xl w-full text-center" />
                  </div>
                  <div className="input w-[90%]">
                    <Field
                      type="text"
                      className="p-2 outline-none w-full"
                      placeholder="Password"
                      name="password"
                      id="password"
                    />
                    <ErrorMessage name="password" component="div" />
                  </div>
                </div>
                <div>
                  <Link to ='/' className="text-white hover:text-[#f88c71]">
                  Forgot Password ?
                </Link>
            </div>
            <div>
              <button
                type="submit"
                className="p-2 my-5 px-16 border bg-slate-700 text-white duration-300 hover:bg-white hover:text-slate-700 rounded-md"
              >
                Login
              </button>
            </div>
          </Form>
        </div>
      </div>

      <div className="engage text-center p-10 w-[50%] bg-white rounded">
        <div className="text-3xl my-5 text-slate-800 font-bold">
          New Here ?
        </div>
        <div className="text-xl text-slate-800 font-bold">
          Please register first to make booking.
        </div>
        <div className="my-10">
          <Link to="/register"
            className="p-3 px-14 border hover:bg-slate-700 hover:text-white duration-300 border-slate-700 rounded-full"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
      </div >
    </Formik >
  );
}
