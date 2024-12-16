import React from 'react'
import { IoLocationSharp } from "react-icons/io5";import { FaPhoneAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa";



const Contact = () => {
  return (
    <div>
        
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold text-center mb-4">Get In Touch With Us</h1>
      <p className="text-gray-600 text-center mb-8">
        For More Information About Our Product & Services. Please Feel Free To Drop Us
        An Email. Our Staff Is Always There To Help You Out. Do Not Hesitate!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6 text-center md:text-left">
          <div>
            <h2 className="font-semibold text-xl"><IoLocationSharp /> Address</h2>
            <p className="text-gray-600">
              236 5th SE Avenue, New York NY10000, United States
            </p>
          </div>
          <div>
            <h2 className="font-semibold text-xl"><FaPhoneAlt /> Phone</h2>
            <p className="text-gray-600">Mobile: +(84) 546-6789</p>
            <p className="text-gray-600">Hotline: +(84) 456-6789</p>
          </div>
          <div>
            <h2 className="font-semibold text-xl"><FaClock /> Working Time</h2>
            <p className="text-gray-600">Monday-Friday: 9:00 - 22:00</p>
            <p className="text-gray-600">Saturday-Sunday: 9:00 - 21:00</p>
          </div>
        </div>

        
        <form className="space-y-6 bg-gray-50 p-6 rounded-lg shadow-lg">
          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="name">
              Your name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Abc"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="email">
              Email address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Abc@def.com"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="subject">
              Subject
            </label>
            <input
              id="subject"
              type="text"
              placeholder="This is an optional"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="Hi! I'd like to ask about"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-teal-500 text-white py-2 rounded-md hover:bg-teal-600 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>


    </div>
  )
}

export default Contact