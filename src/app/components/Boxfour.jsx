import Accordion from "./Accordion";

const projects = [
  { name: "EVA OG OTTO", url: "https://evaogotto.netlify.app/" },
  { name: "KIDSAID CHARITY", url: "https://mindemagikerne.netlify.app/" },
  {
    name: "DISTORTION",
    url: "https://preeminent-starburst-b50509.netlify.app/",
  },
  { name: "TO DO APP", url: "https://jesperstodo.netlify.app/" },
];

const Boxfour = () => {
  return (
    <div className="w-full border-b border-white ">
      <Accordion title="PROJECTS">
        <ul className="w-full py-4">
          {projects.map((project) => (
            <li
              key={project.name}
              className="text-2xl font-light border-b border-white/20 py-4 hover:bg-white/10 hover:text-gray-300"
            >
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2"
              >
                {project.name}
              </a>
            </li>
          ))}
        </ul>
      </Accordion>
    </div>
  );
};

export default Boxfour;
