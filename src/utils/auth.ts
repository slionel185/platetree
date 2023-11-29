import type { AuthOptions } from 'next-auth'

import CredentialsProvider from 'next-auth/providers/credentials'

export const auth: AuthOptions = {
    providers: [
        CredentialsProvider({
            id: 'Platetree',
            name: 'Platetree',
            credentials: {
                username: {
                    type: 'text'
                },
                password: {
                    type: 'password'
                }
            },
            async authorize(credentials, req) {
                let user

                if(user) return user
                return null
            }
        })
    ]
}