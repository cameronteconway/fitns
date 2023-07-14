import Subscriptions from '../components/Subscriptions';
import Reviews from '../components/Reviews';
import PopularWorkouts from '../components/PopularWorkouts';

type PropsType = {
    setViewWorkouts: () => void;
};

const Home = ({ setViewWorkouts }: PropsType) => {
    return (
        <>
            <Subscriptions />
            <Reviews />
            <PopularWorkouts setViewWorkouts={setViewWorkouts} />
        </>
    );
};

export default Home;
