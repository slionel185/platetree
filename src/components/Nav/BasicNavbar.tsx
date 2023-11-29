import Link from 'next/link'
import { useState } from 'react'
import { BarChart, SunMoon } from 'lucide-react'

import { Button, buttonVariants } from '@/components/ui/button'
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'



export default function NonAuthNavbar() {
    const [open, setOpen] = useState(false)

    return (
        <>
            <div className='flex md:hidden items-center'>
                <Sheet open={open} onOpenChange={setOpen}>
                    <SheetTrigger asChild>
                        <Button variant={'ghost'} size={'icon'}>
                            <BarChart className='h-5 w-5 -rotate-90' />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side={'bottom'}>
                        <SheetHeader>
                            <SheetTitle>
                                <span className='text-2xl scroll-m-20 font-extrabold tracking-tight'>Platetree</span>
                            </SheetTitle>
                        </SheetHeader>
                        <div className='flex flex-col items-center justify-center gap-4 mt-4'>
                            <Link href={'/pricing'} onClick={() => setOpen(false)} className={buttonVariants({
                                size: 'lg',
                                variant: 'outline',
                                className: 'w-full'
                            })}>
                                Pricing
                            </Link>

                            <Link href={'/contact'} onClick={() => setOpen(false)} className={buttonVariants({
                                size: 'lg',
                                variant: 'outline',
                                className: 'w-full'
                            })}>
                                Contact
                            </Link>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>

            <div className='hidden md:flex items-center gap-2'>
                <Link href={'/pricing'} onClick={() => setOpen(false)} className={buttonVariants({
                    variant: 'ghost'
                })}>
                    Pricing
                </Link>
                <Link href={'/contact'} onClick={() => setOpen(false)} className={buttonVariants({
                    variant: 'ghost'
                })}>
                    Contact
                </Link>

                <Button variant={'ghost'} size={'icon'}>
                    <SunMoon className='h-5 w-5' />
                </Button>
            </div>
        </>
    )
}