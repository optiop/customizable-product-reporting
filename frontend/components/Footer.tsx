import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer aria-labelledby="footer-heading w-full">
      <div className="mx-auto max-w-7xl px-6 pb-8 lg:px-8">
        <div className="md:flex md:items-center md:justify-between ">
          <div className="flex space-x-6 md:order-2"></div>
          <p className="text-xs leading-5 text-gray-400 md:order-1 md:mt-0">
            &copy; {new Date().getUTCFullYear()} Optiop Consulting Group
          </p>
        </div>
      </div>
    </footer>
  )
}
