import Image from 'next/image';
import Link from 'next/link';
import cx from 'classnames';

interface MenuItemProps{
    title:string;
    active?: boolean;
    icon: 'ic-menu-overview'| 'ic-menu-transactions'| 'ic-menu-messages'| 'ic-menu-card'| 'ic-menu-rewards'| 'ic-menu-settings'|'ic-menu-log-out';
    href:string;
}
export default function MenuItem(props: Partial<MenuItemProps>) {
  const {
    title, active, icon, href = '#',
  } = props;

  const classTitle = cx({
    item: true,
    'mb-30': true,
    active,
  });
  return (
    <div className="menus">
      <div className={classTitle}>
        <div className="me-3">
          <Image src={`/icon/${icon}.svg`} width={25} height={25} />
        </div>
        <p className="item-title m-0">
          <Link href={href}>
            <a className="text-lg text-decoration-none">
              {title}
            </a>
          </Link>
        </p>
      </div>
    </div>

  );
}
