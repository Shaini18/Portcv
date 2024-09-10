import React from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  const email = "ayushgaya7454@gmail.com";

  // Function to handle copying to clipboard
  const handleCopyPhone = () => {
    navigator.clipboard.writeText(CONTACT.phoneNo).then(() => {
      alert("Phone number copied to clipboard!");
    }).catch(err => {
      console.error("Failed to copy: ", err);
    });
  };

  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        <a
          href={`mailto:${email}`}
          className="bg-gray-900 hover:bg-gray-700 text-white py-2 px-4 rounded"
        >
          Contact Me
        </a>
      </motion.h1>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="my-4 cursor-pointer text-gray-100 hover:text-blue-700"
          onClick={handleCopyPhone}
        >
          {CONTACT.phoneNo} (Click to copy)
        </motion.p>
        <motion.a
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          href="#"
          className="border-b"
        >
          {CONTACT.email}
        </motion.a>
      </div>
    </div>
  );
};

export default Contact;
