import { english, spanish } from '@/i18n'
import { Languages } from '@/interfaces/languages'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'

interface Result {
  lang: Languages
  setLang: Dispatch<SetStateAction<Languages>>
  translations: typeof spanish | typeof english
}

export const useTranslations = (): Result => {
  const [lang, setLang] = useState<Languages>('en')

  useEffect(() => {
    const url = new URL(window.location.href)

    const lang = url.pathname.split('/')[1]

    if( lang !== 'en' && lang !== 'es') {
      setLang('en')
      return
    }

    setLang(lang)
  }, [])

  return {
    lang,
    setLang,
    translations: lang === 'es' ? spanish : english
  }
}
