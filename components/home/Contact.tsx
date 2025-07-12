/* eslint-disable */
"use client";

import React, { useState } from "react";
import Form from "@/components/forms/Form";
import emailjs from "@emailjs/browser";
import MotionTransitionLeft from "@/components/motion/MotionTransitionLeft";
import MotionTransitionRight from "@/components/motion/MotionTransitionRight";

const Contact: React.FC = () => {
  const [response, setResponse] = useState("Send Message");

  const submitHandler = async (data: any) => {
    setResponse("Sending...");
    await emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        data,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
      )
      .then(
        (result) => {
          setResponse("Message Sent");
          setTimeout(() => setResponse("Send Message"), 2000);
          console.log(result);
        },
        (error) => {
          setResponse("Sending Failed");
          setTimeout(() => setResponse("Send Message"), 2000);
          console.log(error);
        }
      );
    console.log("data is ", data);
  };

  return (
    <div className="py-10 bg-[#111111] overflow-hidden">
      <h2 className="text-4xl text-center mb-10 text-green-500">Contact Me</h2>
      <div className="flex md:flex-row flex-col justify-center items-center px-5 py-20 lg:min-h-screen">
        <div className="md:w-1/2 w-full mb-5 md:mb-0">
          <MotionTransitionLeft>
            <ContactInfo />
          </MotionTransitionLeft>
        </div>

        <main className="md:w-1/2 xl:w-[40vw] overflow-hidden 2xl:w-[30vw] w-full p-0 md:pt-10 ">
          <MotionTransitionRight>
            <div className="px-12 py-32 rounded-sm relative w-full bg-white">
              <div>
                <h2 className="text-4xl mb-4">Get in Touch</h2>
                <p className="mb-6">
                  Define your goals and identify areas where I can add value to
                  your business.
                </p>
              </div>

              <Form submitHandler={submitHandler}>
                <input
                  name="fullName"
                  placeholder="Full Name"
                  required
                  className="w-full py-2 border-b border-gray-300 focus:outline-none focus:border-black"
                />
                <input
                  name="phoneNumber"
                  placeholder="Phone Number"
                  required
                  className="w-full py-2 border-b border-gray-300 focus:outline-none focus:border-black"
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  required
                  className="w-full py-2 border-b border-gray-300 focus:outline-none focus:border-black"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  className="w-full py-2 border-b border-gray-300 focus:outline-none focus:border-black"
                />
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className={`${
                      response === "Sending..."
                        ? "bg-gray-500"
                        : response === "Message Sent"
                        ? "bg-green-600"
                        : response === "Sending Failed"
                        ? "bg-red-500"
                        : "bg-slate-800"
                    } text-white w-[150px] py-2 rounded-lg active:scale-[0.96] transition-all`}
                  >
                    {response}
                  </button>
                </div>
              </Form>
            </div>
          </MotionTransitionRight>
        </main>
      </div>
    </div>
  );
};

const ContactInfo: React.FC = () => {
  return (
    <div className="text-white">
      <h2 className="text-3xl md:text-5xl w-3/4 mb-4">
        I am always here to assist you and respond to your inquiries
      </h2>
      <p className="mb-8 w-3/4">
        Whether you have questions, need assistance, or simply want to share
        your thoughts, I’m eager to hear from you. Feel free to connect with me
        through any of the methods below, and I will get back to you promptly. I
        look forward to hearing from you!
      </p>
      <div className="grid grid-cols-2">
        <div className="mb-4">
          <h3 className="mb-2">Contact Number</h3>
          <p>+8801972031509</p>
        </div>
        <div className="mb-4">
          <h3 className="mb-2">My Location</h3>
          <p>Dhaka, Bangladesh</p>
        </div>
        <div className="mb-4">
          <h3 className="mb-2">Email</h3>
          <p>toufiqjilanirabbu7@gmail.com</p>
        </div>
        <div>
          <h3 className="mb-2">Social Network</h3>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/GilaniRabbu"
              target="_blank"
              rel="noopener noreferrer"
            >
              f
            </a>
            <a
              href="https://x.com/GilaniRabbu"
              target="_blank"
              rel="noopener noreferrer"
            >
              x
            </a>
            <a
              href="https://www.linkedin.com/in/toufiq-gilani-rabbu"
              target="_blank"
              rel="noopener noreferrer"
            >
              in
            </a>
            <a
              href="https://github.com/GilaniRabbu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white-800"
            >
              g
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
