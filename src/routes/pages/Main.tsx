import Meta from '../layouts/Meta';

export default function Main() {
  return (
    <>
      <Meta
        title='base - main'
        description='메인 페이지 입니다.'
        keywords='메인'
        url='https://www.barunsoncard.com/'
      />
      <section id='container'>
        <h2>Main page</h2>
        <p>Main page content</p>
      </section>
    </>
  );
}
