import styled from 'styled-components'

const Grow = styled.div.attrs({
  className: 'secondary-front bg-white absolute top-0 right-0'
})`
opacity: ${props => (props.show ? 1 : 0)}
width: ${props => (props.show ? '100%' : 0)};
height: ${props => (props.show ? '100%' : 0)};
transition: all 500ms ease-out;


`
export default Grow