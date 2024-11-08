import { FC, useEffect } from 'react';
import { useQuery } from 'react-query';

import { fetchTasks } from '@/entities/task/api';
import { TasksDataResponseSchema, useFilterStore } from '@/entities/task/model';
import { Table } from '@/entities/task/ui';

import Options from './options';

const DataTable: FC = () => {
  const limit = useFilterStore( state => state.limit );
  const skip = useFilterStore( state => state.skip );
  const search = useFilterStore( state => state.query );
  const status = useFilterStore( state => state.status );
  const priority = useFilterStore( state => state.priority );
  const setCount = useFilterStore( state => state.setCount );
  const query = useQuery( { queryKey: [ 'tasks', skip, search, status, priority ], queryFn: () => fetchTasks( { limit, skip, query: search, status, priority } ) } );
  const result = TasksDataResponseSchema.safeParse( query.data );

  useEffect( () => { setCount( result.data?.count || 0 ); }, [ setCount, result.data?.count ] );

  if ( query.isLoading ) return <p>Loading</p>;

  if ( query.isError ) return <p>Query Error</p>;

  if ( !result.success ) return <p>Result Error</p>;

  if ( !result.data.count ) return <p>Empty</p>;

  return <Table tasks={result.data.data} options={Options} />;
};

export default DataTable;