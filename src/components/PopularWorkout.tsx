import { WorkoutsType } from '../context/WorkoutsProvider';

type PropsType = {
    workout: WorkoutsType;
};

const PopularWorkout = ({ workout }: PropsType) => {
    const renderIncludes = workout.includes.map(
        (workout: string, index: number) => {
            const test = workout.split(' - ')[0];
            return (
                <li className='flex items-center space-x-1 mb-1' key={index}>
                    <i className='flex-shrink-0 text-gray-800 dark:text-white bi bi-check text-xl'></i>
                    <span className='text-gray-900 dark:text-white'>
                        {test}
                    </span>
                </li>
            );
        }
    );

    return (
        <div className='border-2 dark:bg-gray-800 relative rounded-lg border-gray-200 dark:border-white py-7 px-6 flex flex-col shadow-[rgba(0,_0,_0,_0.25)_0px_0px_30px_-12px] dark:shadow-[rgba(255,_250,_250,_0.25)_0px_0px_40px_-12px]'>
            <span className='block dark:text-white font-bold text-2xl mb-2'>
                {workout.name}
            </span>
            <p className='dark:text-gray-400 font-light mb-4'>
                {workout.summary}
            </p>

            <ul>{renderIncludes}</ul>
        </div>
    );
};

export default PopularWorkout;
