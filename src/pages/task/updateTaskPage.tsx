import { FC } from 'react';

import { UpdateForm } from '@/features/task/ui';

export const UpdateTaskPage: FC = () => {
  return (
    <div className="p-28">
      <div className="max-w-[50rem] mx-auto pb-14">
        <UpdateForm />
      </div>
    </div>
  );
};

export default UpdateTaskPage;
