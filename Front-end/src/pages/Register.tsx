/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Switch } from "@headlessui/react";
import Input from "../components/Input";

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ");
}

export default function Register() {
	const [agreed, setAgreed] = useState(false);

	return (
		<div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
			<div
				className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
				aria-hidden="true"
			>
				<div className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]" />
			</div>
			<div className="mx-auto max-w-2xl text-center">
				<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
					Crisis management
				</h2>
				<p className="mt-2 text-lg leading-8 text-gray-600">
					Welcome to crisis management
				</p>
			</div>
			<form
				action="#"
				method="POST"
				className="mx-auto mt-16 max-w-xl sm:mt-20"
			>
				<div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
					<div>
						<label
							htmlFor="first-name"
							className="block text-sm font-semibold leading-6 text-gray-900"
						>
							First name
						</label>
						<div className="mt-2.5">
							<Input
								type="text"
								name="first-name"
								id="first-name"
								autoComplete="given-name"
							/>
						</div>
					</div>
					<div>
						<label
							htmlFor="last-name"
							className="block text-sm font-semibold leading-6 text-gray-900"
						>
							Last name
						</label>
						<div className="mt-2.5">
							<Input
								type="text"
								name="last-name"
								id="last-name"
								autoComplete="family-name"
							/>
						</div>
					</div>
					<div className="sm:col-span-2">
						<label
							htmlFor="username"
							className="block text-sm font-semibold leading-6 text-gray-900"
						>
							Username *
						</label>
						<div className="mt-2.5">
							<Input
								type="text"
								name="company"
								id="company"
								autoComplete="organization"
								required
							/>
						</div>
					</div>
					<div className="sm:col-span-2">
						<label
							htmlFor="email"
							className="block text-sm font-semibold leading-6 text-gray-900"
						>
							Email *
						</label>
						<div className="mt-2.5">
							<Input
								type="email"
								name="email"
								id="email"
								autoComplete="email"
								required
							/>
						</div>
					</div>
					<div className="sm:col-span-2">
						<label
							htmlFor="phone-number"
							className="block text-sm font-semibold leading-6 text-gray-900"
						>
							Password *
						</label>
						<div className="relative mt-2.5">
							<Input
								type="password"
								name="password"
								id="password"
								required
							/>
						</div>
					</div>
					<div className="sm:col-span-2">
						<label
							htmlFor="phone-number"
							className="block text-sm font-semibold leading-6 text-gray-900"
						>
							Phone number
						</label>
						<div className="relative mt-2.5">
							<Input
								type="tel"
								name="phone-number"
								id="phone-number"
								autoComplete="tel"
							/>
						</div>
					</div>
					<div className="sm:col-span-2">
						<label
							htmlFor="city"
							className="block text-sm font-semibold leading-6 text-gray-900"
						>
							City
						</label>
						<div className="mt-2.5">
							<Input
								type="text"
								name="city"
								id="city"
								autoComplete="city"
							/>
						</div>
					</div>
					<div>
						<label
							htmlFor="street"
							className="block text-sm font-semibold leading-6 text-gray-900"
						>
							Street
						</label>
						<div className="mt-2.5">
							<Input
								type="text"
								name="street"
								id="street"
								autoComplete="street"
							/>
						</div>
					</div>
					<div>
						<label
							htmlFor="city"
							className="block text-sm font-semibold leading-6 text-gray-900"
						>
							Zipcode
						</label>
						<div className="mt-2.5">
							<Input
								type="text"
								name="street"
								id="street"
								autoComplete="street"
							/>
						</div>
					</div>
					<Switch.Group
						as="div"
						className="flex gap-x-4 sm:col-span-2"
					>
						<div className="flex h-6 items-center">
							<Switch
								checked={agreed}
								onChange={setAgreed}
								className={classNames(
									agreed ? "bg-indigo-600" : "bg-gray-200",
									"flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
								)}
							>
								<span className="sr-only">
									Agree to policies
								</span>
								<span
									aria-hidden="true"
									className={classNames(
										agreed
											? "translate-x-3.5"
											: "translate-x-0",
										"h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
									)}
								/>
							</Switch>
						</div>
						<Switch.Label className="text-sm leading-6 text-gray-600">
							By selecting this, you agree to our{" "}
							<a
								href="#"
								className="font-semibold text-indigo-600"
							>
								privacy&nbsp;policy
							</a>
							.
						</Switch.Label>
					</Switch.Group>
				</div>
				<div className="mt-10">
					<button
						type="submit"
						className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					>
						Sign up
					</button>
				</div>
			</form>
		</div>
	);
}
