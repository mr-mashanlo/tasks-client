import { FC } from 'react';

import { Options } from '@/features/auth/ui';

interface Props {
  title: string,
  subtitle: string
}

const HeaderWidget: FC<Props> = ( { title, subtitle } ) => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
        <p>{subtitle}</p>
      </div>
      <Options />
    </div>
  );
};

export default HeaderWidget;