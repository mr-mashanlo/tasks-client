import { FC } from 'react';
import { CreateTaskForm } from '@/features/tasks/createTask';

export const TaskPage: FC = () => {
  return (
    <div>
      <section className="min-h-screen py-10 flex flex-col">
        <div className="container-block flex flex-col flex-grow">
          <CreateTaskForm />
        </div>
      </section>
    </div>
  );
};

export default TaskPage;