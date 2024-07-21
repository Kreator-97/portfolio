import { Languages } from '@/interfaces/languages'
import { IconWithText } from './'
import { FC } from 'react'
import { english, spanish } from '@/i18n'

interface Props {
  lang: Languages
}

export const NextToLearn: FC<Props> = ({ lang }) => {
  const t = lang === 'es' ? spanish : english
  return (
    <div className='pt-8 md:pt-20 hidden lg:block'>
      <h2 className='heading'>
        {
          t.nextToLearn.title
        }
      </h2>

      <div className='grid grid-cols-1 gap-4'>
        <div className="custom-container col-span-1 md:col-span-2">
          <p className="paragraph">
            {
              t.nextToLearn.description
            }
          </p>
          <p className="paragraph">
            {
              t.nextToLearn.description2
            }
          </p>
          <p className='paragraph'>
            <strong>
              {
                t.nextToLearn.description3
              }
            </strong>
          </p>
        </div>

        <div className='w-full bg-accent rounded-full aspect-square my-16 mx-auto max-w-[360px] relative rotate'>
          <div
            className='w-full bg-[#CED7FE] dark:bg-[#2A282B] rounded-full aspect-square mx-auto max-w-[360px] scale-95'>
          </div>

          <div className='absolute -top-8 left-[calc(50%-60px)] rotate-reverse'>
            <IconWithText size={64} title="Rust" iconURL={'/icons/rust.svg'} hasBackground/>
          </div>

          <div className='absolute -bottom-12 left-[calc(50%-60px)] rotate-reverse'>
            <IconWithText size={64} title="Dart" iconURL={'/icons/dart.svg'} hasBackground/>
          </div>

          <div className='absolute top-[calc(50%-40px)] -right-12 rotate-reverse'>
            <IconWithText size={54} title="Flutter" iconURL={'/icons/flutter.svg'} hasBackground />
          </div>

          <div className='absolute top-[calc(50%-40px)] -left-12 rotate-reverse'>
            <IconWithText size={64} title="Python" iconURL={'/icons/python.svg'} hasBackground/>
          </div>

        </div>
      </div>
    </div>
  )
}
