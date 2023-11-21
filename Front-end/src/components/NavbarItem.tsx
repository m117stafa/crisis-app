import React from 'react'
import { Link } from 'react-router-dom';

interface NavbarItemProps{
    name: string;
    href: string;
}

const NavbarItemWideScreen = (props:NavbarItemProps) => {
  return (
    <Link to={props.href} className="text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600 ease-linear duration-75">
            {props.name}
    </Link>
  )
}

export const NavbarItemMenu = (props:NavbarItemProps) => {
    return (
        <Link to={props.href} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:text-indigo-600 ease-linear duration-75">
                {props.name}
        </Link>
      )
}

export default NavbarItemWideScreen