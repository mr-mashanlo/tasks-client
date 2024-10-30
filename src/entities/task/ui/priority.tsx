import { FC } from 'react';

import { HighIcon, LowIcon, MediumIcon, PlusIcon } from '@/shared/ui/icons';

import { PriorityType } from '../model';

interface Props {
  value: PriorityType | 'empty'
}

const Priority: FC<Props> = ( { value } ) => {

  const library = {
    low: {
      title: 'Low',
      icon: <LowIcon />
    },
    medium: {
      title: 'Medium',
      icon: <MediumIcon />
    },
    high: {
      title: 'High',
      icon: <HighIcon />
    },
    empty: {
      title: 'Priority',
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

export default Priority;