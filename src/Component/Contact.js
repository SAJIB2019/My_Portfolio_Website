import React from "react";

const Contact = () => {
  return (
    <div className="bg-[#f6f6f6] py-10">
      <div className="container flex flex-col">
        <div className="flex justify-center py-10 font-bold font-lora text-[30px] md:text-[40px]">
          <h1>
            <span className="text-red-500">GET</span> IN TOUCH
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row justify-between space-y-4 ">
          <div className="p-4 border-2 font-lora border-red-300 rounded-[10px] ">
            <p className="text-xl">
              <span className="font-bold text-2xl">Phone:</span>+880
              018-25979759
            </p>
            <p className="py-2 text-xl">
              <span className="font-bold text-2xl">Email: </span>
              sajib.sohelrana21@gmail.com
            </p>
            <p className="pb-2 text-xl">
              <span className="font-bold text-2xl">Address: </span>Bank Town,
              Savar, Dhaka
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d456.24144948811164!2d90.25963542429385!3d23.82103135030984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755ebad6e179769%3A0x3fe3e209605ca8e0!2sBank%20Town%2C%20Savar%20Union!5e0!3m2!1sen!2sbd!4v1672247953828!5m2!1sen!2sbd"
              width="500"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="w-full md:w-[600px]"
            ></iframe>
          </div>
          <div>
            <form action="https://formspree.io/f/mjvdbqqq" method="POST">
              <div className="flex flex-col space-y-4">
                <input
                  type="text"
                  name="username"
                  placeholder="Enter your name"
                  required
                  className="py-2 pr-40 md:pr-80 px-2 border-2 border-red-300 rounded-[10px]"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  className="py-2 pr-40 md:pr-80 px-2 border-2 border-red-300 rounded-[10px]"
                />
                <textarea
                  type="text"
                  name="message"
                  cols="30"
                  row="6"
                  placeholder="Your message"
                  required
                  className="pb-40 pr-40 md:pr-80 px-2 border-2 border-red-300 rounded-[10px]"
                />
                <input
                  type="submit"
                  value="Send"
                  className="btn border-red-300 rounded-[10px] bg-gradient-to-r from-indigo-500 via-[#e5e5e5] to-pink-500 hover:from-pink-500 hover:to-yellow-500 duration-500 font-bold font-lora text-[20px] w-full md:w-auto"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
