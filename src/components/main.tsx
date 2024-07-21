import { FC } from 'react'
import {
  Contact,
  HardSkills,
  Learning,
  NextToLearn,
  Projects,
  SoftSkills
} from '.'
import { Languages } from '@/interfaces/languages'

interface Props {
  lang: Languages
}

export const Main: FC<Props> = ({ lang }) => {
  return (
    <main>
      <div className='grid grid-cols-1 mb-8'>

        <div className='max-w-5xl mx-auto px-4'>
          <HardSkills lang={ lang }/>
          <SoftSkills lang={ lang } />
        </div>

        <Projects lang={ lang }/>

        <div className='max-w-5xl mx-auto px-4'>
          <Learning lang={ lang } />
          <NextToLearn lang={ lang } />
          <Contact lang={ lang }/>
        </div>

      </div>
    </main>
  )
}
