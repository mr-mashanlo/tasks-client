import { FC } from 'react';

import { DataPagination, DataTable } from '@/features/task/ui';

const TableWidget: FC = () => {
  return (
    <div>
      <DataTable />
      <div className="mt-3">
        <DataPagination />
      </div>
    </div>
  );
};

export default TableWidget;