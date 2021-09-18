import Profile from './Profile';
import MenuItem from './MenuItem';
import Footer from './Footer';

export default function SideBar() {
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem title="Overview" icon="ic-menu-overview" active />
          <MenuItem title="Transactions" href="/member/transactions" icon="ic-menu-transactions" />
          <MenuItem title="Messages" icon="ic-menu-messages" />
          <MenuItem title="Card" icon="ic-menu-card" />
          <MenuItem title="Rewards" icon="ic-menu-rewards" />
          <MenuItem title="Settings" icon="ic-menu-settings" />
          <MenuItem title="Log Out" icon="ic-menu-log-out" />
          <Footer />
        </div>
      </div>
    </section>
  );
}
