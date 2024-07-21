import React from "react";
import { motion } from "framer-motion";
import coffee1 from "../../Assets/coffee/coffee1.png";
import coffee2 from "../../Assets/coffee/coffee3.png";

const servicesData = [
  {
    id: 1,
    image: coffee1,
    title: "Black Coffee",
    subtitle: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 2,
    image: coffee2,
    title: "White Coffee",
    subtitle: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 3,
    image: coffee1,
    title: "Hot Coffee",
    subtitle: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 10,
      ease: "easeInOut",
    },
  },
};

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.6,
      staggerChildren: 0.4, //delay  btn animations
    },
  },
};

export default function Services() {
  return (
    <div className="container my-16 space-y-4 ">
      {/* header section */}
      <div className="text-center max-w-lg mx-auto space-y-2">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
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
          whileInView={{ opacity: 1, y: 0 }}
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

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView={"visible"}
        viewport={{ amount: 0.8 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
      >
        {servicesData.map((service, index) => (
          <div key={index} className="text-center p-4 space-y-6">
            <motion.img
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.4,
              }}
              src={service.image}
              alt="coffee images"
              className="img-shadow2 max-w-[200px] mx-auto hover:scale-110 duration-300 cursor-pointer"
            />
            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.5,
                }}
                className="text-2xl font-bold text-primary"
              >
                {service.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.6,
                }}
                className="text-darkGrey"
              >
                {service.subtitle}
              </motion.p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
