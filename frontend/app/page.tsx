const header = {
  title: 'Optiop Consulting Group',
  description: 'Optimize your business operation with us through digital transformation..',
}

const buttons = [
  {
    name: 'Dashboard',
    href: '/dashboard',
    classes: 'text-zinc-900  ring-zinc-600 backdrop-blur bg-white hover:text-zinc-900 dark:bg-zinc-300',
  },
  {
    name: 'Contact us',
    href: '/contact',
    classes: 'text-zinc-900  ring-zinc-600 backdrop-blur bg-white hover:text-zinc-900 dark:bg-zinc-300 ',
  },
]

export default function Home() {
  return (
    <section
    className="bg-gradient-radial relative dark:black"
    style={{ minHeight: '50vh' }}
  >
    <div className="relative mx-auto h-full max-w-6xl px-4 sm:px-6 ">
      <div className="pt-24 md:pt-28">
        <div className="flex h-1/3 flex-col items-center justify-center text-center">
          <h1 className="container bg-gradient-to-tr dark:text-zinc-300 from-zinc-900 to-zinc-900/90 bg-clip-text  py-4 text-center   text-6xl font-extrabold tracking-[-0.02em] text-transparent lg:text-8xl">
            {header.title}
          </h1>
          <p className="container mt-6 text-lg font-light text-zinc-700 dark:text-zinc-400">
            {header.description}
          </p>
          <div className="mx-auto mt-8 flex w-full flex-col justify-center gap-4 sm:max-w-lg sm:flex-row ">
            {buttons.map((button, index) => (
              <a
                key={index}
                className={`inline-block space-x-2 rounded px-4 py-1.5 text-base font-semibold leading-7 ring-1 transition-all duration-150 sm:w-1/2 sm:text-center md:py-2 ${button.classes}`}
                href={button.href}
              >
                {button.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
