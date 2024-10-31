import { FC } from 'react';
import { Else, If, Then } from 'react-if';

import { useAuthStore } from '@/entities/auth/model';
import { LinkButton } from '@/shared/ui';

const IntroWidget: FC = () => {
  const id = useAuthStore( state => state.id );

  return (
    <div className="max-w-[35rem] text-center">
      <h1 className="mb-5 text-4xl font-bold">Task manager</h1>
      <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut at maxime nihil quidem voluptas corporis quo nam accusamus expedita sit labore ipsum, ipsam doloribus? Accusantium quia officiis quisquam iure maiores!</p>
      <If condition={id}>
        <Then><LinkButton to="/tasks" display="bordered" theme="white">Go to tasks</LinkButton></Then>
        <Else><LinkButton to="/signin" display="bordered" theme="white">Login</LinkButton></Else>
      </If>
    </div>
  );
};

export default IntroWidget;