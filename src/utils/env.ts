import { z } from 'zod'
import { createEnv } from '@t3-oss/env-nextjs'

export const env = createEnv({
    client: {
        NEXT_PUBLIC_QUERY_URL: z.string()
    },
    server: {
        DATABASE_URL: z.string().url(),

        NEXTAUTH_URL: z.string().url(),
        NEXTAUTH_SECRET: z.string().min(15)
    },
    experimental__runtimeEnv: {
        NEXT_PUBLIC_QUERY_URL: process.env.NEXT_PUBLIC_QUERY_URL
    }
})