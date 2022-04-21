import { Link } from 'react-router-dom';
import styles from './RegisterScreen.module.css';

const RegisterScreen = () => {
	return (
		<>
			<div className={styles.signup_container}>
				<div className={styles.signup_form_container}>
					<div className={styles.left}>
						<h1>Welcome Back</h1>
						<Link to='/login'>
							<button type='button' className={styles.white_btn}>
								Login
							</button>
						</Link>
					</div>
					<div className={styles.right}>
						<form className={styles.form_container}>
							<h1>Create Account</h1>
							<input
								type='text'
								placeholder='First Name'
								name='firstName'
								required
								className={styles.input}
							/>
							<input
								type='text'
								placeholder='Last Name'
								name='lastName'
								required
								className={styles.input}
							/>
							<input
								type='text'
								placeholder='User Name'
								name='userName'
								required
								className={styles.input}
							/>

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
								Register
							</button>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default RegisterScreen;
