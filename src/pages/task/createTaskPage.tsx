import { FC } from 'react';

import { CreateForm } from '@/features/task/ui';

export const CreateTaskPage: FC = () => {
  return (
    <div className="p-28">
      <div className="max-w-[50rem] mx-auto">
        <CreateForm />
      </div>
    </div>
  );
};

export default CreateTaskPage;
