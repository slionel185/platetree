import type { Session } from 'next-auth'

export default function AuthNavbar({ data }: { data: Session }) {
    return (
        <div>
            <h1>Auth</h1>
        </div>
    )
}