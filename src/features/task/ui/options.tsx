import { FC } from 'react';
import { Dropdown, DropdownItem } from '@/shared/ui';
import Delete from './delete';
import { OptionsIcon } from '@/shared/ui/icons';

interface Props {
  id: string
}

const Options: FC<Props> = ( { id } ) => {
  return (
    <Dropdown
      positionX="right"
      positionY="bottom"
      button={<button className="block h-4 w-4 rounded-md bg-zinc-800 ring ring-zinc-800"><OptionsIcon /></button>}
      items={[
        <DropdownItem type="link" to={`/task/${id}/update`} label="Edit" />,
        <DropdownItem type="divider" />,
        <Delete id={id} />
      ]}
    />
  );
};

export default Options;