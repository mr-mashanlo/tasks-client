import { FC } from 'react';

import { BacklogIcon, CancelledIcon, DoneIcon, InProgressIcon, PlusIcon, TodoIcon } from '@/shared/ui/icons';

import { StatusType } from '../model';

interface Props {
  value: StatusType | 'empty'
}

const Status: FC<Props> = ( { value } ) => {

  const library = {
    todo: {
      title: 'Todo',
      icon: <TodoIcon />
    },
    inProgress: {
      title: 'In progress',
      icon: <InProgressIcon />
    },
    done: {
      title: 'Done',
      icon: <DoneIcon />
    },
    cancelled: {
      title: 'Cancelled',
      icon: <CancelledIcon />
    },
    backlog: {
      title: 'Backlog',
      icon: <BacklogIcon />
    },
    empty: {
      title: 'Status',
      icon: <PlusIcon />
    }
  };

  return (
    <span className="flex items-center gap-3">
      {library[value].icon}
      <span>{library[value].title}</span>
    </span>
  );
};

export default Status;