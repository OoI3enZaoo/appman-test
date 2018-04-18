import React from 'react'
import styled from 'styled-components'
import { color } from '<config>'
const CustomButton = ({children}) => {
  return <Button>{children}</Button>
}
export default CustomButton

const Button = styled.button`
  cursor: pointer;
  background-color: ${color.primary};
  color: white;
  padding: 13px 52px;
    font-size: 22px;
  border: 0;
  border-radius: 5px;
  :hover {
    background-color: ${color.buttonHover};
  }
`
