import React from "react";
import { motion } from "framer-motion";
import coffee1 from "../../public/coffee/coffee1.png";
const servicesData = [
  {
    id: 1,
    image: coffee1,
    title: "Black Coffee",
    subtitle: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 2,
    image: 'url("/coffee/coffee2.png")',
    title: "White Coffee",
    subtitle: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 3,
    image: 'url("/coffee/coffee1.png")',
    title: "Hot Coffee",
    subtitle: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];
export default function Services() {
  return (
    <div className="container my-16 space-y-4 ">
      {/* header section */}
      <div className="text-center max-w-lg mx-auto space-y-2">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.2,
          }}
          className="text-3xl font-bold text-lightGray"
        >
          Fresh and <span className="text-primary">Tasty Coffee</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.6, //delay for the 1st element
          }}
          className="text-sm opacity-50"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
          voluptatem et fuga modi porro a est cum! Facilis aliquid error rerum
          perspiciatis aperiam dolorum inventore.
        </motion.p>
      </div>
      {/* cards section */}
      <div>
        <div>
          <div>
            {servicesData.map((service, data) => (
              <div key={service.id}>{service.image}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
