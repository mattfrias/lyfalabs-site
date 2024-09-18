export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-2 row-start-2 items-center">
        <h1 className="text-4xl text-center font-medium">LyfaLabs</h1>
        <p className="text-lg text-center">
          Technical and Management Consulting
        </p>
      </main>
      <footer className="row-start-3 flex flex-wrap items-center justify-center">
        <small className="text-xs text-center block"> &copy; {new Date().getFullYear()} All rights reserved. &mdash; LyfaLabs LLC</small>
      </footer>
    </div>
  );
}
