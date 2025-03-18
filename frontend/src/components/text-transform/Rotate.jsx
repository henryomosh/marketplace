import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  {
    id: 1,
    content: "Mikrotik Devices"
  },
  {
    id: 2,
    content: "Routers"
  },
  {
    id: 3,
    content: "Security Cameras"
  },
  {
    id: 4,
    content: "Structured Cabling"
  },
  {
    id: 5,
    content: "Networking Accessories"
  }
];
const Rotate = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((state) => {
        if (state >= items.length - 1) return 0;
        return state + 1;
      });
    }, 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <div>
      <AnimatePresence>
        <motion.div
          key={items[index].id}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ ease: "easeInOut" }}
          style={{ position: "absolute", zIndex: 10 }}
        >
          {items[index].content}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Rotate;
