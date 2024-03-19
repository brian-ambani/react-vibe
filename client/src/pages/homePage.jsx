import Navbar from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";

export const HomePage = () => {
  return (
    <div className="bg-white flex">
      <Sidebar />
      <Navbar />
    </div>
  );
};
