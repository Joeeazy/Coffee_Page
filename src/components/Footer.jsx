import React from "react";
import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaPhone,
  FaTelegram,
} from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import CreditCards from "../../Assets/website/credit-cards.webp";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <div className="bg-gradient-to-r from-primary to-orange-700 pt-12 pb-8 text-white">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Company Details section */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              delay: 0.2,
              duration: 0.6,
            }}
            className="space-y-6"
          >
            <h1 className="text-3xl font-bold uppercase">Coffee Corner</h1>
            <p className="text-sm max-w-[300px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              porro animi reprehenderit harum, sit, distinctio aliquid
              aspernatur
            </p>
            <div>
              <p className="flex items-center gap-2">
                <FaPhone /> +254701020304
              </p>
              <p className="flex items-center gap-2">
                <FaMapLocation /> Nairobi, Kenya
              </p>
            </div>
          </motion.div>
          {/* Foooter links section */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              delay: 0.4,
              duration: 0.6,
            }}
            className="space-y-6"
          >
            <h1 className="text-3xl font-bold">Quick Links</h1>
            <div className="grid grid-cols sm:grid-cols-2 gap-3">
              {/* first column section */}
              <div>
                <ul className="space-y-2">
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact Us</li>
                  <li>Privacy Policy</li>
                  <li></li>
                </ul>
              </div>
              {/* second column section */}
              <div>
                <ul className="space-y-2">
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact Us</li>
                  <li>Privacy Policy</li>
                  <li></li>
                </ul>
              </div>
            </div>
          </motion.div>
          {/* social links section */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              delay: 0.6,
              duration: 0.6,
            }}
            className="space-y-6"
          >
            <h1 className="text-3xl font-bold">Follow Us</h1>
            <div className="flex items-center gap-3">
              <FaTwitter className="text-3xl hover:scale-105 duration-300" />
              <FaInstagram className="text-3xl hover:scale-105 duration-300" />
              <FaFacebookF className="text-3xl hover:scale-105 duration-300" />
              <FaTelegram className="text-3xl hover:scale-105 duration-300" />
            </div>
            <div>
              <h1 className="text-xl mb-2 font-semibold">Payment Methods</h1>
              <img src={CreditCards} alt="CreditCards" className="w-[80%]" />
            </div>
          </motion.div>
        </div>
        {/* CopyRight Section */}

        <p className="text-white text-center mt-8 pt-8 border-t-2">
          Copyrigh &copy; 2024 Corners Coffee inc. All rights reserved
        </p>
      </div>
    </div>
  );
}
