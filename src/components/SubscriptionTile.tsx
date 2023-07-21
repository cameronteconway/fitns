type Subscription = {
    id: number;
    name: string;
    price: number | string;
    popular: boolean;
    includes: string[];
    summary: string;
};

type Props = {
    data: Subscription;
};

const SubscriptionTile = ({ data }: Props) => {
    const listItems = data.includes.map((text, index) => {
        return (
            <li className='flex items-center space-x-3' key={index}>
                <i className='bi bi-check-circle-fill flex-shrink-0 text-gray-800 dark:text-white'></i>
                <span className='text-gray-900 dark:text-gray-300'>{text}</span>
            </li>
        );
    });

    const buttonClass = `inline-flex relative px-3 py-2 font-medium mt-auto border-2 rounded-md dark:border-white ${
        data.popular
            ? 'text-white bg-gray-900 border-gray-900 hover:bg-white hover:text-gray-900 dark:text-gray-800 dark:bg-white dark:hover:bg-transparent dark:hover:text-white dark:shadow-[0px_0px_5px_0px_#FFF]'
            : 'hover:bg-gray-900 hover:text-white hover:border-gray-900 dark:text-white dark:bg-transparent dark:hover:bg-white dark:hover:text-gray-800 dark:hover:border-white'
    }`;

    return (
        <div className='relative flex flex-col rounded-lg border-2 px-6 py-6 shadow-[rgba(0,_0,_0,_0.25)_0px_0px_50px_-12px] dark:border-gray-300 dark:shadow-[rgba(255,_250,_250,_0.25)_0px_0px_30px_-12px]'>
            {data.popular ? (
                <span className='absolute -top-5 left-0 right-0 ml-auto mr-auto max-w-max rounded-full border-2 border-gray-900 bg-gray-900 px-3 py-2 text-center text-sm font-medium text-white dark:border-white dark:bg-white dark:text-gray-800'>
                    Most Popular
                </span>
            ) : null}
            <span className='block font-logo text-2xl font-medium dark:text-white'>
                {data.name}
            </span>
            {typeof data.price === 'string' ? (
                <span className='mb-4 block text-4xl font-medium dark:text-white'>
                    {data.price}
                </span>
            ) : (
                <span className='mb-4 block text-4xl font-medium dark:text-white'>
                    {`£${data.price}`}{' '}
                    <p className='inline-block text-xl font-light dark:text-gray-400'>
                        per month
                    </p>
                </span>
            )}
            <p className='mb-6 font-light dark:text-gray-400'>{data.summary}</p>

            <ul className='mb-8 space-y-4 text-left text-gray-500 dark:text-gray-400'>
                {listItems}
            </ul>

            <button type='button' className={buttonClass}>
                {data.popular ? 'Start a free trial' : 'Explore'}
                <i className='bi bi-arrow-right absolute bottom-1.5 right-3 text-xl'></i>
            </button>
        </div>
    );
};

export default SubscriptionTile;
