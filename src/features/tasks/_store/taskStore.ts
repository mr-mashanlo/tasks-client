import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface TaskFilterType {
  folder?: string,
  completed?: number
}

interface TaskStoreType {
  filter: TaskFilterType
  setFilter: ( filter: TaskFilterType ) => void
}

const useTaskStore = create( persist<TaskStoreType>( set => ( {
  filter: {},

  setFilter( filter: TaskFilterType ) {
    return set( () => ( { filter } ) );
  }
} ), { name: 'task' } ) );

export default useTaskStore;