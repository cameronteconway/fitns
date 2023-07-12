import data from '../../data/subscriptions.json';

import SubscriptionTile from './SubscriptionTile';

type SubscriptionType = {
    id: number;
    name: string;
    price: number | string;
    popular: boolean;
    includes: string[];
    summary: string;
};

const Subscriptions = () => {
    const subscriptionTiles: JSX.Element | JSX.Element[] =
        data.subscriptions.map((sub: SubscriptionType) => (
            <SubscriptionTile key={sub.id} data={sub} />
        ));

    return (
        <section className='py-10'>
            <span className='block text-center pb-12 dark:text-white text-5xl md:text-6xl font-medium'>
                Find a plan that suits you.
            </span>
            <div className='grid grid-cols-1 md:grid-cols-3 md:gap-x-4 lg:gap-x-8 gap-y-8'>
                {subscriptionTiles}
            </div>
        </section>
    );
};

export default Subscriptions;
