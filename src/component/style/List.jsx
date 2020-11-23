import styled from 'styled-components/macro'

export const List = styled.ul`
    display: flex;
    flex-direction: ${(props) => props.direction ? props.direction : `row` };
`
