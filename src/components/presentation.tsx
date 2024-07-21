import { FC } from 'react'
import Image from 'next/image'

import { Languages } from '@/interfaces/languages'
import { english, spanish } from '@/i18n'

interface Props {
  lang: Languages
}

export const Presentation: FC<Props> = ({
  lang
}) => {
  const t = lang === 'es' ? spanish : english
  return (
    <div className='flex flex-col items-center gap-8' id='presentation'>
      <Image
        alt='Donato Monzón | Desarrollador web'
        src={'/images/me.png'}
        className='rounded-full object-cover border-4 border-light'
        width={96}
        height={96}
      />
      <h1 className='text-light font-bold text-2xl md:text-3xl'>
        {
          t.presentation.title + ' '
        }
        <span className='text-accent'>
          {
            t.presentation.fullname
          }
        </span>
        <br />
        <span className='text-accent'>
          {
            t.presentation.subtitle
          }
        </span>
      </h1>

      <div className='flex flex-col sm:flex-row gap-4 w-full justify-center'>
        <a
          href='#projects'
          className='transition-colors bg-accent hover:bg-accentDark px-2 md:px-4 py-2 rounded-md font-bold text-light text-base md:text-xl hover:bg block text-center'
        >
          {
            t.proyects.title
          }
        </a>
      </div>
    </div>
  )
}
