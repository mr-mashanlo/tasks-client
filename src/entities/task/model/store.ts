import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface IFilterStore {
  limit: number,
  curentPage: number,
  query: string,
  status: 'todo' | 'inProgress' | 'done' | 'cancelled' | 'backlog' | '',
  priority: 'low' | 'medium' | 'high' | '',

  setLimit: ( limit: number ) => void,
  setCurentPage: ( curentPage: number ) => void,
  increaseCurentPage: () => void,
  decreaseCurentPage: () => void,
  setQuery: ( query: string ) => void,
  setStatus: ( status: 'todo' | 'inProgress' | 'done' | 'cancelled' | 'backlog' | '' ) => void,
  setPriority: ( priority: 'low' | 'medium' | 'high' | '' ) => void
}

const useFilterStore = create( persist<IFilterStore>( set => ( {
  limit: 10,
  curentPage: 1,
  query: '',
  status: '',
  priority: '',

  setLimit( limit ) { return set( () => ( { limit } ) ); },
  setCurentPage( curentPage ) { return set( () => ( { curentPage } ) ); },
  increaseCurentPage() { return set( state => ( { curentPage: state.curentPage + 1 } ) ); },
  decreaseCurentPage() { return set( state => ( { curentPage: state.curentPage > 1 ? state.curentPage - 1 : 1 } ) ); },
  setQuery( query ) { return set( () => ( { query } ) ); },
  setStatus( status ) { return set( () => ( { status } ) ); },
  setPriority( priority ) { return set( () => ( { priority } ) ); }
} ), { name: 'filter' } ) );

export default useFilterStore;