import { FC } from 'react';
import { Table } from '@/entities/task/ui';
import { TaskListResponseType } from '@/entities/task/model';
import Options from './options';

const DataTable: FC = () => {

  const tasks: TaskListResponseType = [
    {
      __v: 0,
      _id: '0',
      user: '0',
      uid: 'TASK-0000',
      tag: 'Bug',
      title: 'You can\'t compress the program without quantifying the open-source SSD pixel!',
      body: '',
      status: 'todo',
      priority: 'low',
      created: ''
    }
  ];

  return <Table tasks={tasks} options={Options} />;
};

export default DataTable;