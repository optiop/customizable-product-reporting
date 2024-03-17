import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'
import  Login  from '@/components/Login'
import Logout from '@/components/Logout'

const header = {
  title: 'Optiop Consulting Group',
  description: 'Level up your infrastructure and operation with Optiop Consulting Group.',
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

export default async function Home() {
  const session = await getServerSession(authOptions)
  if (session) {
    return (
      <section
      className="bg-gradient-radial relative w-screen lg:h-screen dark:black"
      style={{ minHeight: '50vh' }}
    >
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center pt-40">
            <iframe className="px-4" src="http://localhost:3000/d-solo/bb111eae-67dc-4907-b757-dac37ff8b1fc/demo-dashboard?orgId=1&theme=dark&panelId=3" width="300" height="500" frameBorder="0"></iframe>
            <iframe className="px-4" src="http://localhost:3000/d-solo/bb111eae-67dc-4907-b757-dac37ff8b1fc/demo-dashboard?orgId=1&panelId=1" width="600" height="500" frameBorder="0"></iframe>
        </div>
        <div className="pt-20 mt-20 inline-block space-x-2 rounded px-4 py-1.5 text-base font-semibold leading-7 ring-1 transition-all duration-150 sm:w-1/2 sm:text-center md:py-2 text-zinc-900  ring-zinc-600 backdrop-blur bg-white hover:text-zinc-900 dark:bg-zinc-300" ><Logout /></div>
      </div>
    </section>
    )
  }
  return (
      <section
      className="bg-gradient-radial relative w-screen lg:h-screen dark:black"
      style={{ minHeight: '50vh' }}
    >
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center pt-40">
        <div className="inline-block space-x-2 rounded px-4 py-1.5 text-base font-semibold leading-7 ring-1 transition-all duration-150 sm:w-1/2 sm:text-center md:py-2 text-zinc-900  ring-zinc-600 backdrop-blur bg-white hover:text-zinc-900 dark:bg-zinc-300" ><Login /></div>
        </div>
      </div>
    </section>
  )
}
