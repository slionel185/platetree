'use client'

import '@/app/globals.css'

// import type { Metadata, Viewport } from 'next'
import type { DefaultLayoutProps } from '@/types/LayoutProps'

import { useState } from 'react'
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import { SessionProvider } from 'next-auth/react'
import { httpBatchLink } from '@trpc/react-query'
import { Analytics } from '@vercel/analytics/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { env } from '@/utils/env'
import { trpc } from '@/utils/trpc'
import Navbar from '@/components/Nav/Navbar'

const inter = Inter({ subsets: ['latin'] })

/*

TODO: Implement Metadata & Viewport

export const metadata: Metadata = {}
export const viewport: Viewport = {}

*/

export default function RootLayout({ children }: DefaultLayoutProps) {
    const [queryClient] = useState(() => new QueryClient())

    const [trpcClient] = useState(() => trpc.createClient({
        links: [
            httpBatchLink({
                url: `${env.NEXT_PUBLIC_QUERY_URL}/api/trpc`
            })
        ]
    }))

    return (
        <html lang='en'>
            <head />
            <body className={inter.className}>
                <SessionProvider>
                    <trpc.Provider client={trpcClient} queryClient={queryClient}>
                        <QueryClientProvider client={queryClient}>
                            <ThemeProvider attribute='class'>
                                <Navbar />
                                {children}
                                <Analytics />
                            </ThemeProvider>
                        </QueryClientProvider>
                    </trpc.Provider>
                </SessionProvider>
            </body>
        </html>
    )
}