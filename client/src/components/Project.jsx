const Project = ({ title, description }) => {
  return (
    <div className="w-[250px] h-[197px] border rounded-md mt-8 p-4 cursor-pointer">
      <h2 className="text-[#1E293B] font-bold mb-1 ">UX Adjustment</h2>
      <p className="text-[#94A3B8] mb-2">
        It just needs to adapt the UI from what you did before
      </p>
      <h4 className="mb-2 bg-[#F0FAFF] text-[#33BFFF] h-8 w-20 flex items-center justify-center rounded-md">
        Research
      </h4>
      <div className="flex justify-between mt-2 border-t-2 pt-5">
        <p>8</p>
        <p>Tomorrow</p>
      </div>
    </div>
  );
};
export default Project;
