import Meta from '@/components/meta';
import Nav from '@/components/nav';

export default function Home() {
  return (
    <>
      <Meta />

      <Nav />

      <div className="container">
        <div className="flex min-h-screen flex-col items-center justify-center text-center">
          <h1 className="mb-4 text-7xl font-light leading-none tracking-tight">
            Welcome to <span className="font-bold">Next.</span>
          </h1>

          <p className="text-xl font-normal text-gray-500">
            To get started, edit{' '}
            <code className="font-medium">app/page.tsx</code> and save to
            reload.
          </p>
        </div>
      </div>
    </>
  );
}
