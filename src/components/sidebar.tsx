'use client'

import { useContext } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { UIContext } from '../context/ui'
import { useTranslations } from '@/hooks/use-translations'

export const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useContext(UIContext)
  const { translations: t } = useTranslations()

  return (
    <aside
      className='fixed top-0 w-10/12 h-screen bg-dark z-50 p-4 right-0 transition-transform'
      style={{ transform: isSidebarOpen ? 'translateX(0px)' : 'translateX(100%)' }}
    >
      <div className='mb-4'>
        <AiOutlineClose
          size={32}
          fill='#eee'
          cursor='pointer'
          onClick={ () => closeSidebar() }
        />
      </div>

      <ul className='gap-4 text-light font-bold'>
        <li
          className='text-xl mb-4 bg-darkAlt p-2 rounded text-center transition-colors hover:text-accent'
          onClick={ () => closeSidebar() }
        >
          <a className='w-full block' href="#home">
            { t.navbar.home }
          </a>
        </li>
        <li
          className='text-xl mb-4 bg-darkAlt p-2 rounded text-center transition-colors hover:text-accent'
          onClick={ () => closeSidebar() }
        >
          <a className='w-full block' href="#skills">
            { t.navbar.skills }
          </a>
        </li>
        <li
          className='text-xl mb-4 bg-darkAlt p-2 rounded text-center transition-colors hover:text-accent'
          onClick={ () => closeSidebar() }
        >
          <a className='w-full block' href="#projects">
            { t.navbar.projects }
          </a>
        </li>
        <li
          className='text-xl mb-4 bg-darkAlt p-2 rounded text-center transition-colors hover:text-accent'
          onClick={ () => closeSidebar() }
        >
          <a className='w-full block' href="#learning">
            { t.navbar.learning }
          </a>
        </li>
        <li
          className='text-xl mb-4 bg-darkAlt p-2 rounded text-center transition-colors hover:text-accent'
          onClick={ () => closeSidebar() }
        >
          <a className='w-full block' href="#contact">
            { t.navbar.contact }
          </a>
        </li>
      </ul>
    </aside>
  )
}
