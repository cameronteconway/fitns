import { WorkoutsType } from '../context/WorkoutsProvider';

type PropsType = {
    workout: WorkoutsType;
};

const PopularWorkout = ({ workout }: PropsType) => {
    const renderIncludes = workout.includes.map(
        (workout: string, index: number) => {
            const test = workout.split(' - ')[0];
            return (
                <li className='mb-1 flex items-center space-x-1' key={index}>
                    <i className='bi bi-check flex-shrink-0 text-xl text-gray-800 dark:text-white'></i>
                    <span className='text-gray-900 dark:text-white'>
                        {test}
                    </span>
                </li>
            );
        }
    );

    return (
        <div className='relative flex flex-col rounded-lg border-2 border-gray-200 px-6 py-7 shadow-[rgba(0,_0,_0,_0.25)_0px_0px_30px_-12px] dark:border-white dark:bg-gray-800 dark:shadow-[rgba(255,_250,_250,_0.25)_0px_0px_30px_-12px]'>
            <span className='mb-2 block text-2xl font-bold dark:text-white'>
                {workout.name}
            </span>
            <p className='mb-4 font-light dark:text-gray-400'>
                {workout.summary}
            </p>

            <ul>{renderIncludes}</ul>
        </div>
    );
};

export default PopularWorkout;
