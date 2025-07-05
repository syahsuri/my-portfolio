import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useRef, useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "e70f8706-1fff-4b72-97e3-0ca55ab4da1f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      formRef.current?.reset(); 
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div
      id="contact"
      className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg.png")] bg-no-repeat bg-center bg-[length: 90%_auto]'
    >
      <h4 className="text-center mb-2 text-lg font-ovo">Connect With Me</h4>
      <h2 className="text-center text-5xl font-ovo">Get In Touch</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
        I am always open to discussing new projects, creative ideas, or
        opportunities to be part of your vision. Feel free to reach out to me
        through the form below or connect with me on social media.
      </p>

      <form ref={formRef} onSubmit={onSubmit} className="max-w-2xl mx-auto">
        <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
          <input
            type="text"
            placeholder="enter ur name"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
            name="name"
          />
          <input
            type="email"
            placeholder="enter ur email"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
            name="email"
          />
        </div>
        <textarea
          rows={6}
          placeholder="Enter ur Message"
          required
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6"
          name="message"
        ></textarea>

        <button
          type="submit"
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-2xl mx-auto hover:bg-black duration-500"
        >
          Submit Now{" "}
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </button>

        <p className="mt-4 text-center">{result}</p>
      </form>
    </div>
  );
};

export default Contact;
