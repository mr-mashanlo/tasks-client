import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface IFilterStore {
  limit: number,
  skip: number,
  count: number,
  query: string,
  status: 'todo' | 'inProgress' | 'done' | 'cancelled' | 'backlog' | '',
  priority: 'low' | 'medium' | 'high' | '',

  setLimit: ( limit: number ) => void,
  setSkip: ( skip: number ) => void,
  increaseSkip: () => void,
  decreaseSkip: () => void,
  setCount: ( count: number ) => void,
  setQuery: ( query: string ) => void,
  setStatus: ( status: 'todo' | 'inProgress' | 'done' | 'cancelled' | 'backlog' | '' ) => void,
  setPriority: ( priority: 'low' | 'medium' | 'high' | '' ) => void
}

const useFilterStore = create( persist<IFilterStore>( set => ( {
  limit: 6,
  skip: 0,
  count: 0,
  query: '',
  status: '',
  priority: '',

  setLimit( limit ) { return set( () => ( { limit } ) ); },
  setSkip( skip ) { return set( () => ( { skip } ) ); },
  increaseSkip() { return set( state => ( { skip: state.skip > Math.ceil( state.count / state.limit ) ? state.skip + 1 : Math.ceil( state.count / state.limit ) } ) ); },
  decreaseSkip() { return set( state => ( { skip: state.skip > 1 ? state.skip - 1 : 1 } ) ); },
  setCount( count ) { return set( () => ( { count } ) ); },
  setQuery( query ) { return set( () => ( { query } ) ); },
  setStatus( status ) { return set( () => ( { status } ) ); },
  setPriority( priority ) { return set( () => ( { priority } ) ); }
} ), { name: 'filter' } ) );

export default useFilterStore;