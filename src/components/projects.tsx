import { FC } from 'react'

import { IconWithText, List, ProyectCard } from '@/components'

import { proyects } from '@/data'
import { Languages } from '@/interfaces/languages'
import { english, spanish } from '@/i18n'

const { auroraManga, dartmong, twittDuck } = proyects

interface Props {
  lang: Languages
}

export const Projects: FC<Props> = ({ lang }) => {
  const t = lang === 'es' ? spanish : english
  
  return (
    <div id='projects' className="pt-8 md:pt-20">
      <div className="bg-indigo-900 bg-opacity-50 py-4">
        <h2 className="text-center text-light font-bold text-3xl md:mb-8">
          {
            t.proyects.title
          }
        </h2>

        <ProyectCard
          imgURL={'/images/dartmong-blog.png'}
          title={ t.proyects.dartmong.title }
          url={ dartmong.url }
          repositoryURL={ dartmong.repositoryURL }
        >
          <p className='text-light font-bold mb-4'>
            {
              t.proyects.dartmong.description
            }
          </p>

          <p className='text-light font-bold mb-4'>
            {
              t.proyects.dartmong.description2
            }
          </p>

          <p className='text-light font-bold my-4 text-center'>
            {
              t.proyects.dartmong.description3
            }
          </p>

          <div className='flex justify-center items-center'>
            {
              dartmong.technologies.map((tech) => (
                <IconWithText
                  key={tech.title}
                  title={tech.title}
                  iconURL={tech.iconURL}
                  hasBackground
                />
              ))
            }
          </div>
        </ProyectCard>

        <ProyectCard
          imgURL={ '/images/aurora-manga.png' }
          title={ auroraManga.title }
          url={ auroraManga.url }
          repositoryURL={ auroraManga.repositoryURL }
          reverse
        >
          <p className='text-light font-bold mb-4'>
            {
              t.proyects.auroraManga.description
            }
          </p>

          <p className='text-light font-bold mb-4'>
            {
              t.proyects.auroraManga.description2
            }
          </p>

          <p className='text-accent font-bold mb-2'>
            {
              t.proyects.auroraManga.description3
            }
          </p>

          <List
            items={ t.proyects.auroraManga.features }
            className='font-bold text-light mb-4'
          />

          <p className='text-light font-bold mb-4 text-center'>
            {
              t.proyects.auroraManga.description4
            }
          </p>

          <div className='flex justify-center flex-wrap gap-y-4'>
            {
              auroraManga.technologies.map((tech) => (
                <IconWithText
                  key={tech.title}
                  title={tech.title}
                  iconURL={tech.iconURL}
                  hasBackground
                />
              ))
            }
          </div>
        </ProyectCard>

        <ProyectCard
          imgURL={ '/images/twitt-duck.png' }
          title={ twittDuck.title }
          url={ twittDuck.url }
          repositoryURL={ twittDuck.repositoryURL }
        >
          <p className='text-light font-bold mb-4'>
            { t.proyects.twittDuck.description }
          </p>

          <p className='text-accent font-bold mb-2'>
            {
              t.proyects.twittDuck.description2
            }
          </p>

          <List items={ t.proyects.twittDuck.features } className='font-bold text-light mb-4' />

          <p className='text-accent font-bold mb-2'>
            {
              t.proyects.twittDuck.description3
            }
          </p>

          <List
            items={ t.proyects.twittDuck.features2 }
            className='font-bold text-light mb-4'
          />

          <p className='text-light font-bold mb-4 text-center'>
            {
              t.proyects.twittDuck.description3
            }
          </p>

          <div className='flex justify-center items-center flex-wrap gap-y-4'>
            {
              twittDuck.technologies.map((tech) => (
                <IconWithText
                  key={tech.title}
                  title={tech.title}
                  iconURL={tech.iconURL}
                  hasBackground
                />
              ))
            }
          </div>
        </ProyectCard>
      </div>
    </div>
  )
}
