'use client'

import { useState } from 'react'

interface AccordionItemProps {
  title: string
  children: React.ReactNode
  defaultOpen?: boolean
}

export function AccordionItem({ title, children, defaultOpen = false }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-white/10 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left hover:opacity-80 transition-opacity"
        aria-expanded={isOpen}
      >
        <h3 className="text-xl font-semibold pr-4">{title}</h3>
        <span className="text-2xl text-[#7A78FF] flex-shrink-0 transition-transform duration-200" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
          ▼
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="pb-4 text-left">
          <p className="opacity-75 leading-relaxed">{children}</p>
        </div>
      </div>
    </div>
  )
}

interface AccordionProps {
  children: React.ReactNode
}

export default function Accordion({ children }: AccordionProps) {
  return <div className="space-y-0">{children}</div>
}
