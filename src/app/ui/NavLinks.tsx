'use client'

import {  } from '@heroicons/react/16/solid'
import { BookOpenIcon, HomeIcon, HeartIcon, StarIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
    { name: 'Home', href: '/NextDashboard', icon: HomeIcon },
    { name: 'Page 1', href: '', icon: MagnifyingGlassIcon },
    { name: 'Page 2', href: '', icon: BookOpenIcon },
    { name: 'Page 3', href: '', icon: HeartIcon },
    { name: 'Page 5', href: '', icon: StarIcon },
]

export default function NavLinks() {
    const pathname = usePathname()
    return (
        <>
            {links.map(link => {
                const LinkIcon = link.icon
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className='flex flex-col md:flex-row items-center justify-center gap-2 rounded-md bg-gray-700 p-3 text-sm font-medium hover:bg-red-100 hover:text-blue-950 md:justify-start md:p-2 md:px-3'>
                        <LinkIcon className='w-6' />
                        <p className='md:block'>{link.name}</p>
                    </Link>
                )
            })}
        </>
    )
}