import { FC } from 'react';

import { useFilterStore } from '@/entities/task/model';
import { Pagination } from '@/shared/ui';

const DataPagination: FC = () => {
  const count = useFilterStore( state => state.count );
  const limit = useFilterStore( state => state.limit );
  const skip = useFilterStore( state => state.skip );
  const setSkip = useFilterStore( state => state.setSkip );
  const increaseSkip = useFilterStore( state => state.increaseSkip );
  const decreaseSkip = useFilterStore( state => state.decreaseSkip );

  if ( count <= limit ) return;

  return (
    <div className="flex justify-end">
      <Pagination
        curent={skip / limit + 1}
        total={Math.ceil( count / limit )}
        onStart={() => setSkip( 0 )}
        onPrev={() => decreaseSkip()}
        onNext={() => increaseSkip()}
        onEnd={() => setSkip( Math.ceil( count - count % limit ) )}
      />
    </div>
  );
};

export default DataPagination;