type footerParameters = {
  className: string
}

export function Footer({ classNames = '' }) {
  return (
    <footer aria-labelledby="footer-heading" className={classNames}>
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 lg:px-8">
        <div className="md:flex md:items-center md:justify-between ">
          <div className="flex space-x-6 md:order-2"></div>
          <p className="text-xs leading-5 text-gray-400 md:order-1 md:mt-0">
            &copy; {new Date().getUTCFullYear()} Mehrshad Lotfi Foroushani
          </p>
          <p className="text-xs leading-5 text-gray-400 md:order-3 md:mt-0">
            <a href="/imprint" className="pr-2 hover:underline">
              Data privacy
            </a>
            <a href="/imprint" className="pr-2 hover:underline">
              Terms and conditions
            </a>
            <a href="/imprint" className="hover:underline">
              Imprint
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
