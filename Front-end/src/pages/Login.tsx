import { Link, Navigate, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import { useState } from "react";

export default function Login() {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [error, setError] = useState(false);
	const navigate = useNavigate();

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};

	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Add your login logic here using the 'email' and 'password' state
		if (email =="admin@admin.com" && password == "admin"){
			localStorage.setItem("username","Admin");
			navigate("/", { replace: true });
		} else{
			setError(true);
		}
	};

	return (
		<>
			<div className="flex min-h-full flex-1 flex-col justify-center items-center px-6 py-12 lg:px-8">
				<div className="sm:mx-auto sm:w-full sm:max-w-sm">
					<h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
						Crisis management
					</h2>
					<h2 className="mt-10 text-center text-2xl leading-9 tracking-tight text-gray-900">
						Sign in to your account
					</h2>
				</div>

				<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
					<form className="space-y-6" action="#" method="POST">
						{error?<div className="text-red-600">Incorrect email or password</div>:""}
						<div>
							<label
								htmlFor="email"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Email address
							</label>
							<div className="mt-2">
								<Input
									id="email"
									name="email"
									autoComplete="email"
									type="email"
									onChange={handleEmailChange}
									value={email}
									required
								/>
							</div>
						</div>

						<div>
							<div className="flex items-center justify-between">
								<label
									htmlFor="password"
									className="block text-sm font-medium leading-6 text-gray-900"
								>
									Password
								</label>
								<div className="text-sm">
									<a
										href="#"
										className="font-semibold text-indigo-600 hover:text-indigo-500"
									>
										Forgot password?
									</a>
								</div>
							</div>
							<div className="mt-2">
								<Input
									id="password"
									name="password"
									autoComplete="current-password"
									type="password"
									onChange={handlePasswordChange}
									value={password}
									required
								/>
							</div>
						</div>

						<div>
							<button
								type="submit"
								onClick={handleSubmit}
								className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>
								Sign in
							</button>
						</div>
					</form>

					<p className="mt-3 text-center text-sm text-gray-500">
						Not a member?{" "}
						<Link
							to={"/register"}
							className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
						>
							Sign up
						</Link>
					</p>
				</div>
			</div>
		</>
	);
}
