const Navbar = () => {
  return (
    <div className="w-[1141px] h-[997px] mt-6 border rounded-md shadow-md p-3">
      <div className="w-[933px] h-[62px] mb-4">
        <h1 className="text-black text-3xl font-bold ">Company Projects</h1>
        <p className="text-gray-500 pt-2">Last Update: 15 February 2024</p>
      </div>
      <div className="mb-4 py-3 border-b-[2px]">
        <ul className="flex gap-3 ">
          <li className="hover:text-[#0177FB] cursor-pointer">Overview</li>
          <li className="hover:text-[#0177FB] cursor-pointer">Board</li>
          <li className="hover:text-[#0177FB] cursor-pointer">List</li>
          <li className="hover:text-[#0177FB] cursor-pointer">Timeline</li>
          <li className="hover:text-[#0177FB] cursor-pointer">Calender</li>
          <li className="hover:text-[#0177FB] cursor-pointer">Workflow</li>
          <li className="hover:text-[#0177FB] cursor-pointer">Files</li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
