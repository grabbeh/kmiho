import styled from 'styled-components'

const Fade = styled.div`
opacity: ${props => (props.hide ? 0 : 1)};
transition: opacity 750ms ease-out;
`
export default Fade
