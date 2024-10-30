import { FC } from 'react';

import { useFilterStore } from '@/entities/task/model';
import { Input } from '@/shared/ui';

const QueryFilter: FC = () => {

  const query = useFilterStore( state => state.query );
  const setQuery = useFilterStore( state => state.setQuery );

  return (
    <div className="w-80">
      <Input display="bordered" name="query" onChange={e => setQuery( e.target.value )} value={query} type="text" placeholder="Filter task" />
    </div>
  );
};

export default QueryFilter;