import type { DefaultWithClasses } from '@/types/LayoutProps'

import { cn } from '@/lib/utils'

export default function MaxWidthContainer({ children, className}: DefaultWithClasses) {
    return (
        <div className={cn('mx-auto w-full max-w-screen-2xl px-2.5 md:px-20', className)}>
            {children}
        </div>
    )
}