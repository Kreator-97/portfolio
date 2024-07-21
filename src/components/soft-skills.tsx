import { FC } from 'react'
import Image from 'next/image'
import { english, spanish } from '@/i18n'

import { Card } from './card'

interface Props {
  lang: 'es' | 'en'
}

export const SoftSkills: FC<Props> = ({ lang }) => {
  const t = lang === 'es' ? spanish : english

  return (
    <div className='pt-8 md:pt-20'>
      <h2 className="heading">
        {
          t.softSkills.title
        }
      </h2>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {
          t.softSkills.items.map((skill) => (
            <Card
              key={skill.title}
              title={skill.title}
              description={skill.description}
            >
              <div
                className='flex justify-center py-4'
              >
                <Image
                  src={ skill.icon }
                  width='48'
                  height='48'
                  alt={skill.title}
                />
              </div>
            </Card>
          ))
        }
      </div>
    </div>
  )
}
