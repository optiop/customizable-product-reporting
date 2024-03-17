'use client'
import { MapPin, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'
import { Card } from '../components/card'

const socials = [
  {
    icon: <Mail size={30} />,
    href: 'mailto:admin@optiop.org',
    label: 'Email',
    handle: 'contact@optiop.org',
  },
  {
    icon: <Linkedin size={30} />,
    href: 'https://www.linkedin.com/company/optiop-consulting/',
    label: 'LinkedIn',
    handle: 'Optiop',
  },
  {
    icon: <MapPin size={30} />,
    href: 'https://maps.app.goo.gl/va31Y5b173dpAHaP7',
    label: 'Address',
    handle: 'Europa-Allee 49, 60327 Frankfurt',
  },
]

export default function Example() {
  return (
    <div className="bg-gradient-to-tl">
      <div className="container mx-auto flex items-center justify-center px-4 pt-20 sm:mt-20 lg:px-8">
        <div className="mx-auto mt-32 grid w-full grid-cols-1 gap-8 sm:mt-0 sm:grid-cols-3 lg:gap-8">
          {socials.map((s, index) => (
            <Card key={index}>
              <Link
                href={s.href}
                target="_blank"
                className="group relative flex flex-col items-center gap-4 p-4 duration-700 md:gap-8 md:p-16  md:py-24  lg:pb-48"
              >
                <span
                  className="absolute h-2/3 w-px bg-gradient-to-b from-zinc-300 via-zinc-100/50 to-transparent dark:from-zinc-600"
                  aria-hidden="true"
                />
                <span className="drop-shadow-orange relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-zinc-500 bg-zinc-900 text-sm text-zinc-200 duration-1000 group-hover:border-zinc-200 group-hover:bg-zinc-900 group-hover:text-white">
                  {s.icon}
                </span>{' '}
                <div className="z-10 flex flex-col items-center">
                  <span className="font-display font-medium text-zinc-600 dark:text-zinc-300 duration-150 group-hover:text-black group-hover:dark:text-blue-400 lg:text-xl xl:text-3xl">
                    {s.handle}
                  </span>
                  <span className="mt-4 text-center text-sm text-zinc-400 dark:text-zinc-500 duration-1000 group-hover:text-zinc-500">
                    {s.label}
                  </span>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
