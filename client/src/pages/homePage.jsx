import { Sidebar } from "../components/Sidebar";
import { MainContent } from "../components/MainContent";

export const HomePage = () => {
  return (
    <div className="container mx-auto bg-white flex gap-4">
      <Sidebar />
      <MainContent />
    </div>
  );
};
