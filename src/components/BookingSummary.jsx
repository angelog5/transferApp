import React from 'react';
import '../assets/css/bookingSummary.css';

const BookingSummary = ({
  carName,
  carModel,
  pickupDate,
  returnDate,
  location,
  pricePerDay,
  taxPerDay,
  totalPayable,
  carImage,
}) => {
  return (
    <div className="booking-summary-container">
      <h2 className="booking-summary-header">Booking Summary</h2>
      <div className="car-info">
        <img src={carImage} alt={carName} className="car-image" />
        <h3 className="car-name">{carName}</h3>
        <p className="car-price">{pricePerDay}/Day</p>
      </div>
      <div className="order-details">
        <h4>Order Details</h4>
        <p>Car: {carName}</p>
        <p>Car Model: {carModel}</p>
        <p>Pickup Date: {new Date(pickupDate).toLocaleString()}</p>
        <p>Return Date: {new Date(returnDate).toLocaleString()}</p>
        <p>Location: {location}</p>
        <p>Price: {pricePerDay}/Day</p>
        <p>Tax: {taxPerDay}/Day</p>
        <p>Total Payable: {totalPayable}</p>
      </div>
      <button className="rent-car-button" type="button">Rent Car Now</button>
    </div>
  );
};

export default BookingSummary;