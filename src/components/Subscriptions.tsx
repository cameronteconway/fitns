import data from '../../data/subscriptions.json';

import SubscriptionTile from './SubscriptionTile';

type Subscription = {
    id: number;
    name: string;
    price: number | string;
    includes: string[];
    summary: string;
};

const Subscriptions = () => {
    const subscriptionTiles: JSX.Element | JSX.Element[] =
        data.subscriptions.map((sub: Subscription) => (
            <SubscriptionTile key={sub.id} data={sub} />
        ));

    return (
        <section>
            <span className='block text-center py-12 dark:text-white text-6xl font-medium'>
                Find a plan that suits you.
            </span>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {subscriptionTiles}
            </div>
        </section>
    );
};

export default Subscriptions;
