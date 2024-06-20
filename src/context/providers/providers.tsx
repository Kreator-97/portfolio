'use client'

import { FC } from 'react'
import { UIProvider } from '../ui/'

export const Providers: FC<{ children: React.ReactNode}> = ({ children }) => {
  return (
    <UIProvider>
      { children }
    </UIProvider>
  )
}