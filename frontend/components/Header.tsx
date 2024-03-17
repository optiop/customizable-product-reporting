import ThemeSwitch from "./ThemeSwitch";

const title = {
  name: "Optiop",
};

const navigations = [
  { key: "dashboard", name: "Dashboard", href: "/dashboard" },
  { key: "contact", name: "Contact", href: "/contact" },
];

const Header = () => {
  return (
    <header className="fixed top-0 z-30 w-full bg-zinc-100/0 backdrop-blur duration-1000">
      <div className="container mx-auto">
        <div className="flex h-16 items-center justify-between md:h-20">
          <div className="mr-4 shrink-0">
            <a aria-label="Planetfall" href="/">
              <div className="flex items-center gap-1 ">
                <span className="ml-8 text-3xl font-bold text-zinc-900 dark:text-zinc-200">
                  {title.name}
                </span>
                <span className="text-4xl font-bold text-blue-500">
                  .
                </span>
              </div>
            </a>
          </div>
          <nav className="hidden grow items-center md:flex">
            <ul className="mr-4 flex grow flex-wrap items-center justify-end gap-4">
              {navigations.map((navigation, index) => (
                <li className="hidden md:block" key={navigation.key}>
                  <a
                    className="flex items-center px-3 py-2 font-medium text-zinc-600 dark:text-zinc-300 transition duration-150 ease-in-out hover:text-zinc-800 lg:px-5"
                    href={navigation.href}
                  >
                    {navigation.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <ThemeSwitch />
        </div>
      </div>
    </header>
  );
};

export default Header;
