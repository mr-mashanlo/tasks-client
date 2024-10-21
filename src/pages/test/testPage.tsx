import { FC, memo, useState } from 'react';

export const TestPage: FC = () => {
  return (
    <div className="p-10">
      <Counter />
      <Counter />
    </div>
  );
};

const Counter: FC = () => {
  console.log( 'counter' );
  const [ counter, setCounter ] = useState( 0 );
  return (
    <div>
      <p>{counter}</p>
      <button onClick={() => setCounter( counter + 1 )}>add</button>
      <IsFive value={counter} />
    </div>
  );
};

const IsFive: FC<{value: number}> = memo( ( { value } ) => {
  console.log( 'isFive' );
  return (
    <p>{value === 5 ? 'is five' : 'is not five'}</p>
  );
}, ( _, next ) => {
  return next.value !== 5 && next.value !== 6;
} );

export default TestPage;
