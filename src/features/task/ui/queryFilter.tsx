import { FC, useEffect, useState } from 'react';

import { useFilterStore } from '@/entities/task/model';
import { Input } from '@/shared/ui';

const QueryFilter: FC = () => {
  const [ search, setSearch ] = useState( '' );
  const setSkip = useFilterStore( state => state.setSkip );
  const setQuery = useFilterStore( state => state.setQuery );

  useEffect( () => {
    const timeoutID = setTimeout( () => { setSkip( 0 ); setQuery( search ); }, 1000 );
    return () => clearTimeout( timeoutID );
  }, [ search, setSkip, setQuery ] );

  return (
    <div className="w-80">
      <Input display="bordered" name="query" onChange={e => setSearch( e.target.value )} value={search} type="text" placeholder="Filter task" />
    </div>
  );
};

export default QueryFilter;