import styled from 'styled-components/macro'

export const Toggler = styled.button`
  width: 36px;
  height: 20px;
  position: relative;

  border: 1px solid ${({ theme }) => theme.font_contrast_color};
  border-radius: 20px;
  background-color: ${({ theme }) => theme.contrast_color};

  color: ${({ theme }) => theme.font_contrast_color};

  outline: none;

  &.active {
    &::after {
      margin-left: 15px;
    }
  }

  &::after {
    content: '';
    position: absolute;
    left: 1px;
    right: 1px;
    top: 1px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.main_color};
    z-index: 10;

    transition: margin-left 200ms linear;
  }
`
