/** @jsx jsx */
import {jsx} from '@emotion/core'
import styled from '@emotion/styled'
import Button from '../Button'
import Input from '../Input'
import React from 'react'
import Spinner from '../../components/Spinner'
import {AuthContext} from '../../App'
import {signUpForm} from '../../constants/language'
import isValidEmail from '../../helpers/isValidEmail'

const FormSectionWrapper = styled.div({
	width: '75%',
	display: 'flex',
	justifyContent: 'center',
})

const FormWrapper = styled.div({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'flex-start',
	maxWidth: '320px',
	width: '100%',
	height: '100%',
	margin: 'auto',
	position: 'relative',
})

const FormTitle = styled.h1({
	textAlign: 'left',
	marginBottom: '30px',
})

const Spacer = () => (
	<hr
		css={{
			height: '4px',
			width: '100%',
			background: '#EEF1FA',
			border: 'none',
			margin: '30px 0',
		}}
	/>
)

const InputError = styled.div({
	color: 'red',
	fontSize: '14px',
	margin: '10px 0 20px',
	width: '100%',
})

const AuthError = styled.div({
	fontSize: '14px',
	border: '1px solid red',
	backgroundColor: '#ff9999',
	margin: '10px 0',
	position: 'absolute',
	top: '6%',
	color: 'white',
	padding: '10px 20px',
	borderRadius: '2px',
	width: '100%',
})

const LoginLinkWrapper = styled.div({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	marginBottom: '20px',
})

const LoginLink = styled.a({
	textDecoration: 'underline',
	color: '#536DC4',
})

const Login = (props) => {
	const initialState = {
		status: 'idle',
		emailError: null,
		passwordError: null,
		authError: null,
		emailValue: '',
		passwordValue: '',
		emailTouch: false,
		passwordTouch: false,
	}

	const {dispatch} = React.useContext(AuthContext)
	const [state, setState] = React.useState(initialState)

	const isValidPassword = (value) => value?.length > 5

	const handleFocus = (event) => {
		event.preventDefault()
		const {type} = event.target

		switch (type) {
			case 'email':
				setState({
					...state,
					emailTouch: true,
				})
				break
			case 'password':
				setState({
					...state,
					passwordTouch: true,
				})
				break
			default:
				return
		}
	}

	const handleChange = (event) => {
		event.preventDefault()
		const {value, type} = event.target

		switch (type) {
			case 'email':
				const emailIsValid = isValidEmail(value)
				setState({
					...state,
					emailValue: value,
					emailError: emailIsValid ? null : signUpForm.error[type],
				})

				break
			case 'password':
				const passwordIsValid = isValidPassword(value)
				setState({
					...state,
					passwordValue: value,
					passwordError: passwordIsValid
						? null
						: signUpForm.error[type],
				})

				break
			default:
				return
		}
	}

	const handleSubmit = async (event) => {
		event.preventDefault()
		const {emailAddress: email, password} = event.target.elements

		setState({
			...state,
			status: 'loading',
		})

		const request = window
			.fetch(
				// We need to use a reverse proxy in local to bypass CORS policy. To solve this in the future,
				// add a `Access-Control-Allow-Origin: *` header to the API server.
				`https://cors-anywhere.herokuapp.com/${process.env.REACT_APP_API_URL}/sessions`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						email: email.value,
						password: password.value,
					}),
				}
			)
			.then((res) => res.json())
			.catch((e) => e)
		const response = await request

		setState({
			...state,
			status: 'idle',
			authError: response.error ? signUpForm.error.unauthenticated : null,
		})

		if (response && !response.error) {
			dispatch({
				type: 'LOGIN',
				payload: response,
			})
		}
	}

	return (
		<FormSectionWrapper>
			<FormWrapper>
				<AuthError
					css={{
						display: state.authError ? 'block' : 'none',
					}}
					role="alert"
				>
					{state.authError}
				</AuthError>
				<FormTitle>Sign in</FormTitle>
				<form
					css={{
						width: '100%',
					}}
					onSubmit={handleSubmit}
				>
					<Input
						styles={{
							border: `1px solid ${
								state.emailError ? 'red' : '#9AA5AF'
							}`,
						}}
						name="email-address"
						type="email"
						placeholder="name@example.com"
						onChange={handleChange}
						onFocus={handleFocus}
						value={state.emailValue}
					/>
					<InputError role="alert">{state.emailError}</InputError>
					<Input
						styles={{
							border: `1px solid ${
								state.passwordError ? 'red' : '#9AA5AF'
							}`,
						}}
						name="password"
						type="password"
						onChange={handleChange}
						onFocus={handleFocus}
						value={state.passwordValue}
					/>
					<InputError role="alert">{state.passwordError}</InputError>
					<LoginLinkWrapper>
						<LoginLink href="/forgot-password">
							Forgot Password?
						</LoginLink>
						<LoginLink href="/auth/v1/amazon">
							Sign in with Amazon
						</LoginLink>
					</LoginLinkWrapper>
					<Button
						disabled={Boolean(
							state.emailError ||
								state.passwordError ||
								!state.emailTouch ||
								!state.passwordTouch
						)}
						type="submit"
					>
						{state.status === 'loading' ? <Spinner /> : 'Sign in'}
					</Button>
				</form>
				<Spacer />
				<div>
					<h4>New to Lovevery?</h4>
					<p>
						Check out faster, manage subscriptions, and quickly find
						tracking information.
					</p>
					<Button theme="secondary">Create Account</Button>
				</div>
			</FormWrapper>
		</FormSectionWrapper>
	)
}

export default Login
