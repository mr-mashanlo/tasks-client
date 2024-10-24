import { ElementType, FC } from 'react';
import { Link } from 'react-router-dom';
import { TaskListResponseType, TaskResponseType } from '@/entities/task/model';
import { Priority, Status, Title } from '@/entities/task/ui';

interface RowProps {
  task: TaskResponseType,
  options: ElementType
}

const Row: FC<RowProps> = ( { task, options: Options } ) => {
  return (
    <tr>
      <td className="px-5 py-3 min-w-32"><Link to={`/task/${task._id}`} className="hover:underline">{task.uid}</Link></td>
      <td className="px-5 py-3 w-full"><Title id={task._id} tag={task.tag} title={task.title} /></td>
      <td className="px-5 py-3"><Status status={task.status} /></td>
      <td className="px-5 py-3"><Priority priority={task.priority} /></td>
      <td className="px-5 py-3"><div className="flex items-center justify-center"><Options id={task._id} /></div></td>
    </tr>
  );
};

interface TableProps {
  tasks: TaskListResponseType,
  options: ElementType
}

const Table: FC<TableProps> = ( { tasks, options } ) => {
  return (
    <div className="border border-zinc-800 rounded-md">
      <table className="w-full text-left divide-y divide-zinc-800">
        <thead className="bg-zinc-800">
          <tr className="text-zinc-600">
            <th className="px-5 py-3 font-normal min-w-32 rounded-tl-[0.35rem]">Task</th>
            <th className="px-5 py-3 font-normal w-full">Title</th>
            <th className="px-5 py-3 font-normal min-w-40">Status</th>
            <th className="px-5 py-3 font-normal min-w-40">Priority</th>
            <th className="px-5 py-3 font-normal rounded-tr-[0.35rem]"><span className="block w-6 h-6"></span></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-800">
          {tasks.map( task => <Row key={task._id} task={task} options={options} /> )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;