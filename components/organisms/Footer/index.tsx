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
                <FooterList
                  title="Company"
                  list={
                      [{ name: 'About Us' },
                        { name: 'Press Release' },
                        { name: 'Terms of Use' },
                        { name: 'Privacy & Policy' }]
}
                />
                <FooterList
                  title="Support"
                  list={
                      [{ name: 'Refund Policy' },
                        { name: 'Unlock Rewards' },
                        { name: 'Live Chatting' }]
}
                />
                <FooterList
                  title="Connect"
                  list={
                      [{ name: 'hi@store.gg', href: 'mailto: hi@store.gg' },
                        { name: 'team@store.gg', href: 'mailto: team@store.gg' },
                        { name: 'Pasific 12, Jakarta Selatan', href: 'http://maps.google.com/?q=Pasific 12,Jakarta Selatan' },
                        { name: '021 - 1122 -9090', href: 'tel: 02111229090' },
                      ]
}
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
