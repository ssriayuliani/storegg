import Image from 'next/image';
import Link from 'next/link';

import FooterList from './FooterList';

export default function Footer() {
  return (
    <section className="footer pt-50">
      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 text-lg-start text-center">
              <Link href="/">
                <a className="mb-30">
                  <Image src="/icon/logo.svg" height={60} width={60} />
                </a>
              </Link>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                StoreGG membantu gamers
                {' '}
                <br />
                {' '}
                untuk menjadi
                pemenang sejati

              </p>
              <p className="mt-30 text-lg color-palette-1 mb-30">Copyright 2021. All Rights Reserved.</p>
            </div>

            <div className="col-lg-8 mt-lg-0 mt-20">
              <div className="row gap-sm-0">
                <FooterList title="Company" items={['About Us', 'Press Release', 'Terms of Use', 'Privacy & Policy']} />
                <FooterList title="Support" items={['About Us', 'Refund Policy', 'UnlockRewards', 'Live Chatting']} />
                <FooterList title="Connect" items={['hi@store.gg', 'team@store.gg', ' Pasific 12, Jakarta Selata', ' 021 - 1122 -9090']} />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
