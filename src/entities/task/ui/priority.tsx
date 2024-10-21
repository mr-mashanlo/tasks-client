import { FC } from 'react';
import { HighIcon, LowIcon, MediumIcon } from '@/shared/ui/icons';

interface Props {
  priority: 'low' | 'medium' | 'high'
}

const Priority: FC<Props> = ( { priority } ) => {

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
    }
  };

  return (
    <span className="flex items-center gap-3">
      {library[priority].icon}
      <span>{library[priority].title}</span>
    </span>
  );
};

export default Priority;