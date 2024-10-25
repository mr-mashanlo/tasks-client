import { FC } from 'react';
import { BacklogIcon, CancelledIcon, DoneIcon, InProgressIcon, PlusIcon, TodoIcon } from '@/shared/ui/icons';
import { StatusType } from '../model';

interface Props {
  status: StatusType | 'empty'
}

const Status: FC<Props> = ( { status } ) => {

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
      {library[status].icon}
      <span>{library[status].title}</span>
    </span>
  );
};

export default Status;