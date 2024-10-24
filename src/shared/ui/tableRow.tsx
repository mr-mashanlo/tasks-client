import { FC, ReactNode } from 'react';

interface Props {
  title: string,
  value: ReactNode
}

const TableRow: FC<Props> = ( { title, value } ) => {
  return (
    <tr>
      <td className="pr-3 py-3 min-w-32"><span className="font-medium text-zinc-600">{title}</span></td>
      <td className="px-3 py-3 w-full">{value}</td>
    </tr>
  );
};

export default TableRow;