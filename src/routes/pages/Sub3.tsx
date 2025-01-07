import SideNav from '../layouts/LnbMenu';
import Meta from '../layouts/Meta';

export default function Sub3() {
  return (
    <>
      <Meta
        title='base - Sub3'
        description='Sub3 페이지 입니다.'
        keywords='Sub3'
        url='https://www.barunsoncard.com/'
      />
      <SideNav />
      <section id='container'>
        <h2>Sub-3 Page</h2>
        <p>Sub-3 Page content</p>
      </section>
    </>
  );
}
