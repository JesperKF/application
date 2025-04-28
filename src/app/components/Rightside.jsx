import Boxtwo from "./Boxtwo";
import Boxthree from "./Boxthree";
import Boxfour from "./Boxfour";
import Boxfive from "./Boxfive";
import Boxsix from "./Boxsix";

const Rightside = () => {
  return (
    <div className="w-1/2 h-full flex flex-col border border-black overflow-y-auto">
      <div className="flex flex-col w-full gap-6">
        <Boxthree />
        <Boxfour />
        <Boxfive />
        <Boxsix />
      </div>
      <Boxtwo />
    </div>
  );
};

export default Rightside;
