import { FC } from 'react';
import { useQuery } from 'react-query';

import { fetchTasks } from '@/entities/task/api';
import { TaskListResponseSchema } from '@/entities/task/model';
import { Table } from '@/entities/task/ui';

import Options from './options';

const DataTable: FC = () => {
  const query = useQuery( { queryKey: [ 'tasks' ], queryFn: fetchTasks } );
  const result = TaskListResponseSchema.safeParse( query.data );

  if ( query.isLoading ) return <p>Loading</p>;

  if ( query.isError ) return <p>Query Error</p>;

  if ( !result.success ) { console.log( result ); return <p>Result Error</p>;};

  if ( !result.data.length ) return <p>Empty</p>;

  return <Table tasks={result.data} options={Options} />;
};

export default DataTable;