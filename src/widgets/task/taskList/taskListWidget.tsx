import { FC } from 'react';
import { useQuery } from 'react-query';
import { fetchTasks } from './taskListService';
import { TaskItemWidget } from '../taskItem';
import { TaskListResponseSchema, TaskResponseType } from '@/entities/task';
import TaskListError from './taskListError';
import TaskListSkeleton from './taskListSkeleton';
import { useTaskStore } from '@/features/tasks/_store';

const TaskListWidget: FC = () => {
  const filter = useTaskStore( state => state.filter );
  const { data, isLoading, isError } = useQuery( 'tasks', fetchTasks );
  const result = TaskListResponseSchema.safeParse( data );

  function filterCompletedTasks( task: TaskResponseType ) {
    return filter.completed ? !!+filter.completed === task.completed : true;
  }

  function filterFolderTasks( task: TaskResponseType ) {
    return filter.folder ? filter.folder === task.folder : true;
  }

  if ( isLoading ) { return <TaskListSkeleton />; }
  if ( isError ) { return <TaskListError />; }
  if ( !result.success ) { return <TaskListError />; }
  if ( !result.data.length ) { return <TaskListError children="Create your first task" />; }

  return (
    <div className="flex flex-col gap-1 sm:gap-2">
      {result.data.filter( filterCompletedTasks ).filter( filterFolderTasks ).map( task => <TaskItemWidget key={task._id} task={task} /> )}
    </div>
  );
};

export default TaskListWidget;