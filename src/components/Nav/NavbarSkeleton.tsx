import Link from 'next/link'
import { BarChart, SunMoon } from 'lucide-react'

import { Button, buttonVariants } from '@/components/ui/button'

export default function NavbarSkeleton() {
    return (
        <>
            <div className='flex md:hidden items-center'>
                <Button disabled={true} variant={'ghost'} size={'icon'}>
                    <BarChart className='h-5 w-5 -rotate-90' />
                </Button>
            </div>

            <div className='hidden md:flex items-center gap-2'>
                <Button disabled={true} variant={'ghost'} className='animate-pulse bg-accent text-accent'>Pricing</Button>
                <Button disabled={true} variant={'ghost'} className='animate-pulse bg-accent text-accent'>Contact</Button>
                <Button disabled={true} variant={'ghost'} className='animate-pulse bg-accent text-accent'><SunMoon className='h-5 w-5' /></Button>
            </div>
        </>
    )
}