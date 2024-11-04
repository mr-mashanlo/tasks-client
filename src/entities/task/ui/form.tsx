import { FC, FormHTMLAttributes, useState } from 'react';

import { Priority, Status } from '@/entities/task/ui';
import { Button, Dropdown, DropdownItem, Input, Table, TableRow, Textarea } from '@/shared/ui';

import { PriorityType, StatusType, TaskResponseType } from '../model';

interface Props extends FormHTMLAttributes<HTMLFormElement> {
  task?: TaskResponseType
}

const Form: FC<Props> = ( { task, ...others } ) => {
  const [ status, setStatus ] = useState<StatusType>( task?.status || 'todo' );
  const [ priority, setPriority ] = useState<PriorityType>( task?.priority || 'low' );

  return (
    <form {...others} >
      <div>
        <Textarea defaultValue={task?.title} display="naked" name="title" rows={1} className="text-4xl font-bold" placeholder="Organize team meeting on project goals" required />
      </div>
      <div className="mt-8">
        <Table>
          <TableRow title="Tag" value={<Input defaultValue={task?.tag} display="naked" name="tag" type="text" className="w-auto" placeholder="Bug" />} />
          <TableRow title="Status" value={
            <Dropdown
              positionX="left"
              positionY="bottom"
              button={<button type="button" className="block">{<Status value={status} />}</button>}
              items={[
                <DropdownItem type="button" label={<Status value="todo" />} handleClick={() => setStatus( 'todo' )} />,
                <DropdownItem type="button" label={<Status value="inProgress" />} handleClick={() => setStatus( 'inProgress' )} />,
                <DropdownItem type="button" label={<Status value="done" />} handleClick={() => setStatus( 'done' )} />,
                <DropdownItem type="button" label={<Status value="cancelled" />} handleClick={() => setStatus( 'cancelled' )} />,
                <DropdownItem type="button" label={<Status value="backlog" />} handleClick={() => setStatus( 'backlog' )} />
              ]}
            />
          } />
          <TableRow title="Priority" value={
            <Dropdown
              positionX="left"
              positionY="bottom"
              button={<button type="button" className="block">{<Priority value={priority} />}</button>}
              items={[
                <DropdownItem type="button" label={<Priority value="low" />} handleClick={() => setPriority( 'low' )} />,
                <DropdownItem type="button" label={<Priority value="medium" />} handleClick={() => setPriority( 'medium' )} />,
                <DropdownItem type="button" label={<Priority value="high" />} handleClick={() => setPriority( 'high' )} />
              ]}
            />
          } />
        </Table>
      </div>
      <div className="mt-8 prose-sm">
        <Textarea defaultValue={task?.body} display="naked" name="body" rows={5} placeholder="Arrange a team meeting to discuss upcoming project milestones, assign tasks, and establish a timeline for completion. Prepare an agenda to ensure all team members are aligned on priorities and can address any questions. Follow up with a summary email to document action items and deadlines." />
      </div>
      <div>
        <input onChange={e => setStatus( e.target.value as StatusType )} value={status} type="text" name="status" hidden required />
        <input onChange={e => setPriority( e.target.value as PriorityType )} value={priority} type="text" name="priority" hidden required />
      </div>
      <div className="mt-8">
        <Button display="bordered" theme="white" type="submit">{task ? 'Update task' : 'Create task'}</Button>
      </div>
    </form>
  );
};

export default Form;