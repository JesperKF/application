import Boxone from "./components/Boxone";
import Rightside from "./components/Rightside";

export default function Page() {
  return (
    <div className="flex h-screen w-screen">
      <Boxone />
      <Rightside />
    </div>
  );
}
