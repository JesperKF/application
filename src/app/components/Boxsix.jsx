import { MdArrowForwardIos } from "react-icons/md";

const Boxsix = () => {
  return (
    <div className="border-b border-white bg-[#33332d] w-full flex items-center justify-between px-4 py-2">
      <h2 className="text-white text-4xl">INSTAGRAM</h2>
      <a
        href="https://www.instagram.com/jesperfynbo/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white"
      >
        <MdArrowForwardIos size={36} />
      </a>
    </div>
  );
};

export default Boxsix;
