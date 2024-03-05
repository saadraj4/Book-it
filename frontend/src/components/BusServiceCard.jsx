import React from 'react';

const BusServiceCard = () => {
  // Assuming these details will be passed in via props or fetched from an API in a real application
  const serviceDetails = {
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
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{serviceDetails.serviceName}</div>
        <div className="text-gray-700 text-base">
          <div>{serviceDetails.travelDate} {serviceDetails.travelTime}</div>
          <div className="flex flex-wrap justify-start items-center mt-4">
            {serviceDetails.amenities.map((amenity, index) => (
              <div key={index} className="flex items-center mr-4 mb-4">
                <span className="mr-2 text-lg">{amenity.icon}</span>
                <span className="text-sm">{amenity.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="line-through text-gray-600 text-sm">Rs {serviceDetails.originalPrice}</span>
        <span className="text-lg text-red-600 font-bold ml-2">Rs {serviceDetails.discountedPrice}</span>
        <span className="text-gray-600 text-sm ml-1">per passenger</span>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Select
        </button>
      </div>
    </div>
  );
};

export default BusServiceCard;
