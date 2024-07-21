'use client'

import { FC, FormEvent, useState } from 'react'
import { Toaster, toast } from 'react-hot-toast'

import { createContactRequest } from '../services/contact'
import { Languages } from '@/interfaces/languages'
import { useTranslations } from '@/hooks/use-translations'

const initialSubject = 'work-puporsal'

interface Props {
  lang: Languages
}

export const Contact: FC<Props> = () => {

  const [ email, setEmail ] = useState('')
  const { translations: t } = useTranslations()

  const [ subject, setSubject ] = useState(initialSubject)
  const placeholderMsg = t.contact.placeholders.message
  const [ message, setMessage ] = useState(t.contact.placeholders.message)
  
  const onSubmit = async (e:FormEvent) => {
    e.preventDefault()

    const required = [email, message, subject]

    if( required.some( value => value.trim() === '' || !value ) ) {
      console.warn('All fields are required')
      return
    }

    if( message === placeholderMsg ) {
      console.warn('Please write a message')
      return
    }

    try {
      await createContactRequest({ email, subject, message })
      setEmail('')
      setSubject(initialSubject)
      setMessage(placeholderMsg)
      toast.success('Thanks for contacting me! I will reply as soon as possible')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded w-full mx-auto mt-8 shadow-md" id="contact">
      <h2 className="text-dark dark:text-light text-center font-bold">
        {
          t.contact.title
        }
      </h2>
      <form className="pt-4 mx-auto max-w-2xl" onSubmit={onSubmit} >
        <select
          name="subject"
          id="suject"
          defaultValue={ subject}
          onChange={ (e) => setSubject(e.target.value) }
          className='bg-slate-50 dark:bg-slate-600 text-dark dark:text-light w-full px-4 py-2 rounded mb-4 font-bold block shadow'
        >
          <option value="work-purpose"
          >
            {
              t.contact.options.workPurpose
            }
          </option>
          <option value="collaboration"
          >
            {
              t.contact.options.collaboration
            }
          </option>
          <option value="personal-contact"
          >
            {
              t.contact.options.personalContact
            }
          </option>
          <option value="custom"
          >
            {
              t.contact.options.custom
            }
          </option>
        </select>
        <input
          type="email"
          required
          placeholder={ t.contact.placeholders.email}
          className="bg-slate-50 dark:bg-slate-600 text-dark dark:text-light placeholder:text-dark dark:placeholder:text-light w-full px-4 py-2 rounded mb-4 font-bold shadow"
          onChange={ (e) => setEmail(e.target.value) }
          value={ email }
        />
        <textarea
          required
          className="bg-slate-50 dark:bg-slate-600 text-dark dark:text-light w-full px-4 py-2 rounded h-24 font-bold shadow"
          value={ message }
          onChange={ (e) => setMessage(e.target.value) }
          onFocus={ (e) => {
            if( e.target.value === placeholderMsg ) {
              setMessage('')
            }
          }}
          onBlur={ (e) => {
            if( e.target.value.trim() === '' ) {
              setMessage(placeholderMsg)
            }
          }}
        >
        </textarea>
        <button className='bg-accent font-bold border border-accent text-light p-2 text-center w-full max-w-md mx-auto rounded block mt-4 transition-colors hover:bg-accentDark hover:border-light shadow'>
          {
            t.contact.button
          }
        </button>
      </form>
      <Toaster
        toastOptions={{
          className: 'bg-emerald-600 text-light',
          icon: '⭐',
          position: 'top-center',
          duration: 3000,
          style: { fontWeight: 700 }
        }}
      />
    </div>
  )
}
