'use client'
import { useRouter} from 'next/navigation'
import Image from 'next/image'
import { useTranslations } from '@/hooks/use-translations'

export const LanguageWidget = () => {
  const { lang, setLang } = useTranslations()
  const router = useRouter()

  return (
    <div
      className="fixed bottom-0 right-0 p-4 bg-slate-200 dark:bg-slate-700 bg-opacity-80 rounded-tl-lg flex flex-col gap-4 z-10"
    >
      <button
        onClick={() => {
          router.push('/es', { scroll: false })
          setLang('es')
        }}
      >
        <Image
          alt='Español'
          src={'/icons/spain.png'}
          width={64}
          height={64}
          className={
            `
              w-[48px] lg:w-[64px] transition-opacity
              ${ lang === 'es' ? 'opacity-100 border-2 border-accent rounded-full' : 'opacity-50'}
            `
          }
        />
      </button>

      <button
        onClick={() => {
          router.push('/en', { scroll: false })
          setLang('en')
        }}
      >
        <Image
          alt='English'
          src={'/icons/english.png'}
          width={64}
          height={64}
          className={
            `
              w-[48px] lg:w-[64px] transition-opacity
              ${ lang === 'en' ? 'opacity-100 border-2 border-accent rounded-full' : 'opacity-30'}
            `
          }
        />
      </button>
    </div>
  )
}
