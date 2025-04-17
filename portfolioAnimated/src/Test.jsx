import { delay, motion } from "framer-motion";

import { useState } from "react";

const Test = () => {
  const [open, setOpen] = useState(false);
  const variants = {
    visible: (i) => ({
      opacity: 1,
      transition: { delay: i * 0.5 },
    }),
    hidden: { opacity: 0 },
  };

  const items = ["item 1", "item 2", "item 3", "item 4"];
  return (
    <div className="course">
      <motion.ul initial="hidden" animate="visible" variants={variants}>
        {items.map((item, ind) => (
          <motion.li key={item} variants={variants} custom={ind}>
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default Test;
