import { FC } from 'react';
import { TaskResponseType } from '@/entities/task/model';
import { Priority, Status } from '@/entities/task/ui';
import { Content, Header, Table, TableRow } from '@/shared/ui';

interface Props {
  task: TaskResponseType
}

const View: FC<Props> = ( { task } ) => {
  return (
    <>
      <Header>{task.title}</Header>
      <div className="mt-8">
        <Table>
          <TableRow title="Task" value={task.uid} />
          <TableRow title="Tag" value={task.tag} />
          <TableRow title="Status" value={<Status status={task.status} />} />
          <TableRow title="Priority" value={<Priority priority={task.priority} />} />
          <TableRow title="Created" value={task.created} />
        </Table>
      </div>
      <div className="mt-8">
        <Content>{task.body}</Content>
      </div>
    </>
  );
};

export default View;