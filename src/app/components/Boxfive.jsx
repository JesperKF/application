import { MdArrowForwardIos } from "react-icons/md";

const Boxfive = () => {
  return (
    <div className="w-full border-b border-white bg-[#33332d] text-white px-3 py-2 flex justify-between items-center">
      <h2 className="text-4xl font-normal">LINKEDIN</h2>
      <a
        href="https://www.linkedin.com/in/jesper-fynbo-8645b616b/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white"
      >
        <MdArrowForwardIos size={36} />
      </a>
    </div>
  );
};

export default Boxfive;
