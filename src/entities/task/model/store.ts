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
  limit: 30,
  skip: 0,
  count: 0,
  query: '',
  status: '',
  priority: '',

  setLimit( limit ) { return set( () => ( { limit } ) ); },
  setSkip( skip ) { return set( () => ( { skip } ) ); },
  increaseSkip() { return set( state => ( { skip: Math.min( state.skip + state.limit, state.count - state.count % state.limit ) } ) ); },
  decreaseSkip() { return set( state => ( { skip: Math.max( state.skip - state.limit, 0 ) } ) ); },
  setCount( count ) { return set( () => ( { count } ) ); },
  setQuery( query ) { return set( () => ( { query } ) ); },
  setStatus( status ) { return set( () => ( { status } ) ); },
  setPriority( priority ) { return set( () => ( { priority } ) ); }
} ), { name: 'filter' } ) );

export default useFilterStore;