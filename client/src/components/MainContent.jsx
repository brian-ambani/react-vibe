import Board from "./Board";
import Navbar from "./Navbar";

export const MainContent = () => {
  return (
    <div className="w-[1141px] h-[997px] mt-6 border rounded-md shadow-md p-3">
      <Navbar />
      <Board />
    </div>
  );
};
