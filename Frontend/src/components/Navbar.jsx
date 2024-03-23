import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

//React icons
import { FaBarsStaggered, FaBlog } from "react-icons/fa6";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    //Toggle Menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 100){
                setIsSticky(true);
            }
            else{
                setIsSticky(false);
            }
        }

        window.addEventListener("scroll", handleScroll);
    }, [])

    //navItems
    const navItems = [
        {link: "Home", path: "/"},
        {link: "About", path: "/about"},
        {link: "Shop", path: "/shop"},
        {link: "Sell Your Book", path: "/admin/dashboard"},
        {link: "Blog", path: "/blog"}
    ]
  return (
    <header className='w-full bg-transparent top-0 left-0 right-0 transition-all ease-in duration-300 fixed z-10'>
        <nav className={`py-4 lg:px-24 px-4 ${isSticky ? "sticky top-0 left-0 right-0 bg-blue-300" : ""}`}>
            <div className='justify-between md:flex items-center text-base gap-8'>
                <Link to='/' className='text-2xl font-bold text-blue-700 flex items-center gap-2'><FaBlog className=' inline-block'/>Books</Link>
                {/*Navbar item*/}
                <ul className='md:flex space-x-12'>
                    {
                        navItems.map(({link, path}) => <Link key={path} to={path} className='block text-base text-black uppercase cursor-pointer hover:text-blue-700'>{link}</Link>)
                    }
                </ul>
                {/*Menu button */}
                <div>
                    <button><FaBarsStaggered className='w-5 hover:text-blue-700'></FaBarsStaggered></button>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Navbar