import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './components/routing/PrivateRoute';
import EmailVerify from './components/Screens/EmailVerify';
import LoginScreen from './components/Screens/LoginScreen';
import PrivateScreen from './components/Screens/PrivateScreen';
import RegisterScreen from './components/Screens/RegisterScreen';

function App() {
	return (
		<Routes>
			<Route
				exact
				path='/'
				element={
					<PrivateRoute>
						<PrivateScreen />
					</PrivateRoute>
				}
			/>

			<Route exact path='/login' element={<LoginScreen />} />
			<Route exact path='/register' element={<RegisterScreen />} />
			<Route path='users/:id/verify/:token' element={<EmailVerify />} />
		</Routes>
	);
}

export default App;
