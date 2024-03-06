import React ,{useState} from 'react';
import Reservation from '../pages/Reservation';
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom'



const BusServiceCard = () => {
  // Assuming these details will be passed in via props or fetched from an API in a real application
  const serviceDetails = [
    {
    id:1,
    serviceName: 'BUSINESS PLUS',
    travelDate: '3/7/2024',
    travelTime: '10:00 AM',
    originalPrice: '5700',
    discountedPrice: '5450',
    amenities: [
      { name: 'Max 30 KG per Seat', icon: '🧳' },
      { name: 'Movies & Entertainment', icon: '🎥' },
      { name: 'Mobile Charging', icon: '🔋' },
      { name: 'Refreshment', icon: '🍽️' },
      { name: 'Free Internet', icon: '📶' },
      { name: 'Extra Legroom', icon: '💺' }
    ]
  },
  {
    id:2,
    serviceName: 'BUSINESS PLUS',
    travelDate: '3/7/2024',
    travelTime: '10:00 AM',
    originalPrice: '5700',
    discountedPrice: '5450',
    amenities: [
      { name: 'Max 30 KG per Seat', icon: '🧳' },
      { name: 'Movies & Entertainment', icon: '🎥' },
      { name: 'Mobile Charging', icon: '🔋' },
      { name: 'Refreshment', icon: '🍽️' },
      { name: 'Free Internet', icon: '📶' },
      { name: 'Extra Legroom', icon: '💺' }
    ]
  },
  
];



return (
  <>
    {serviceDetails.map((service, index) => (
      <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{service.serviceName}</div>
          <div className="text-gray-700 text-base">
            <div>{service.travelDate} {service.travelTime}</div>
            <div className="flex flex-wrap justify-start items-center mt-4">
              {service.amenities.map((amenity, amenityIndex) => (
                <div key={amenityIndex} className="flex items-center mr-4 mb-4">
                  <span className="mr-2 text-lg">{amenity.icon}</span>
                  <span className="text-sm">{amenity.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="line-through text-gray-600 text-sm">Rs {service.originalPrice}</span>
          <span className="text-lg text-red-600 font-bold ml-2">Rs {service.discountedPrice}</span>
          <span className="text-gray-600 text-sm ml-1">per passenger</span>
        </div>
        <div className="px-6 pt-4 pb-2">
          <button onClick={()=> handleSubmit(service.id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Select
          </button>
        </div>
      </div>
    ))}
  </>
);
};

export default BusServiceCard;
