import React from "react";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

function Contact({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:olumesestevejohn@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };

  return (
    <section className="snap-start min-h-screen flex flex-col justify-center items-center px-5 md:px-10 mx-auto max-w-7xl">
      {/* Section Title */}
      <h3 className="w-full text-center uppercase tracking-[20px] text-gray-500 text-2xl mb-20">
        Contact
      </h3>

      {/* Subtitle */}
      <h4 className="text-3xl md:text-4xl font-semibold text-center mb-10">
        I have got just what you need.{" "}
        <span className="underline decoration-[#F7AB0A]/50">Let's Talk.</span>
      </h4>

      {/* Contact Info */}
      <div className="flex flex-col space-y-5 mb-10 text-center">
        <div className="flex items-center justify-center space-x-5">
          <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
          <p className="text-xl md:text-2xl">+2349151958943</p>
        </div>
        <div className="flex items-center justify-center space-x-5">
          <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
          <p className="text-xl md:text-2xl">olumesestevejohn@gmail.com</p>
        </div>
        <div className="flex items-center justify-center space-x-5">
          <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
          <p className="text-xl md:text-2xl">123 Developer Lane</p>
        </div>
      </div>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-4 w-full max-w-2xl mx-auto"
      >
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
          <input
            {...register("name")}
            type="text"
            placeholder="Name"
            className="contactInput flex-1"
          />
          <input
            {...register("email")}
            type="email"
            placeholder="Email"
            className="contactInput flex-1"
          />
        </div>

        <input
          {...register("subject")}
          type="text"
          placeholder="Subject"
          className="contactInput"
        />

        <textarea
          {...register("message")}
          placeholder="Message"
          className="contactInput"
        />

        <button
          type="submit"
          className="bg-[#F7AB0A] py-4 px-8 rounded-md text-black font-bold text-lg hover:scale-105 transition-transform duration-200"
        >
          Submit
        </button>
      </form>
    </section>
  );
}

export default Contact;
