import React, { FC, ReactNode } from 'react'
import { LayoutStyle } from './styles'
interface ILayout {
  children: ReactNode
}

const Layout:FC<ILayout> = ({children}) => {
  return (
    <LayoutStyle>{children}</LayoutStyle>
  )
}

export default Layout
