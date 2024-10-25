import { FC } from 'react';
import { DataView } from '@/features/task/ui';

export const SingleTaskPage: FC = () => {
  return (
    <div className="p-10">
      <div className="max-w-[46rem] mx-auto">
        <DataView />
      </div>
    </div>
  );
};

export default SingleTaskPage;
