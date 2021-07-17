import React from 'react'
import s from './style.css'

type TProps = {
  children: React.ReactNode
}

export const ContentInner: React.FC<TProps> = ({ children }: TProps) => {
  return <div className={s.innerWrapper}>{children}</div>
}
