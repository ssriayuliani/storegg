import OverviewMember from '../../components/organisms/OverviewMember';
import SideBar from '../../components/organisms/SideBar';

export default function Member() {
  return (
    <section className="overview overflow-auto">
      <SideBar />
      <OverviewMember />
    </section>
  );
}
