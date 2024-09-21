import { FC } from 'react';
import { CreateTaskForm } from '@/features/tasks/createTask';
import { TaskListWidget } from '@/widgets/task/taskList';
import { FilterTask } from '@/features/tasks/filterTask';

export const HomePage: FC = () => {
  return (
    <div>
      <section className="min-h-screen py-5 sm:py-10 flex flex-col">
        <div className="container-block flex flex-col flex-grow">
          <CreateTaskForm />
          <div className="mt-5 sm:mt-10"><TaskListWidget /></div>
          <FilterTask />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
