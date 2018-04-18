import styled from 'styled-components'
import { color, font } from '<config>'

const Form = styled.form`
  margin: 0;
`
Form.row = styled.div`
  margin-bottom: 15px;
  &:last-child {
    margin-bottom: 0;
  }
`
Form.wrapper = styled.div`
  margin: 30px 0px;
  display: flex;
  flex-direction: column;
  .form-title {
    font-size: 20px;
  }
`
Form.label = styled.label`
  display: block;
  margin-bottom: 0.2em;
  font-size: 24px;
  color: black;
`

Form.input = styled.input`
  padding: 6px 16px;
  border: 1px solid ${color.borderGray};
  border-radius: 1rem;
  outline: none;
  min-height: 32px;
  font-size: 24px;
  &::-webkit-input-placeholder {
    color: ${color.placeholder};
  }
  &::-moz-placeholder {
    color: ${color.placeholder};
  }
  &:-ms-input-placeholder {
    color: ${color.placeholder};
  }
  &:-moz-placeholder {
    color: ${color.placeholder};
  }
  :hover {
    border: 1px solid ${color.borderHover};
  }
`

Form.help = styled.span`
  color: #999;
  font-size: 12px;
`

Form.note = styled.p`
  margin-top: 1em;
  color: #666;
  font-size: 14px;
  font-style: italic;
`

export default Form
