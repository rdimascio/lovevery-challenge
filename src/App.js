import React from 'react'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import Login from './components/Login'
import Hero from './components/Hero'
import Home from './components/Home'
import BrushStroke from './components/BrushStroke'

import 'bootstrap/dist/css/bootstrap-reboot.css'
import './index.css'

export const AuthContext = React.createContext()

const initialState = {
	isAuthenticated: false,
	cartCount: 1,
}

const reducer = (state, action) => {
	switch (action.type) {
		case 'LOGIN':
			return {
				...state,
				...action.payload,
				error: null,
				isAuthenticated: true,
				cartCount: 1,
			}
		case 'LOGOUT':
			return {
				...state,
				...action.payload,
				greeting: null,
				isAuthenticated: false,
				cartCount: 1,
			}
		default:
			return state
	}
}

const App = () => {
	const [state, dispatch] = React.useReducer(reducer, initialState)

	return (
		<AuthContext.Provider
			value={{
				state,
				dispatch,
			}}
		>
			<Header cart={state.cartCount} />
			<Body>
				{state.isAuthenticated ? (
					<Home message={state.greeting} />
				) : (
					<>
						<BrushStroke />
						<Login />
						<Hero />
					</>
				)}
			</Body>
			<Footer />
		</AuthContext.Provider>
	)
}

export default App
