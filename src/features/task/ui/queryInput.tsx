import { FC } from 'react';
import { useFilterStore } from '../model';
import { Input } from '@/shared/ui';

const QueryInput: FC = () => {

  const query = useFilterStore( state => state.query );
  const setQuery = useFilterStore( state => state.setQuery );

  return (
    <div className="w-80">
      <Input onChange={e => setQuery( e.target.value )} value={query} type="text" placeholder="Filter task" />
    </div>
  );
};

export default QueryInput;