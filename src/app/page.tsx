import MaxWidthContainer from '@/components/containers/MaxWidthCotainer'

export default function HomePage() {
    return (
        <>
            <MaxWidthContainer className='mb-12 mt-8 sm:mt-16 flex flex-col justify-center items-center text-center select-none'>
                <h1 className='max-w-4xl text-5xl font-bold md:text-6xl text-foreground lg:text-7xl'>
                    Platetree Client Management
                </h1>

                <p className='mt-5 max-w-prose text-muted-foreground sm:text-lg md:text-xl'>
                    The last software you will ever need for your Personal Training business
                </p>
            </MaxWidthContainer>
        </>
    )
}