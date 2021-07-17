import React from 'react'
import { Header } from 'components/Header'
import { Content } from 'components/Content'
import { Menu } from 'components/Content/Menu'
import { Footer } from 'components/Footer'
import s from './appStyles.css'

export const App: React.FC = () => {
  return (
    <div className={s.wrapper}>
      <Header />
      <Content />
      <Footer />
    </div>
  )
}
