import { FC } from 'react';
import { When } from 'react-if';
import { twMerge } from 'tailwind-merge';

interface Props {
  message?: string
}

const TableSkeleton: FC<Props> = ( { message } ) => {
  return (
    <div className={twMerge( 'border border-zinc-800 rounded-md', message ? '' : 'animate-pulse' )}>
      <table className="w-full text-left divide-y divide-zinc-800">
        <thead className="bg-zinc-800">
          <tr className="text-zinc-600">
            <th className="px-5 py-3 font-normal min-w-32 rounded-tl-[0.35rem]"><span className="block w-20 h-3 bg-[#191919] rounded-full"></span></th>
            <th className="px-5 py-3 font-normal w-full"><span className="block w-20 h-3 bg-[#191919] rounded-full"></span></th>
            <th className="px-5 py-3 font-normal min-w-40"><span className="block w-20 h-3 bg-[#191919] rounded-full"></span></th>
            <th className="px-5 py-3 font-normal min-w-40"><span className="block w-20 h-3 bg-[#191919] rounded-full"></span></th>
            <th className="px-5 py-3 font-normal rounded-tr-[0.35rem]"><span className="block w-6 h-6"></span></th>
          </tr>
        </thead>
        <When condition={!message}>
          <tbody className="divide-y divide-zinc-800">
            <tr>
              <td className="px-5 py-3 min-w-32"><span className="block w-20 h-3 bg-zinc-800 rounded-full"></span></td>
              <td className="px-5 py-3 w-full">
                <div className="flex gap-3 items-center">
                  <span className="block w-20 h-5 bg-zinc-800 rounded-md"></span>
                  <span className="block w-80 h-3 bg-zinc-800 rounded-full"></span>
                </div>
              </td>
              <td className="px-5 py-3"><span className="block w-20 h-3 bg-zinc-800 rounded-full"></span></td>
              <td className="px-5 py-3"><span className="block w-20 h-3 bg-zinc-800 rounded-full"></span></td>
              <td className="px-5 py-3"><span className="block w-4 h-4 m-1 bg-zinc-800 rounded-md ring ring-zinc-800"></span></td>
            </tr>
            <tr>
              <td className="px-5 py-3 min-w-32"><span className="block w-20 h-3 bg-zinc-800 rounded-full"></span></td>
              <td className="px-5 py-3 w-full">
                <div className="flex gap-3 items-center">
                  <span className="block w-20 h-5 bg-zinc-800 rounded-md"></span>
                  <span className="block w-80 h-3 bg-zinc-800 rounded-full"></span>
                </div>
              </td>
              <td className="px-5 py-3"><span className="block w-20 h-3 bg-zinc-800 rounded-full"></span></td>
              <td className="px-5 py-3"><span className="block w-20 h-3 bg-zinc-800 rounded-full"></span></td>
              <td className="px-5 py-3"><span className="block w-4 h-4 m-1 bg-zinc-800 rounded-md ring ring-zinc-800"></span></td>
            </tr>
            <tr>
              <td className="px-5 py-3 min-w-32"><span className="block w-20 h-3 bg-zinc-800 rounded-full"></span></td>
              <td className="px-5 py-3 w-full">
                <div className="flex gap-3 items-center">
                  <span className="block w-20 h-5 bg-zinc-800 rounded-md"></span>
                  <span className="block w-80 h-3 bg-zinc-800 rounded-full"></span>
                </div>
              </td>
              <td className="px-5 py-3"><span className="block w-20 h-3 bg-zinc-800 rounded-full"></span></td>
              <td className="px-5 py-3"><span className="block w-20 h-3 bg-zinc-800 rounded-full"></span></td>
              <td className="px-5 py-3"><span className="block w-4 h-4 m-1 bg-zinc-800 rounded-md ring ring-zinc-800"></span></td>
            </tr>
            <tr>
              <td className="px-5 py-3 min-w-32"><span className="block w-20 h-3 bg-zinc-800 rounded-full"></span></td>
              <td className="px-5 py-3 w-full">
                <div className="flex gap-3 items-center">
                  <span className="block w-20 h-5 bg-zinc-800 rounded-md"></span>
                  <span className="block w-80 h-3 bg-zinc-800 rounded-full"></span>
                </div>
              </td>
              <td className="px-5 py-3"><span className="block w-20 h-3 bg-zinc-800 rounded-full"></span></td>
              <td className="px-5 py-3"><span className="block w-20 h-3 bg-zinc-800 rounded-full"></span></td>
              <td className="px-5 py-3"><span className="block w-4 h-4 m-1 bg-zinc-800 rounded-md ring ring-zinc-800"></span></td>
            </tr>
            <tr>
              <td className="px-5 py-3 min-w-32"><span className="block w-20 h-3 bg-zinc-800 rounded-full"></span></td>
              <td className="px-5 py-3 w-full">
                <div className="flex gap-3 items-center">
                  <span className="block w-20 h-5 bg-zinc-800 rounded-md"></span>
                  <span className="block w-80 h-3 bg-zinc-800 rounded-full"></span>
                </div>
              </td>
              <td className="px-5 py-3"><span className="block w-20 h-3 bg-zinc-800 rounded-full"></span></td>
              <td className="px-5 py-3"><span className="block w-20 h-3 bg-zinc-800 rounded-full"></span></td>
              <td className="px-5 py-3"><span className="block w-4 h-4 m-1 bg-zinc-800 rounded-md ring ring-zinc-800"></span></td>
            </tr>
            <tr>
              <td className="px-5 py-3 min-w-32"><span className="block w-20 h-3 bg-zinc-800 rounded-full"></span></td>
              <td className="px-5 py-3 w-full">
                <div className="flex gap-3 items-center">
                  <span className="block w-20 h-5 bg-zinc-800 rounded-md"></span>
                  <span className="block w-80 h-3 bg-zinc-800 rounded-full"></span>
                </div>
              </td>
              <td className="px-5 py-3"><span className="block w-20 h-3 bg-zinc-800 rounded-full"></span></td>
              <td className="px-5 py-3"><span className="block w-20 h-3 bg-zinc-800 rounded-full"></span></td>
              <td className="px-5 py-3"><span className="block w-4 h-4 m-1 bg-zinc-800 rounded-md ring ring-zinc-800"></span></td>
            </tr>
            <tr>
              <td className="px-5 py-3 min-w-32"><span className="block w-20 h-3 bg-zinc-800 rounded-full"></span></td>
              <td className="px-5 py-3 w-full">
                <div className="flex gap-3 items-center">
                  <span className="block w-20 h-5 bg-zinc-800 rounded-md"></span>
                  <span className="block w-80 h-3 bg-zinc-800 rounded-full"></span>
                </div>
              </td>
              <td className="px-5 py-3"><span className="block w-20 h-3 bg-zinc-800 rounded-full"></span></td>
              <td className="px-5 py-3"><span className="block w-20 h-3 bg-zinc-800 rounded-full"></span></td>
              <td className="px-5 py-3"><span className="block w-4 h-4 m-1 bg-zinc-800 rounded-md ring ring-zinc-800"></span></td>
            </tr>
            <tr>
              <td className="px-5 py-3 min-w-32"><span className="block w-20 h-3 bg-zinc-800 rounded-full"></span></td>
              <td className="px-5 py-3 w-full">
                <div className="flex gap-3 items-center">
                  <span className="block w-20 h-5 bg-zinc-800 rounded-md"></span>
                  <span className="block w-80 h-3 bg-zinc-800 rounded-full"></span>
                </div>
              </td>
              <td className="px-5 py-3"><span className="block w-20 h-3 bg-zinc-800 rounded-full"></span></td>
              <td className="px-5 py-3"><span className="block w-20 h-3 bg-zinc-800 rounded-full"></span></td>
              <td className="px-5 py-3"><span className="block w-4 h-4 m-1 bg-zinc-800 rounded-md ring ring-zinc-800"></span></td>
            </tr>
          </tbody>
        </When>
      </table>
      <When condition={message}>
        <div className="py-44 flex items-center justify-center text-zinc-700"><span>{message}</span></div>
      </When>
    </div>
  );
};

export default TableSkeleton;