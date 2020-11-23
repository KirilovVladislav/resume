import styled from 'styled-components/macro'

const typeSize = {
  h1: `4rem`,
  h2: `3rem`,
  h3: `2rem`,
  h4: `1.5rem`,
}

const typeMode = {
  link: `link_color`,
  success: `success_color`,
  danger: `danger_color`,
}

export const Typography = styled.span`
  color: ${({ theme, mode }) => theme[typeMode[mode]] || theme.font_main_color};
  font-size: ${(props) => typeSize[props.as] || props.size};
  line-height: 1.5em;
  font-weight: ${(props) => (props.bold ? props.bold : 400)};
  text-decoration: none;
  padding: ${(props) => typeSize[props.as] && `0.5em 0.5rem`};
  padding-top: ${(props) => typeSize[props.as] && `1em`};

  &:hover,
  &:focus {
    color: ${({ theme, mode }) =>
      mode === `link` && theme.contrast_hover_color};
  }
`
