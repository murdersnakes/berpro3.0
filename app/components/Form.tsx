"use client";

import React, { useState, useEffect } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCheck, FaSpinner, FaTimes } from "react-icons/fa";
import buildingPrice from "../../data/BasePrice";
import { bookedTimeSlots } from "./bookedTimeSlots";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [eircode, setEircode] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [city, setCity] = useState("");
  const [county, setCounty] = useState("");
  const [buildingType, setBuildingType] = useState("");
  const [numRooms, setNumRooms] = useState("");
  const [dateTime, setDateTime] = useState(new Date());
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(null);
  const [price, setPrice] = useState(0);
  const [showAddressSection, setShowAddressSection] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    setIsSuccess(null);
    const address = `${addressLine1}, ${addressLine2}, ${city}, ${county}`;

    const response = await fetch("/api/form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        address,
        buildingType,
        numRooms,
        dateTime,
        eircode,
        price,
      }),
    });

    if (response.ok) {
      setIsLoading(false);
      setIsSuccess(true);
      setSuccessMessage("Email sent 🚀 - We will be in touch asap.");
    } else {
      setIsLoading(false);
      setIsSuccess(false);
      setSuccessMessage("Error sending message ❌ - Please try again later.");
    }
  }

  const renderButtonIcon = () => {
    if (isLoading) {
      return <FaSpinner className='animate-spin' />;
    } else if (isSuccess === true) {
      return <FaCheck />;
    } else if (isSuccess === false) {
      return <FaTimes />;
    }
  };

  const isDateAvailable = (date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Disallow Sundays and days before today
    if (date.getDay() === 0 || date < today) {
      return false;
    }

    const bookedSlot = bookedTimeSlots.find(
      (slot) => slot.date.toDateString() === date.toDateString()
    );

    // If the whole day is booked, exclude that date
    if (bookedSlot && bookedSlot.isFullDay) {
      return false;
    }

    // If the date is not in the bookedTimeSlots array or if it's not a full-day booking, the date is available
    return true;
  };

  const isTimeAvailable = (date) => {
    const bookedSlot = bookedTimeSlots.find(
      (slot) => slot.date.toDateString() === date.toDateString()
    );

    // If the whole day is booked, exclude all times for that day
    if (bookedSlot && bookedSlot.isFullDay) {
      return false;
    }

    // If specific time slots are booked, exclude those times
    if (bookedSlot) {
      return !bookedSlot.time.some(
        (time) =>
          time.getHours() === date.getHours() &&
          time.getMinutes() === date.getMinutes()
      );
    }

    // If the date is not in the bookedTimeSlots array, all times are available
    return true;
  };

  const getMinTime = (date) => {
    const now = new Date();
    if (
      date.getDate() === now.getDate() &&
      date.getMonth() === now.getMonth() &&
      date.getFullYear() === now.getFullYear()
    ) {
      return new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        now.getHours(),
        now.getMinutes()
      );
    } else {
      return new Date(0, 0, 0, 8, 0); // 8 AM
    }
  };

  const calculatePrice = (buildingType, numRooms) => {
    const basePrice = buildingPrice;
    const roomPrice = 40;
    return basePrice[buildingType] + numRooms * roomPrice;
  };

  return (
    <div className='w-full text-[var(--body-color)]'>
      <div className='bg-neutral-100 rounded shadow-2xl '>
        <h2 className='text-center sm:mb-3 h3 pt-6'>Book an appointment</h2>
        <form
          onSubmit={handleSubmit}
          method='POST'
          className='form w-full flex flex-col gap-2 p-7'
        >
          <span className='h4 border-t-2 pt-2'>Contact Details</span>
          <input
            placeholder='Name'
            required
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete='name'
          />
          <input
            placeholder='Email'
            required
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete='email'
          />

          <input
            placeholder='Phone'
            required
            type='tel'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            autoComplete='tel'
          />

          <input
            placeholder='Eircode'
            type='text'
            value={eircode}
            onChange={(e) => setEircode(e.target.value)}
            autoComplete='postal-code'
          />

          <button
            type='button'
            onClick={() => setShowAddressSection(!showAddressSection)}
            className='underline text-[var(--primary-color)] text-left ml-3 p4'
          >
            Don&apos;t have an eircode?
          </button>

          {showAddressSection && (
            <>
              <input
                placeholder='Address Line 1'
                required
                type='text'
                value={addressLine1}
                onChange={(e) => setAddressLine1(e.target.value)}
              />
              <input
                placeholder='Address Line 2'
                type='text'
                value={addressLine2}
                onChange={(e) => setAddressLine2(e.target.value)}
              />
              <input
                placeholder='City'
                required
                type='text'
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <input
                placeholder='County'
                required
                type='text'
                value={county}
                onChange={(e) => setCounty(e.target.value)}
              />
            </>
          )}

          <span className='h4 border-t-2 pt-2'>Building Details</span>
          <select
            required
            value={buildingType}
            onChange={(e) => {
              setBuildingType(e.target.value);
              setPrice(calculatePrice(e.target.value, numRooms));
            }}
          >
            <option value=''>Select Building Type</option>
            <option value='apartment'>Apartment</option>
            <option value='bungalow'>Bungalow</option>
            <option value='cottage'>Cottage</option>
            <option value='detached'>Detached House</option>
            <option value='dormer'>Dormer Bungalow</option>
            <option value='duplex'>Duplex</option>
            <option value='endTerrace'>End of Terrace House</option>
            <option value='semiDetached'>Semi-Detached House</option>
            <option value='terraced'>Terraced House</option>
            <option value='townhouse'>Townhouse</option>
          </select>
          <input
            placeholder='Number of rooms'
            required
            type='number'
            min='1'
            max='9'
            value={numRooms}
            onChange={(e) => {
              setNumRooms(e.target.value);
              setPrice(calculatePrice(buildingType, e.target.value));
            }}
          />
          <span className='h4 border-t-2 pt-2'>Appointment Date</span>
          <ReactDatePicker
            selected={dateTime}
            onChange={(date) => setDateTime(date)}
            showTimeSelect
            dateFormat='dd MMM yyyy (h aa)'
            timeIntervals={60}
            filterDate={isDateAvailable}
            filterTime={isTimeAvailable}
            minDate={new Date()} // Set the minimum date to today
            minTime={getMinTime(dateTime)} // Set the minimum time based on the selected date
            maxTime={new Date(0, 0, 0, 20, 0)} // Set maximum time to 8 PM
            placeholderText='Select a date and time'
            withPortal
          />

          {buildingType && numRooms && (
            <div className='flex items-center p1 gap-2'>
              <h4 className='font-bold'>Quote</h4>
              <p>€{price}</p>
            </div>
          )}

          <button
            type='submit'
            className='mt-3 flex justify-between items-center bg-[var(--primary-color)] py-3 px-5 h4 text-white rounded hover-shadow hover:bg-[var(--primary-color-hover)] transition-colors'
            disabled={isLoading}
          >
            Submit
            {renderButtonIcon()}
          </button>
          {successMessage && (
            <p
              className={`px-4 py-2 mb-2 rounded shadow ${
                successMessage === "Email sent 🚀 - We will be in touch asap."
                  ? "bg-emerald-200"
                  : "bg-rose-300"
              }`}
            >
              {successMessage}
            </p>
          )}
          <p className='p4'>
            We respect your privacy and will never share your information
          </p>
        </form>
      </div>
    </div>
  );
}
