import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';


// Define initial form values
const initialValues = {
  origin: '',
  destination: '',
  date: new Date(),

};

export default function BookSystem() {
  // Define form submission function
  const onSubmit = (values, { resetForm }) => {
    // Handle form submission logic here
    console.log('Form submitted with values:', values);
    resetForm()
  };

  const origins = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    // Add more options as needed
  ];
  const destinations = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    // Add more options as needed
  ];



  return (
    <div>
      <Formik initialValues={initialValues}
        onSubmit={onSubmit}>
        
        <div className='book-system bg-slate-300 top-[65%] relative w-full px-20 py-8'>
          <div className='form-group'>
            <p className='text-2xl py-3 pb-5'>Search for a route</p>
            <Form className='form sm:flex items-center justify-evenly '>

              <div className='from sm:w-[25%] py-2'>
                <Field placeholder='From...' name='origin' className=' w-full input border outline-none px-3 py-2 border-slate-400 rounded' as='select'>
                  <option value="" label="Select origin" />
                  {origins.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}

                  </Field>
                  
              </div>
              <div className='from sm:w-[25%] py-2'>
                <Field placeholder='To...   ' name='destination' className=' w-full input border outline-none px-3 py-2 border-slate-400 rounded' as='select' >
                <option value="" label="Select destination" />
                {destinations.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}

                </Field>
                </div>
              <div className='from sm:w-[25%] py-2'>
                <Field placeholder='Date' name='date'
                  className=' w-full input border outline-none px-3 py-2 border-slate-400 rounded' type='date' />
              </div>
              <div className='from sm:w-[15%] w-[50%] py-2'>
                <button autoFocus className=' w-full input border outline-none  py-2 bg-slate-700 text-white border-slate-400 rounded' type='submit'>
                  Search
                </button>
              </div>
            </Form>
          </div>
        </div>
      </Formik>
    </div>
  )
}
