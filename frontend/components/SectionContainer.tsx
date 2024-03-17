import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function SectionContainer({ children }: Props) {
  return (
    <div className="relative pb-16">
      <div className="lg:pt-18 mx-auto max-w-7xl space-y-8 px-6 pt-20 md:space-y-8 md:pt-12 lg:px-8">
        {children}
      </div>
    </div>
  )
}
