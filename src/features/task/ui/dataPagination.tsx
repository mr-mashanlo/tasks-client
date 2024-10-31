import { FC } from 'react';

import { useFilterStore } from '@/entities/task/model';
import { Pagination } from '@/shared/ui';

const DataPagination: FC = () => {
  const curentPage = useFilterStore( state => state.curentPage );
  const setCurentPage = useFilterStore( state => state.setCurentPage );
  const increaseCurentPage = useFilterStore( state => state.increaseCurentPage );
  const decreaseCurentPage = useFilterStore( state => state.decreaseCurentPage );

  return (
    <div className="flex justify-end">
      <Pagination curentPage={curentPage} onStart={() => setCurentPage( 1 )} onPrev={() => decreaseCurentPage()} onNext={() => increaseCurentPage()} onEnd={() => {}} />
    </div>
  );
};

export default DataPagination;