"use client";
import { useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full bg-[#33332d] text-white">
      <div
        className="flex justify-between items-center px-3 py-2 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-4xl font-normal">{title}</h2>
        <MdArrowForwardIos
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-90" : "rotate-0"
          }`}
          size={36}
        />
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 px-3 ${
          isOpen ? "max-h-[1000px] py-3" : "max-h-0 py-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
