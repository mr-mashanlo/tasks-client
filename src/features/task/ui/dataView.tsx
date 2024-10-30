import { FC } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import { fetchTask } from '@/entities/task/api';
import { TaskResponseSchema } from '@/entities/task/model';
import { View } from '@/entities/task/ui';

const DataView: FC = () => {
  const { id } = useParams() as { id: string };
  const query = useQuery( { queryKey: [ 'task', id ], queryFn: () => fetchTask( id ) } );
  const result = TaskResponseSchema.safeParse( query.data );

  if ( query.isLoading ) return <p>Loading</p>;

  if ( query.isError ) return <p>Error</p>;

  if ( !result.success ) return <p>Error</p>;

  return <View task={result.data} />;
};

export default DataView;