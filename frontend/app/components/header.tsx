export function Header({title = "imprint"}) {
  return (
    <header className="relative isolate overflow-hidden bg-gradient-to-tl from-black via-zinc-900 to-black">
      <div className="fixed inset-x-0 top-0 z-50 backdrop-blur lg:backdrop-blur-none duration-200 border-b lg:bg-transparent bg-zinc-900/0 border-transparent">
        <div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
          <div className="flex justify-between gap-8">
          </div>
          <a
            className="duration-200 hover:font-medium  text-zinc-400 hover:text-zinc-100 "
            href="/projects/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 "
            >
              <path d="m12 19-7-7 7-7"></path>
              <path d="M19 12H5"></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="container mx-auto relative isolate overflow-hidden  py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center flex flex-col items-center">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-display">
              { title } 
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
}
