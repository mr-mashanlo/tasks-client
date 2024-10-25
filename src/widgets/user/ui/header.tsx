import { FC } from 'react';
import { Dropdown, DropdownItem } from '@/shared/ui';

interface Props {
  title: string,
  subtitle: string
}

const HeaderWidget: FC<Props> = ( { title, subtitle } ) => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
        <p>{subtitle}</p>
      </div>
      <Dropdown
        positionX="right"
        positionY="bottom"
        button={<button><img className="aspect-square h-8 w-8" alt="@user" src="https://api.dicebear.com/8.x/lorelei/svg?seed=sveltecult" /></button>}
        items={[
          <DropdownItem type="link" to="/settings" label="Settings" />,
          <DropdownItem type="divider" />,
          <DropdownItem type="button" label="Logout" handleClick={() => console.log( 'logout' )} />
        ]}
      />
    </div>
  );
};

export default HeaderWidget;