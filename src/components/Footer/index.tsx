import React from 'react'
import { ContentInner } from 'components/common/ContentInner'
import s from './style.css'

export const Footer: React.FC = () => {
  return (
    <div className={s.footer}>
      <ContentInner>
        <div>Footer</div>
      </ContentInner>
    </div>
  )
}
