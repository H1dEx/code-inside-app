import React from 'react'
import classNames from 'classnames/bind'
import { ContentInner } from 'components/common/ContentInner'
import s from './style.css'

const cn = classNames.bind(s)

export const Header: React.FC = () => {
  return (
    <div className={s.header}>
      <ContentInner>
        <nav className={s.wrapper}>
          <h1 className={s.titleWrapper}>TestTask</h1>
          <ul className={cn('listMenu', 'centerMenu')}>
            <li>Books</li>
            <li>Characters</li>
            <li>Houses</li>
          </ul>
        </nav>
      </ContentInner>
    </div>
  )
}
