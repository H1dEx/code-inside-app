import React from 'react'
import { Menu } from 'components/Content/Menu'
import { ContentInner } from 'components/common/ContentInner'
import s from './style.css'

export const Content: React.FC = () => {
  return (
    <ContentInner>
      <div className={s.wrapper}>
        <div className={s.container}>Content</div>
        <Menu />
      </div>
    </ContentInner>
  )
}
