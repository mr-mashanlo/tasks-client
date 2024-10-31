import { FC } from 'react';

import { LinkButton } from '@/shared/ui';

export const HomePage: FC = () => {
  return (
    <div className="min-h-screen px-4 flex items-center justify-center">
      <div className="max-w-[35rem] text-center">
        <h1 className="mb-5 text-4xl font-bold">Task manager</h1>
        <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut at maxime nihil quidem voluptas corporis quo nam accusamus expedita sit labore ipsum, ipsam doloribus? Accusantium quia officiis quisquam iure maiores!</p>
        <LinkButton to="/signin" display="bordered" theme="white">Login</LinkButton>
      </div>
    </div>
  );
};

export default HomePage;
