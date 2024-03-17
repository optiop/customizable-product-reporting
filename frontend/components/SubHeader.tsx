export function Header({ title = 'imprint' }) {
  return (
    <header className="relative isolate overflow-hidden bg-gradient-to-tl from-black via-zinc-900 to-black">
      <div className="fixed inset-x-0 top-0 z-50 border-b border-transparent bg-zinc-900/0 backdrop-blur duration-200 lg:bg-transparent lg:backdrop-blur-none">
        <div className="container mx-auto flex flex-row-reverse items-center justify-between p-6">
          <div className="flex justify-between gap-8"></div>
        </div>
      </div>
      <div className="container relative isolate mx-auto overflow-hidden  py-24 sm:py-32">
        <div className="mx-auto flex max-w-7xl flex-col items-center px-6 text-center lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-6xl">
              {title}
            </h1>
          </div>
        </div>
      </div>
    </header>
  )
}
