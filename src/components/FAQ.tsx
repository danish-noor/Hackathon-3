import React from "react";
import { FiPlus } from "react-icons/fi";

const FAQ = () => {
  return (
    <div className="max-w-[1320px] mx-auto my-32 p-4 bg-white">
      
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-800">
          Questions Looks Here
        </h2>
        <p className="text-gray-500 mt-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the
        </p>
      </div>

     
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {faqData.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 rounded-lg shadow-sm flex justify-between items-start"
          >
            <div>
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                {item.question}
              </h3>
              <p className="text-gray-500 text-sm">{item.answer}</p>
            </div>
            <FiPlus className="text-gray-600 text-2xl" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;


const faqData = [
  {
    question: "What types of chairs do you offer?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt.",
  },
  {
    question: "How can we get in touch with you?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt.",
  },
  {
    question: "Do your chairs come with a warranty?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt.",
  },
  {
    question: "What will be delivered? And When?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt.",
  },
  {
    question: "Can I try a chair before purchasing?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt.",
  },
  {
    question: "How do I clean and maintain my Comforty chair?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt.",
  },
];
