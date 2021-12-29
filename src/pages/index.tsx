import Nav from '../components/Nav';
import Seo from '../components/Seo';

export default function Home() {
  return (
    <>
      <Seo templateTitle="Home" />

      <Nav />

      <div className="layout">
        <div className="flex flex-col justify-center items-center min-h-screen text-center">
          <h1 className="mb-4 text-7xl font-light tracking-tighter leading-none">
            Welcome to <span className="font-bold">Next.</span>
          </h1>

          <p className="text-xl font-normal text-gray-500">
            To get started, edit{' '}
            <code className="font-medium">pages/index.js</code> and save to
            reload.
          </p>
        </div>
      </div>
    </>
  );
}
