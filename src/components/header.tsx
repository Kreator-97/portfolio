'use client'

import { FC, useContext } from 'react'
import { Languages } from '@/interfaces/languages'

import { AboutMe, Presentation } from '@/components'
import { UIContext } from '@/context/ui'
import { unsplashImages } from '@/data'

interface Props {
  lang: Languages
}

export const Header: FC<Props> = ({
  lang
}) => {
  const { theme } = useContext(UIContext)

  return (
    <header className='relative'>
      <div
        style={{
          backgroundImage: `url('${unsplashImages[theme].imageURL}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          height: 'calc(100vh - var(--navbarSize))'
        }}
      >
        <div className='bg-dark bg-opacity-30 absolute top-0 w-full h-full' />
      </div>

      <div className='absolute top-0 w-full'>
        <div
          className='max-w-5xl mx-auto p-4 flex flex-col justify-center gap-8'
          style={{ height: 'calc(100vh - var(--navbarSize)'}}
        >
          <Presentation lang={lang} />
          <AboutMe lang={lang} />
        </div>
      </div>
      <p className='text-light text-sm absolute bottom-2 left-2'>
        Photo by
        <a
          className='hover:underline'
          href={ unsplashImages[theme].author.URL }
          target='_blank'
          rel="noreferrer"> { unsplashImages[theme].author.name } </a>
          from
        <a
          className='hover:underline'
          href={ unsplashImages[theme].postURL }
          target='_blank'
          rel="noreferrer"
        > Unsplash </a>
      </p>
    </header>
  )
}
