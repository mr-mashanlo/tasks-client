import { FC } from 'react';

interface Props {
  children?: string
}

const TaskListError: FC<Props> = ( { children = 'Something went wrong' } ) => {
  return (
    <div className="h-40 flex items-center justify-center">
      <span className="text-gray-400">{children}</span>
    </div>
  );
};

export default TaskListError;