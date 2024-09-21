import { FC } from 'react';
import { TaskResponseType } from '@/entities/task';
import { ChangeTaskStatus } from '@/features/tasks/changeTaskStatus';
import { ChangeTaskFolder } from '@/features/tasks/changeTaskFolder';
import { DeleteTask } from '@/features/tasks/deleteTask';

interface Props {
  task: TaskResponseType
}

const TaskItemWidget: FC<Props> = ( { task } ) => {
  return (
    <div className="px-3 py-2 flex items-center gap-4 group">
      <div className="flex items-center"><ChangeTaskStatus id={task._id} checked={task.completed} /></div>
      <div className="w-full">{task.body}</div>
      <DeleteTask id={task._id} className="invisible opacity-0 group-hover:visible group-hover:opacity-100" />
      <ChangeTaskFolder value={task.folder} />
    </div>
  );
};

export default TaskItemWidget;