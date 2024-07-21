'use client'

import { FC } from 'react'
import { UIProvider } from '../ui/'
// import { LangProvider } from '../lang'

export const Providers: FC<{ children: React.ReactNode}> = ({ children }) => {
  return (
    <UIProvider>
      {/* <LangProvider> */}
      { children }
      {/* </LangProvider> */}
    </UIProvider>
  )
}
