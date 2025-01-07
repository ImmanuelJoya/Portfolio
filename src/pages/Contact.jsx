import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useSubmit } from '../hooks/useSubmit'; 
import { useAlertContext } from '../hooks/AlertContext'; 

const Contact = () => {
  const { onOpen } = useAlertContext();
  const { submit, isLoading } = useSubmit();
  const [showPopup, setShowPopup] = useState(false); 

  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      enquiryType: '',
      message: '',
    },
    validate: values => {
      const errors = {};
      if (!values.firstName) {
        errors.firstName = 'First name is required';
      }
      if (!values.email) {
        errors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email is invalid';
      }
      if (!values.enquiryType) {
        errors.enquiryType = 'Type of enquiry is required';
      }
      if (!values.message) {
        errors.message = 'Message is required';
      }
      return errors;
    },
    onSubmit: async (values, { resetForm }) => {
      const response = await submit(values);
      if (response.type === 'success') {
        onOpen(`Submission successful for ${values.firstName}`);
        resetForm();
        setShowPopup(true); 
      } else {
        onOpen(`Submission failed: ${response.message}`);
      }
    },
  });

  return (
    <div className="bg-dark-800 border border-gray-300 shadow-md rounded-lg p-6 w-full max-w-lg mx-auto mt-10 mb-10 text-white">
      <h2 className="text-2xl font-semibold text-center mb-4">Contact Us</h2>
      <form onSubmit={formik.handleSubmit} className="space-y-4  ">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
          <input
          placeholder='First Name'
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring focus:ring-blue-500"
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div className="text-red-600 text-sm">{formik.errors.firstName}</div>
          ) : null}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
          placeholder='Email'
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring focus:ring-blue-500"
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-600 text-sm">{formik.errors.email}</div>
          ) : null}
        </div>
        <div>
          <label htmlFor="enquiryType" className="block text-sm font-medium text-gray-700">Type of Enquiry</label>
          <select
            placeholder='Type of Enquiry'
            id="enquiryType"
            name="enquiryType"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.enquiryType}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring focus:ring-blue-500"
          >
            <option value="">Select...</option>
            <option value="general">General Inquiry</option>
            <option value="support">Support</option>
            <option value="feedback">Feedback</option>
          </select>
          {formik.touched.enquiryType && formik.errors.enquiryType ? (
            <div className="text-red-600 text-sm">{formik.errors.enquiryType}</div>
          ) : null}
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            placeholder='Message'
            id="message"
            name="message"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring focus:ring-blue-500"
          />
          {formik.touched.message && formik.errors.message ? (
            <div className="text-red-600 text-sm">{formik.errors.message}</div>
          ) : null}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-200"
          disabled={isLoading}
        >
          {isLoading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
      <div className="flex justify-center mt-4">
        <a href="#" className="mx-2 text-blue-500">Facebook</a>
        <a href="#" className="mx-2 text-blue-500">Twitter</a>
        <a href="#" className="mx-2 text-blue-500">LinkedIn</a>
      </div>
    </div>
  );
};

export default Contact;