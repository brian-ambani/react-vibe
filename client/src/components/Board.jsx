import Project from "./Project";

const Board = () => {
  return (
    <div>
      <div className="flex gap-8">
        <div>
          <div className="w-[249px] h-[42px] border-b-2 border-[#1e293b] text-lg font-bold uppercase">
            Todo
          </div>
          <Project />
        </div>
        <div>
          <div className="w-[249px] h-[42px] border-b-2 border-[#306BFF] text-lg font-bold uppercase">
            In progress
          </div>
        </div>
        <div>
          <div className="w-[249px] h-[42px] border-b-2 border-[#FFB580] text-lg font-bold uppercase">
            QA
          </div>
        </div>
        <div>
          <div className="w-[249px] h-[42px] border-b-2 border-[#78C552] text-lg font-bold uppercase">
            Completed
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;
