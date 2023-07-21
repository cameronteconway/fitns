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
            <span className='block pb-12 text-center text-5xl font-medium dark:text-white md:text-6xl'>
                Find a plan that suits you.
            </span>
            <div className='grid grid-cols-1 gap-y-8 md:grid-cols-3 md:gap-x-4 lg:gap-x-8'>
                {subscriptionTiles}
            </div>
        </section>
    );
};

export default Subscriptions;
