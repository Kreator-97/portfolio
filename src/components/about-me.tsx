'use client'
import { FC } from 'react'
import { english, spanish } from '@/i18n'

import { Languages } from '@/interfaces/languages'

interface Props {
  lang: Languages
}

export const AboutMe: FC<Props> = ({ lang }) => {

  const t = lang === 'es' ? spanish : english

  return (
    <div id="about-me">
      <div className="p-4 rounded bg-slate-200 dark:bg-slate-700 bg-opacity-80">
        <p className="paragraph font-bold">
          {
            t.aboutMe.parragraphs.first
          }
        </p>
        <p className="paragraph font-bold">
          <span className="text-accentDark">
            {
              t.aboutMe.parragraphs.second
            }
          </span>
        </p>
        <p className="paragraph font-bold">
          {
            t.aboutMe.parragraphs.third.first
          }
          <span className="text-accentDark">
            {
              t.aboutMe.parragraphs.third.span
            }
          </span>
          <span>
            {
              t.aboutMe.parragraphs.third.third
            }
          </span>
        </p>
      </div>
    </div>
  )
}
