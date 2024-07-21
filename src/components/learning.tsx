import { FC } from 'react'

import { IconWithText } from '.'
import { Languages } from '@/interfaces/languages'
import { english, spanish } from '@/i18n'

interface Props {
  lang: Languages
}

export const Learning: FC<Props> = ({ lang }) => {
  const t = lang === 'es' ? spanish : english

  return (
    <div id='learning' className='pt-8 md:pt-20'>
      <h2 className="heading">
        {
          t.learning.title
        }
      </h2>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div className="custom-container md:col-span-2">
          <p className="paragraph">
            {
              t.learning.description
            }
          </p>
        </div>

        {
          t.learning.items.map((item) => (
            <div key={item.title} className='custom-container'>
              <div className="flex justify-center py-8">
                <IconWithText
                  iconURL={ item.iconURL }
                  title={ item.title }
                  size={36}
                />
              </div>
              <p className="paragraph">
                {
                  item.description
                }
              </p>
            </div>
          ))
        }
      </div>
    </div>
  )
}
