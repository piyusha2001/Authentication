import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './components/routing/PrivateRoute';
import PrivateScreen from './components/screens/PrivateScreen';
import LoginScreen from './components/screens/LoginScreen';
import RegisterScreen from './components/screens/RegisterScreen';
function App() {
	return (
		<Routes>
			<div className='App'>
				<PrivateRoute exact path='/' component={PrivateScreen} />
				<Route exact path='/login' component={LoginScreen} />
				<Route exact path='/register' component={RegisterScreen} />
			</div>
		</Routes>
	);
}

export default App;
