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
    console.log(data);

    const listItems = data.includes.map((text, index) => {
        return (
            <li className='flex items-center space-x-3' key={index}>
                <i className='flex-shrink-0 text-gray-800 dark:text-white bi bi-check-circle-fill'></i>
                <span>{text}</span>
            </li>
        );
    });

    const buttonClass = `inline-flex relative px-3 py-2 font-medium mt-auto border-2 rounded-md dark:border-white ${
        data.popular
            ? 'dark:text-gray-800 dark:bg-white dark:hover:bg-transparent dark:hover:text-white dark:shadow-[0px_0px_5px_0px_#FFF]'
            : 'dark:text-white dark:bg-transparent dark:hover:bg-white dark:hover:text-gray-800'
    }`;

    return (
        <div className='border-2 relative rounded-lg dark:border-gray-300 py-6 px-6 flex flex-col'>
            {data.popular ? (
                <span className='absolute -top-5 dark:text-gray-800 font-medium text-sm dark:bg-white px-3 py-2 rounded-full ml-auto mr-auto left-0 right-0 text-center max-w-max'>
                    Most Popular
                </span>
            ) : null}
            <span className='block dark:text-white font-medium text-2xl font-logo'>
                {data.name}
            </span>
            {typeof data.price === 'string' ? (
                <span className='block dark:text-white font-medium text-4xl mb-4'>
                    {data.price}
                </span>
            ) : (
                <span className='block dark:text-white font-medium text-4xl mb-4'>
                    {`£${data.price}`}{' '}
                    <p className='dark:text-gray-400 text-xl font-light inline-block'>
                        per month
                    </p>
                </span>
            )}
            <p className='dark:text-gray-400 mb-6 font-light'>{data.summary}</p>

            <ul className='space-y-4 text-left mb-8 text-gray-500 dark:text-gray-400'>
                {listItems}
            </ul>

            <button className={buttonClass}>
                {data.popular ? 'Start a free trial' : 'Explore'}
                <i className='right-3 bottom-1.5 text-xl absolute bi bi-arrow-right'></i>
            </button>
        </div>
    );
};

export default SubscriptionTile;
