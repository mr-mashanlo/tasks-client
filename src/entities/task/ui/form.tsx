import { FC, FormHTMLAttributes, useState } from 'react';
import { Dropdown, DropdownItem, Input, Table, TableRow, Textarea } from '@/shared/ui';
import { Priority, Status } from '@/entities/task/ui';
import { PlusIcon } from '@/shared/ui/icons';
import { PriorityType, StatusType } from '../model';

interface Props extends FormHTMLAttributes<HTMLFormElement> {
  test?: string
}

const Form: FC<Props> = ( { ...others } ) => {
  const [ status, setStatus ] = useState<StatusType>( 'todo' );
  const [ priority, setPriority ] = useState<PriorityType>( 'low' );

  return (
    <form {...others} >
      <div className="relative">
        <button className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center absolute top-1/2 -left-20 -translate-y-1/2"><PlusIcon /></button>
        <div className="text-lg font-medium">
          <Input display="naked" name="title" type="text" placeholder="You can't compress the program without quantifying the open-source SSD pixel!" />
        </div>
      </div>
      <div className="mt-8">
        <Table>
          <TableRow title="Tag" value={<Input display="naked" name="tag" type="text" placeholder="Bug" />} />
          <TableRow title="Status" value={
            <Dropdown
              positionX="left"
              positionY="bottom"
              button={<button type="button" className="block">{<Status status={status} />}</button>}
              items={[
                <DropdownItem type="button" label={<Status status="todo" />} handleClick={() => setStatus( 'todo' )} />,
                <DropdownItem type="button" label={<Status status="inProgress" />} handleClick={() => setStatus( 'inProgress' )} />,
                <DropdownItem type="button" label={<Status status="done" />} handleClick={() => setStatus( 'done' )} />,
                <DropdownItem type="button" label={<Status status="cancelled" />} handleClick={() => setStatus( 'cancelled' )} />,
                <DropdownItem type="button" label={<Status status="backlog" />} handleClick={() => setStatus( 'backlog' )} />
              ]}
            />
          } />
          <TableRow title="Priority" value={
            <Dropdown
              positionX="left"
              positionY="bottom"
              button={<button type="button" className="block">{<Priority priority={priority} />}</button>}
              items={[
                <DropdownItem type="button" label={<Priority priority="low" />} handleClick={() => setPriority( 'low' )} />,
                <DropdownItem type="button" label={<Priority priority="medium" />} handleClick={() => setPriority( 'medium' )} />,
                <DropdownItem type="button" label={<Priority priority="high" />} handleClick={() => setPriority( 'high' )} />
              ]}
            />
          } />
        </Table>
      </div>
      <div className="mt-8 prose-sm">
        <Textarea display="naked" name="body" rows={5} placeholder="Temporibus illo aspernatur odio expedita earum vel rerum ipsum magni, ratione labore ex suscipit, reiciendis voluptatum porro possimus! Laudantium est consectetur possimus tempore minus tempora. Deleniti ipsum odio voluptates veritatis." />
      </div>
      <div>
        <input onChange={e => setStatus( e.target.value as StatusType )} value={status} type="text" name="status" hidden={true} />
        <input onChange={e => setPriority( e.target.value as PriorityType )} value={priority} type="text" name="priority" hidden={true} />
      </div>
    </form>
  );
};

export default Form;