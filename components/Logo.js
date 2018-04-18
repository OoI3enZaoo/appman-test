import React from 'react'
import styled from 'styled-components'
import logo from '<images>/logo.svg'
const Logo = ({
  isLoading,
}) => (
  <Img
    isLoading={isLoading}
    className='logo-spin'
    src={logo}
  />
)
export default Logo

const Img = styled.img`
  width: 180px;
  animation: ${props => props.isLoading ? 'App-logo-spin infinite 3s linear' : '' };
  @keyframes App-logo-spin {
      from {
          transform: rotate(0deg);
      }
      to {
          transform: rotate(360deg);
      }
  }
`
