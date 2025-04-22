import Boxtwo from "./Boxtwo";
import Boxthree from "./Boxthree";
import Boxfour from "./Boxfour";
import Boxfive from "./Boxfive";

const Rightside = () => {
  return (
    <div className="w-1/2 h-full flex flex-col overflow-y-auto">
      <div className="flex flex-col w-full">
        <Boxthree />
        <Boxfour />
        <Boxfive />
      </div>
      <Boxtwo />
    </div>
  );
};

export default Rightside;
