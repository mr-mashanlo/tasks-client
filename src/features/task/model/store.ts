import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface IFilterStore {
  query: string,
  status: 'todo' | 'inProgress' | 'done' | 'cancelled' | 'backlog' | '',
  priority: 'low' | 'medium' | 'high' | '',

  setQuery: ( query: string ) => void,
  setStatus: ( status: 'todo' | 'inProgress' | 'done' | 'cancelled' | 'backlog' | '' ) => void,
  setPriority: ( priority: 'low' | 'medium' | 'high' | '' ) => void
}

const useFilterStore = create( persist<IFilterStore>( set => ( {
  query: '',
  status: '',
  priority: '',

  setQuery( query ) { return set( () => ( { query } ) ); },
  setStatus( status ) { return set( () => ( { status } ) ); },
  setPriority( priority ) { return set( () => ( { priority } ) ); }
} ), { name: 'filter' } ) );

export default useFilterStore;