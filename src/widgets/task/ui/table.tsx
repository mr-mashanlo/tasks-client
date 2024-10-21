import { FC } from 'react';
import { Table } from '@/features/task/ui';

const TableWidget: FC = () => {
  return (
    <div>
      <Table tasks={[]} />
    </div>
  );
};

export default TableWidget;