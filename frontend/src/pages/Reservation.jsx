import { Formik,  Form, Field } from 'formik';
import React, { useState } from 'react';

// Dummy data for seat status: 0 for available, 1 for booked
// const seats = Array.from({ length: 40 }, (_, i) => ({ id: i + 1, status: Math.floor(Math.random() * 2) }));
const seats = Array.from({ length: 40 }, (_, i) => ({ id: i + 1, status: 0 }));

const SeatComponent = () => {
    // Initial values for Formik
    const initialValues = {
        selectedSeats: [],
        fullname:"",
        email:"",
        cnic:"",
        phone:"",

    };
    const [selectedSeats, setSelectedSeats] = useState([]);


    const handleSubmit = (values,{resetForm}) => {
        // Print selected seat numbers and IDsv
        
        console.log("Form Submitted",values);
        resetForm()
    };

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit} >
          {({ setFieldValue, values }) => (
            <Form>
              <div className="flex flex-wrap gap-2 p-4">
                {seats.map((seat) => (
                  <label key={seat.id} className={`w-12 h-12 rounded-full flex items-center justify-center cursor-pointer ${seat.status === 1 ? 'bg-red-500' : values.selectedSeats.includes(seat.id.toString()) ? 'bg-green-500' : 'bg-blue-200'}`}>
                    <Field
                      type="checkbox"
                      name="selectedSeats"
                      value={seat.id.toString()}
                      className="hidden"
                      onClick={() => setFieldValue('selectedSeats', values.selectedSeats.includes(seat.id.toString()) ? values.selectedSeats.filter(id => id !== seat.id.toString()) : [...values.selectedSeats, seat.id.toString()])}
                      disabled={seat.status === 1}
                    />
                    {seat.id}
                  </label>
                ))}
              </div>
             {/*Field for Fullname*/}
              <Field
              type="text"
              name="fullname"
              placeholder = "Full Name"
              id="fullname"
              />
               {/*Field for email*/}
              <Field
              type="text"
              name="email"
              placeholder = "Email"
              id="email"
              />
               {/*Field for CNIC*/}
              <Field
              type="text"
              name="cnic"
              placeholder = "CNIC without -"
              id="cnic"
              />
              {/*Field for Mobile Number*/}
              <Field
              type="text"
              name="phone"
              placeholder = "Mobile Phone"
              id="phone"
              />
              <button type="submit" className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Book Selected Seats
              </button>
            </Form>
          )}
        </Formik>
      );
    };
export default SeatComponent;
