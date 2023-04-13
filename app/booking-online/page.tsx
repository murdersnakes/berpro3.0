import React from "react";
import Form from "../components/Form";

export default function page() {
  return (
    <div className='bg-[var(--text-color)] text-[var(--body-color)]'>
      <div className='cont py-24'>
        <div className='flex flex-col md:flex-row gap-12'>
          <div className='prose prose-h2:font-head prose-p:font-body prose-p:text-neutral-600'>
            <h2 className=''>Online Booking Terms and Conditions</h2>
            <p>
              Welcome to our online booking page! We are delighted to offer you
              the convenience of booking our services online. Please note that
              all bookings made through this platform are subject to
              confirmation.
            </p>
            <p>
              Once you have completed the booking form, we will get in touch
              with you to confirm the date and time of your appointment. This is
              to ensure that we can accommodate your booking and avoid any
              scheduling conflicts.
            </p>
            <p>
              In addition, a quote will be sent to you via email to confirm the
              pricing of our services. We believe in transparency and want to
              make sure that you are fully aware of the costs before finalizing
              your booking.
            </p>
            <p>
              Please keep in mind that submitting the booking form does not
              guarantee your appointment. We will contact you within 24 hours to
              confirm your booking and provide further instructions.
            </p>
            <p>
              Thank you for choosing our services and we look forward to seeing
              you soon!
            </p>
          </div>
          <Form />
        </div>
      </div>
    </div>
  );
}
