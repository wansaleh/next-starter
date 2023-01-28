import Nav from '@/../components/nav';
import Seo from '@/../components/seo';

export default function Home() {
  return (
    <>
      <Seo templateTitle="Home" />

      <Nav />

      <div className="container">
        <div className="flex min-h-screen flex-col items-center justify-center text-center">
          <h1 className="mb-4 text-7xl font-light leading-none tracking-tighter">
            Welcome to <span className="font-bold">Next.</span>
          </h1>

          <p className="text-xl font-normal text-gray-500">
            To get started, edit{' '}
            <code className="font-medium">pages/index.tsx</code> and save to
            reload.
          </p>
        </div>
      </div>
    </>
  );
}
