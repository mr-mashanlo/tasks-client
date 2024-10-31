import { FC } from 'react';
import { Else, If, Then } from 'react-if';
import { Link } from 'react-router-dom';

import { useAuthStore } from '@/entities/auth/model';
import { Dropdown, DropdownItem } from '@/shared/ui';

import Logout from './logout';

const Options: FC = () => {
  const id = useAuthStore( state => state.id );

  return (
    <If condition={id}>
      <Then>
        <Dropdown
          positionX="right"
          positionY="bottom"
          button={<button><img className="aspect-square h-8 w-8" alt="@user" src="https://api.dicebear.com/8.x/lorelei/svg?seed=sveltecult" /></button>}
          items={[
            <DropdownItem type="link" to="/settings" label="Settings" />,
            <DropdownItem type="divider" />,
            <Logout />
          ]}
        />
      </Then>
      <Else>
        <Link to="/signin"><img className="aspect-square h-8 w-8" alt="@user" src="https://api.dicebear.com/8.x/lorelei/svg?seed=sveltecult" /></Link>
      </Else>
    </If>
  );
};

export default Options;