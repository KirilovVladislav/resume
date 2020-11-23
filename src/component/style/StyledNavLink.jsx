import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'

const activeClassName = `active`

export const StyledNavLink = styled(NavLink).attrs({
  activeClassName,
})`
  &.${activeClassName} {
    color: #ffffff;
    background-color: ${({ theme }) => theme.link_color};
  }
`
