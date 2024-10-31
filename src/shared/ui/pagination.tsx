import { FC } from 'react';

import { EndIcon, NextIcon, PrevIcon, StartIcon } from './icons';

interface Props {
  curent: number,
  total: number,
  onStart: () => void,
  onPrev: () => void,
  onNext: () => void,
  onEnd: () => void
}

const Pagination: FC<Props> = ( { curent, total, onStart, onPrev, onNext, onEnd } ) => {
  return (
    <div className="flex items-center gap-5">
      <p className="px-5 py-2">Page {curent} of {total}</p>
      <button onClick={onStart} className="px-5 py-2"><StartIcon /></button>
      <button onClick={onPrev} className="px-5 py-2"><PrevIcon /></button>
      <button onClick={onNext} className="px-5 py-2"><NextIcon /></button>
      <button onClick={onEnd} className="px-5 py-2"><EndIcon /></button>
    </div>
  );
};

export default Pagination;