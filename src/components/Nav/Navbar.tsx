'use client'

import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/react'

import AuthNavbar from '@/components/Nav/AuthNavbar'
import BasicNavbar from '@/components/Nav/BasicNavbar'
import NavbarSkeleton from '@/components/Nav/NavbarSkeleton'
import MaxWidthContainer from '@/components/containers/MaxWidthCotainer'

export default function Navbar() {
    const { data, status } = useSession()

    return (
        <nav className='sticky h-20 inset-x-0 top-0 z-30 w-full border-b bg-background-75 backdrop-blur-lg transition-all'>
            <MaxWidthContainer className='px-6'>
                <div className='flex h-20 items-center justify-between'>
                    <Link href={'/'} className='z-40'>
                        <span className='text-2xl scroll-m-20 font-extrabold tracking-tight lg:text-4xl'>Platetree</span>
                    </Link>

                    {status === 'loading' && <NavbarSkeleton />}
                    {status === 'authenticated' && <AuthNavbar data={data} />}
                    {status === 'unauthenticated' && <BasicNavbar />}
                </div>
            </MaxWidthContainer>
        </nav>
    )
}