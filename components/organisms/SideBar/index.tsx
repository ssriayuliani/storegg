import Profile from './Profile';
import MenuItem from './MenuItem';
import Footer from './Footer';

interface SideBarProps{
  activeMenu: 'overview' | 'transactions' | 'settings'
}

export default function SideBar(props: SideBarProps) {
  const { activeMenu } = props;
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          {/* title = overview bernilai aktif kalau activeMenu === ovverview */}
          <MenuItem title="Overview" href="/member" icon="ic-menu-overview" active={activeMenu === 'overview'} />
          <MenuItem title="Transactions" href="/member/transactions" active={activeMenu === 'transactions'} icon="ic-menu-transactions" />
          <MenuItem title="Messages" href="/member" icon="ic-menu-messages" />
          <MenuItem title="Card" href="/member" icon="ic-menu-card" />
          <MenuItem title="Rewards" href="/member" icon="ic-menu-rewards" />
          <MenuItem title="Settings" href="/member/edit-profile" active={activeMenu === 'settings'} icon="ic-menu-settings" />
          <MenuItem title="Log Out" href="/sign-in" icon="ic-menu-log-out" />
          <Footer />
        </div>
      </div>
    </section>
  );
}
