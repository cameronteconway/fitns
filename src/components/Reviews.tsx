import data from '../../data/reviews.json';

type ReviewType = {
    id: number;
    name: string;
    email: string;
    summary: string;
    review: string;
    image: string;
};

const Reviews = () => {
    const review: JSX.Element | JSX.Element[] = data.reviews.map(
        (review: ReviewType) => (
            <>
                <blockquote className='max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400'>
                    <h3 className='text-lg text-gray-900 dark:text-white'>
                        {review.summary}
                    </h3>
                    <p className='dark:text-gray-400 my-3 font-light'>
                        {review.review}
                    </p>
                </blockquote>
                <figcaption className='flex items-center justify-center space-x-3'>
                    <img
                        className='rounded-full w-9 h-9'
                        src={review.image}
                        alt='profile picture'
                    />
                    <div className='space-y-0.5 dark:text-white text-left'>
                        <div>{review.name}</div>
                    </div>
                </figcaption>
            </>
        )
    );

    return (
        <section className='py-10'>
            <div className='grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2'>
                <figure className='flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700'>
                    {review[0]}
                </figure>
                <figure className='flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-tr-lg dark:bg-gray-800 dark:border-gray-700'>
                    {review[1]}
                </figure>
                <figure className='flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-bl-lg md:border-b-0 md:border-r dark:bg-gray-800 dark:border-gray-700'>
                    {review[2]}
                </figure>
                <figure className='flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-br-lg dark:bg-gray-800 dark:border-gray-700'>
                    {review[3]}
                </figure>
            </div>
        </section>
    );
};

export default Reviews;
