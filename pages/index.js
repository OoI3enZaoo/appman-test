import Link from 'next/link'
import styled from 'styled-components'
import { color } from '<config>'
import { Button, Logo, Form } from '<components>'
import { compose, withState, withHandlers,lifecycle } from 'recompose'

import axios from 'axios'
const IndexPage = ({
  email,
  password,
  onSigninHandle,
  onEmailChange,
  onPasswordChange,
  errorMessage,
  isLoading,
}) => {
  return (
      <Container>
        <LoginBox>
          <LogoWrapper>
            <Logo isLoading={isLoading}/>
          </LogoWrapper>
          <Form onSubmit={onSigninHandle}>
            <FormWrapper>
              <label className='form-title' htmlFor=''>E-mail address</label>
              <Form.input
                value={email}
                placeholder="example@hotmail.com"
                onChange={onEmailChange}
              ></Form.input>
            </FormWrapper>


              <FormWrapper>
                <label className='form-title' htmlFor=''>Password</label>
                <Form.input
                  type="password"
                  value={password}
                  placeholder="your password..."
                  onChange={onPasswordChange}
                ></Form.input>
              </FormWrapper>
              {
                errorMessage ?
                <ErrorMsg>{errorMessage}</ErrorMsg>
                : null
              }
            <ButtonWrapper>
              <Button
                type="submit"
                disabled={isLoading}
              >SIGN IN</Button>
            </ButtonWrapper>
          </Form>
          <Row>
            <ActionLabel>Forgot password</ActionLabel>
            <ActionLabel>Create a new account</ActionLabel>
          </Row>
        </LoginBox>
      </Container>
  )
}


export default compose(
  withState('email', 'setEmail', ''),
  withState('password', 'setPassword', ''),
  withState('errorMessage', 'setErrorMessage', ''),
  withState('isLoading', 'setIsloading', false),
  withHandlers({
    onEmailChange: ({ setEmail }) => e => {
      setEmail(e.target.value)
    },
    onPasswordChange: ({setPassword}) => e => {
      setPassword(e.target.value)
    },
    onSigninHandle: ({ email, password, setErrorMessage, setIsloading }) => e => {
      e.preventDefault()
      setIsloading(true)
      const payload = { email, password }
      axios.post('http://localhost:4000/api/login', payload)
      .then (resp => {
        setIsloading(false)
        const { status } = resp
        if (status == 200) {
          alert('Login Successed')
          setErrorMessage('')
        } else {
          setErrorMessage('E-mail or password is incorrect')
        }
      })
      .catch(error => {
        setIsloading(false)
        console.log('error', error)
        setErrorMessage('E-mail or password is incorrect')
      })
    },
  }),
  lifecycle({
    componentWillMount() {
      console.log('ReduxData', this.props.dataWorks)
    }
  })
)(IndexPage)

const MyTitle = styled.div`
  font-size: 60px;
  color: ${color.primary};
`
const LogoWrapper = styled.div`
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  flex-direction: column;
  background-color: ${color.background};
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: auto;
`
const ActionLabel = styled.div`
  color: ${color.primary};
  text-decoration: underline;
  cursor: pointer;

`
const FormWrapper = styled.div`
  margin: 30px 0px;
`
const ButtonWrapper = styled.div`
  display:flex;
  justify-content: center;
  margin: 30px 0px;
`
const LoginBox = styled.div`
  border-radius: 1rem;
  min-width: 600px;
  padding: 20px;
  background-color: white;
  box-shadow: 0 70px 40px -40px rgba(0,0,0,0.5);
  display: flex;
  flex-direction: column;
`
const ErrorMsg = styled.div`
  color: ${color.error};
`
