import { FC } from 'react';
import { useQuery } from 'react-query';

import { fetchTasks } from '@/entities/task/api';
import { TasksDataResponseSchema, useFilterStore } from '@/entities/task/model';
import { Table } from '@/entities/task/ui';

import Options from './options';

const DataTable: FC = () => {
  const limit = useFilterStore( state => state.limit );
  const skip = useFilterStore( state => state.skip );
  const setCount = useFilterStore( state => state.setCount );
  const query = useQuery( { queryKey: [ 'tasks', skip ], queryFn: () => fetchTasks( { limit, skip } ) } );
  const result = TasksDataResponseSchema.safeParse( query.data );

  if ( query.isLoading ) return <p>Loading</p>;

  if ( query.isError ) return <p>Query Error</p>;

  if ( !result.success ) return <p>Result Error</p>;

  if ( !result.data.count ) return <p>Empty</p>;

  setCount( result.data.count );

  return <Table tasks={result.data.data} options={Options} />;
};

export default DataTable;