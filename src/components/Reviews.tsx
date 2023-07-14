import data from '../../data/reviews.json';

type ReviewType = {
    id: number;
    name: string;
    email: string;
    summary: string;
    review: string;
    image: string;
    starRating: number;
};

const Reviews = () => {
    const renderStars = (stars: number) => {
        const ratedStarsArray = [...Array(stars).keys()];
        const starsArray = [];
        for (let i = 0; i < 5; i++) {
            if (ratedStarsArray.includes(i)) {
                starsArray.push(
                    <svg
                        key={i}
                        className='w-4 h-4 text-yellow-300 mr-1'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='currentColor'
                        viewBox='0 0 22 20'
                    >
                        <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                    </svg>
                );
            } else {
                starsArray.push(
                    <svg
                        key={i}
                        className='w-4 h-4 text-gray-300 mr-1 dark:text-gray-500'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='currentColor'
                        viewBox='0 0 22 20'
                    >
                        <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                    </svg>
                );
            }
        }

        return starsArray;
    };

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
                        className='rounded-full w-10 h-10 ring-2 ring-gray-300 dark:ring-gray-500 p-1'
                        src={review.image}
                        alt='profile picture'
                    />
                    <div className='space-y-0.5 dark:text-white text-left'>
                        <div>{review.name}</div>
                    </div>
                </figcaption>
                <div className='flex items-center mt-4'>
                    {renderStars(review.starRating)}
                </div>
            </>
        )
    );

    return (
        <section className='py-10'>
            <div className='grid border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:grid-cols-2'>
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
