import { useEffect, useState } from "react";
import { Dialog, Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import NavbarItemWideScreen, { NavbarItemMenu } from "./NavbarItem";
import { Link } from "react-router-dom";
import { SearchInput } from "./Input";

const NavbarItems = [
	{ name: "Incidents", href: "incidents" },
	{ name: "Chatbot", href: "#" },
	{ name: "Educational", href: "#" },
	{ name: "About us", href: "#" },
];

export default function Example() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	const [username, setUsername] = useState<string | null>(null);

	useEffect(() => {
		// Check if username exists in localStorage
		const storedUsername = localStorage.getItem("username");
		if (storedUsername) {
			setUsername(storedUsername);
		}
	}, []);

	return (
		<header className="inset-x-0 top-0 z-10">
			<nav
				className="mx-auto flex max-w-full items-center justify-between p-6 lg:px-8"
				aria-label="Global"
			>
				<div className="flex lg:flex-1">
					<a href="#" className="-m-1.5 p-1.5">
						<span className="font-bold">Crisis management</span>
					</a>
				</div>
				<div className="flex lg:hidden">
					<button
						type="button"
						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
						onClick={() => setMobileMenuOpen(true)}
					>
						<span className="sr-only">Open main menu</span>
						<Bars3Icon className="h-6 w-6" aria-hidden="true" />
					</button>
				</div>
				<Popover.Group className="hidden lg:flex lg:gap-x-12 lg:items-center">
					{NavbarItems.map((item, index) => (
						<NavbarItemWideScreen
							href={item.href}
							name={item.name}
							key={index}
						/>
					))}
					<div className="hidden lg:flex lg:flex-1">
						<SearchInput
							type="text"
							name="search"
							id="search"
							placeholder="Search"
							autoComplete="off"
						/>
					</div>
				</Popover.Group>

				<div className="hidden lg:flex lg:flex-1 lg:justify-end">
					{username ? (
						// Render the username if available in localStorage
						<span className="text-sm font-semibold leading-6 text-gray-900">
							{username}
						</span>
					) : (
						// Render the login link if username is not available
						<Link
							to={"/login"}
							className="text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600 ease-linear duration-75"
						>
							Log in <span aria-hidden="true">&rarr;</span>
						</Link>
					)}
				</div>
			</nav>
			<Dialog
				as="div"
				className="lg:hidden"
				open={mobileMenuOpen}
				onClose={setMobileMenuOpen}
			>
				<div className="fixed inset-0 z-10" />
				<Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
					<div className="flex items-center justify-between">
						<a href="#" className="-m-1.5 p-1.5">
							<span className="font-bold">Crisis management</span>
						</a>
						<button
							type="button"
							className="-m-2.5 rounded-md p-2.5 text-gray-700"
							onClick={() => setMobileMenuOpen(false)}
						>
							<span className="sr-only">Close menu</span>
							<XMarkIcon className="h-6 w-6" aria-hidden="true" />
						</button>
					</div>
					<div className="mt-6 flow-root">
						<div className="-my-6 divide-y divide-gray-500/10">
							<div className="space-y-2 py-6">
								{NavbarItems.map((item, index) => (
									<NavbarItemMenu
										href={item.href}
										name={item.name}
										key={index}
									/>
								))}
								<div className="flex w-2/3 leading-7">
									<SearchInput
										type="text"
										name="search"
										id="search"
										placeholder="Search"
										autoComplete="off"
									/>
								</div>
							</div>

							<div className="py-6">
								{username ? (
									// Render the username if available in localStorage
									<span className="text-sm font-semibold leading-6 text-gray-900">
										{username}
									</span>
								) : (
									// Render the login link if username is not available
									<Link
										to={"/login"}
										className="text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600 ease-linear duration-75"
									>
										Log in{" "}
										<span aria-hidden="true">&rarr;</span>
									</Link>
								)}
							</div>
						</div>
					</div>
				</Dialog.Panel>
			</Dialog>
		</header>
	);
}
