import React from 'react'
import { Link } from 'react-router-dom';

const PageLink = ({ link, title }) => {
  return (
    <Link
        to={link}
        className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white hover:bg-indigo-500 ">
        {title}
    </Link>
  )
}

export default PageLink
