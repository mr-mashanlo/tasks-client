import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { View } from '@/entities/task/ui';
import { TaskResponseSchema } from '@/entities/task/model';
import { fetchTask } from '@/entities/task/api';

const DataView: FC = () => {

  const { id } = useParams();
  const query = useQuery( 'task', () => fetchTask( id || '' ) );
  const result = TaskResponseSchema.safeParse( query.data );

  if ( query.isLoading ) return <p>Loading</p>;

  if ( query.isError ) return <p>Error</p>;

  if ( !result.success ) return <p>Error</p>;

  return <View task={result.data} />;
};

export default DataView;