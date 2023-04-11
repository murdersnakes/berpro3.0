"use client";

import React, { useState, useEffect } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import supabase from '../../supabase/supabase';

export default function Form() {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await fetch("/api/form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first: first,
        last: last,
        email: email,
        date: date,
      }),
    });
    if (response.ok) {
      setSuccessMessage("Email sent 🚀 - We will be in touch asap.");
      addBooking(date); // Add the booking to the Supabase table
    } else {
      setSuccessMessage("Error sending message ❌ - Please try again later.");
    }
  }

  const [disabledDateTimeSlots, setDisabledDateTimeSlots] = useState([]);

  async function fetchDisabledTimeSlots() {
    const { data, error } = await supabase.from("bookings").select("dateTime");
    if (error) {
      console.error("Error fetching disabled time slots:", error);
    } else {
      setDisabledDateTimeSlots(data.map((row) => row.dateTime));
    }
  }

  useEffect(() => {
    fetchDisabledTimeSlots();
  }, []);

  async function addBooking(dateTime) {
    const { error } = await supabase.from("bookings").insert([{ dateTime }]);
    if (error) {
      console.error("Error adding booking:", error);
    } else {
      // Update the disabled time slots
      fetchDisabledTimeSlots();
    }
  }

  const getDisabledTimes = (selectedDate) => {
    // Replace this array with the disabled time slots from your CMS or database.
    const disabledDateTimeSlots = [
      "2023-04-27T17:00:00.000Z",
      // Add more disabled time slots here.
    ];

    const selectedDateISOString = selectedDate.toISOString().slice(0, 10);
    const disabledTimesForSelectedDate = disabledDateTimeSlots
      .filter((slot) => slot.slice(0, 10) === selectedDateISOString)
      .map((slot) => new Date(slot));

    return disabledTimesForSelectedDate;
  };

  return (
    <div className='w-full text-[var(--body-color)]'>
      <div className='bg-neutral-100 rounded shadow-2xl p-7 sm:p-10'>
        <h2 className='mb-4  sm:text-center sm:mb-6 h3'>Book an appointment</h2>
        <form onSubmit={handleSubmit} method='POST'>
          <div className='mb-1 sm:mb-2 flex items-center justify-between'>
            <label htmlFor='first' className='inline-block mb-1 p2'>
              First name
            </label>
            <input
              placeholder='Joe'
              aria-label='First name'
              required
              type='text'
              id='first'
              name='first'
              value={first}
              onChange={(e) => setFirst(e.target.value)}
            />
          </div>
          <div className='mb-1 sm:mb-2 flex items-center justify-between'>
            <label htmlFor='last' className='inline-block mb-1 p2 '>
              Last name
            </label>
            <input
              placeholder='Bloggs'
              aria-label='Last name'
              required
              type='text'
              id='last'
              name='last'
              value={last}
              onChange={(e) => setLast(e.target.value)}
            />
          </div>
          <div className='w-full mb-1 sm:mb-2 flex items-center justify-between'>
            <label htmlFor='email' className='inline-block mb-1 p2'>
              E-mail
            </label>
            <input
              placeholder='joe.bloggs@example.ie'
              aria-label='E-mail'
              required
              type='text'
              id='email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='mb-1 sm:mb-2 flex items-center justify-between'>
            <label htmlFor='email' className='inline-block mb-1 p2'>
              Choose a date and time
            </label>
            <ReactDatePicker
              className=' w-fit ml-auto flex justify-end'
              selected={selectedDateTime}
              onChange={(date) => {
                setSelectedDateTime(date);
                setDate(date); // Update the date state variable
              }}
              dateFormat='dd MMM (h aa)'
              showTimeSelect
              timeFormat='h:mm aa'
              timeIntervals={60}
              filterDate={(date) => {
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                const day = date.getDay();
                return (
                  day !== 0 && // Exclude Sundays
                  date >= today // Exclude dates before today
                );
              }}
              filterTime={(time) => {
                const hour = time.getUTCHours();
                const day = time.getUTCDay();
                const isOutsideWorkingHours =
                  hour < 8 || hour >= 20 || day === 0;

                return !isOutsideWorkingHours;
              }}
              excludeTimes={getDisabledTimes(selectedDateTime)}
            />
          </div>

          <div className='mt-4 mb-2 sm:mb-4'>
            <button
              type='submit'
              aria-label='Submit'
              className='inline-flex items-center justify-center w-full h-12 px-6 p1 tracking-wide text-white transition duration-200 rounded shadow-md bg-[var(--primary-color)] hover:bg-[var(--primary-color-hover)] focus:shadow-outline focus:outline-none'
            >
              Submit
            </button>
          </div>
          {successMessage && (
            <p
              className={`px-4 py-2 mb-2 ${
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
