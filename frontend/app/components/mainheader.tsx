const title = {
  name: "Optiop"
}

const navigations = [
  { key: "blog", name: "Blog", href: "/blog"},
  { key: "project", name: "Projects", href: "/projects" },
  { key: "contact", name: "Contact", href: "/contact" },
];

export function MainHeader() {
  return (
    <header className="fixed top-0 z-30 w-full backdrop-blur duration-1000  bg-zinc-100/0">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="mr-4 shrink-0">
            <a aria-label="Planetfall" href="/">
              <div className="flex items-center gap-2 ">
                <span className="text-2xl font-semibold text-zinc-900">
                  {title.name}
                </span>
              </div>
            </a>
          </div>
          <nav className="items-center hidden grow md:flex">
            <ul className="flex flex-wrap items-center justify-end gap-4 grow">
              {navigations.map((navigation, index) => (
              <li className="hidden md:block" key={navigation.key}>
                <a
                  className="flex items-center px-3 py-2 font-medium transition duration-150 ease-in-out text-zinc-600 hover:text-zinc-800 lg:px-5"
                  href={navigation.href}
                >
                  {navigation.name}
                </a>
              </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <div className="absolute w-full transition-all duration-1000  h-px -bottom-px from-zinc-400/0 via-zinc-600/70 to-zinc-600/0 bg-gradient-to-l opacity-0"></div>
    </header>
  );
}
