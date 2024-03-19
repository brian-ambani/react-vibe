const Navbar = () => {
  return (
    <div>
      <div className="w-[933px] h-[62px] mb-4">
        <h1 className="text-black text-3xl font-bold ">Company Projects</h1>
        <p className="text-gray-500 pt-2">Last Update: 15 February 2024</p>
      </div>
      <div className="mb-4 py-3 border-b-[2px]">
        <ul className="flex gap-3 py-2">
          <li className="hover:text-[#0177FB] cursor-pointer transition-all">
            Overview
          </li>
          <li className="hover:text-[#0177FB] cursor-pointer transition-all">
            Board
          </li>
          <li className="hover:text-[#0177FB] cursor-pointer transition-all">
            List
          </li>
          <li className="hover:text-[#0177FB] cursor-pointer transition-all">
            Timeline
          </li>
          <li className="hover:text-[#0177FB] cursor-pointer transition-all">
            Calender
          </li>
          <li className="hover:text-[#0177FB] cursor-pointer transition-all">
            Workflow
          </li>
          <li className="hover:text-[#0177FB] cursor-pointer transition-all">
            Files
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
