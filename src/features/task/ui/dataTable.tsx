import { FC, useEffect } from 'react';
import { useQuery } from 'react-query';

import { fetchTasks } from '@/entities/task/api';
import { TasksDataResponseSchema, useFilterStore } from '@/entities/task/model';
import { Table, TableSkeleton } from '@/entities/task/ui';

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

  if ( query.isLoading ) return <TableSkeleton />;

  if ( query.isError ) return <TableSkeleton message="Data fetch error" />;

  if ( !result.success ) return <TableSkeleton message="Validation error" />;

  if ( !result.data.count ) return <TableSkeleton message="No tasks" />;

  return <Table tasks={result.data.data} options={Options} />;
};

export default DataTable;