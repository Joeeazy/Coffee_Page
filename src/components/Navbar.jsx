import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";

export default function Navbar({ setSidebar, sidebar }) {
  return (
    <nav className="absolute top-0 left-0 w-full pt-10 text-white z-20">
      <div className="container">
        <div className="flex justify-between items-center">
          {/* logo section */}
          <motion.h1
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.4,
            }}
            className="text-2xl font-semibold uppercase"
          >
            <span className="text-primary">Coffee</span> Corner
          </motion.h1>
          {/* Menu Section */}
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 1,
            }}
          >
            <GiHamburgerMenu
              className="text-3xl cursor-pointer"
              onClick={() => setSidebar(!sidebar)}
            />
          </motion.div>
        </div>
      </div>
    </nav>
  );
}
