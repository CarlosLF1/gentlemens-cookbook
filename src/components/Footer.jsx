import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="w-auto mx-auto">

	<footer className="p-4 bg-[#003049] rounded-lg shadow md:px-6 md:py-8">
		<div className="sm:flex sm:items-center sm:justify-between">
			<a href="#" target="_blank" className="flex items-center mb-4 sm:mb-0">
				<span className="self-center text-2xl font-normal whitespace-nowrap text-[#FDF0D5] hover:text-[#C1121F]" id="footer-logo">The Gentlemen's cookbook</span>
			</a>
			<ul className="flex flex-wrap items-center mb-6 sm:mb-0">
				<li>
					<a href="#" className="mr-4 text-sm hover:underline md:mr-6 text-[#FDF0D5]">About</a>
				</li>
				<li>
					<a href="#" className="mr-4 text-sm hover:underline md:mr-6 text-[#FDF0D5]">Privacy
						Policy</a>
				</li>
				<li>
					<a href="#"
						className="mr-4 text-sm hover:underline md:mr-6 text-[#FDF0D5]">Licensing</a>
				</li>
				<li>
					<a href="#" className="text-sm hover:underline text-[#FDF0D5]">Contact</a>
				</li>
			</ul>
		</div>
		<hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
		<span className="block text-sm text-white sm:text-center">© 2022 <a href="/" target="_blank" className="hover:underline text-[#669BBC]">Gentlemen's cookbook, JP, OB and CF™</a>. All Rights Reserved.
    </span>
      </footer>
      </div>
  )
}

// const styledFooter = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
// `

export default Footer