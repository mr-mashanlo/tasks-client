import { FC } from 'react';

const TaskListSkeleton: FC = () => {
  return (
    <div className="flex flex-col gap-2 animate-pulse">
      <div className="px-3 py-2 flex items-center gap-4">
        <span className="block w-5 h-5 bg-[#C6CAD2] rounded-md flex-shrink-0"></span>
        <span className="w-full">
          <span className="block w-40 h-3 bg-[#C6CAD2] rounded-full"></span>
        </span>
        <span className="block w-4 h-4 bg-[#C6CAD2] rounded-full flex-shrink-0"></span>
      </div>
      <div className="px-3 py-2 flex items-center gap-4">
        <span className="block w-5 h-5 bg-[#C6CAD2] rounded-md flex-shrink-0"></span>
        <span className="w-full">
          <span className="block w-48 h-3 bg-[#C6CAD2] rounded-full"></span>
        </span>
        <span className="block w-4 h-4 bg-[#C6CAD2] rounded-full flex-shrink-0"></span>
      </div>
      <div className="px-3 py-2 flex items-center gap-4">
        <span className="block w-5 h-5 bg-[#C6CAD2] rounded-md flex-shrink-0"></span>
        <span className="w-full">
          <span className="block w-60 h-3 bg-[#C6CAD2] rounded-full"></span>
        </span>
        <span className="block w-4 h-4 bg-[#C6CAD2] rounded-full flex-shrink-0"></span>
      </div>
    </div>
  );
};

export default TaskListSkeleton;