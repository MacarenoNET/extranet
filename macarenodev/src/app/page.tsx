import Image from 'next/image'

import Navigation from '../component/navegation/navigation';

export default function Home() {
  return (
    <main>
      <Navigation headertransparent="header--transparent" color="color--black" logo="../../public/assets/images/logo/logo.png" />
    </main>
  )
}
