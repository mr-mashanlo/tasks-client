import { FC } from 'react';
import { TableRow } from '@/features/task/ui';

type Tasks = Array<{
    id: string,
    task: string,
    tag: string,
    title: string,
    status: 'todo' | 'inProgress' | 'done' | 'cancelled' | 'backlog',
    priority: 'low' | 'medium' | 'high'
  }>

const tasks: Tasks = [
  { id: '0', task: 'TASK-0000', tag: 'Bug', title: 'You can\'t compress the program without quantifying the open-source SSD pixel!', status: 'todo', priority: 'low' },
  { id: '1', task: 'TASK-0000', tag: 'Bug', title: 'You can\'t compress the program without quantifying the open-source SSD pixel!', status: 'todo', priority: 'low' }
];

const Table: FC = () => {
  return (
    <table className="w-full text-left divide-y divide-zinc-800">
      <thead className="bg-zinc-900">
        <tr className="text-zinc-600">
          <th className="px-5 py-3 font-normal min-w-32 rounded-tl-[0.35rem]">Task</th>
          <th className="px-5 py-3 font-normal w-full">Title</th>
          <th className="px-5 py-3 font-normal min-w-40">Status</th>
          <th className="px-5 py-3 font-normal min-w-40">Priority</th>
          <th className="px-5 py-3 font-normal rounded-tr-[0.35rem]"><span className="block w-6 h-6"></span></th>
        </tr>
      </thead>
      <tbody className="divide-y divide-zinc-800">
        {tasks.map( task => (
          <TableRow key={task.id} id={task.id} task={task.task} tag={task.tag} title={task.title} status={task.status} priority={task.priority} />
        ) )}
      </tbody>
    </table>
  );
};

export default Table;