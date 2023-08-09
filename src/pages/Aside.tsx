import Confidential from "../components/Confidential";
import Explore from "../components/Explore";
import Library from "../components/Library";

export default function Aside() {
  return (
    <aside className="bg-dark">
      <Explore />
      <Library />
      <Confidential />
    </aside>
  );
}
