import { Link } from 'react-router-dom';
import styles from './Login.module.css';

const LoginScreen = () => {
	return (
		<div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container}>
						<h1>Login to Your Account</h1>
						<input
							type='email'
							placeholder='Email'
							name='email'
							required
							className={styles.input}
						/>
						<input
							type='password'
							placeholder='Password'
							name='password'
							required
							className={styles.input}
						/>

						<button type='submit' className={styles.red_btn}>
							Login
						</button>
					</form>
				</div>
				<div className={styles.right}>
					<h1>New Here ?</h1>
					<Link to='/register'>
						<button type='button' className={styles.white_btn}>
							Register
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default LoginScreen;
