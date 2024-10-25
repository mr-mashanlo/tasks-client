import { FC } from 'react';
import { DataForm } from '@/features/task/ui';

export const CreateTaskPage: FC = () => {
  return (
    <div className="p-10">
      <div className="max-w-[46rem] mx-auto">
        <DataForm />
      </div>
    </div>
  );
};

export default CreateTaskPage;
