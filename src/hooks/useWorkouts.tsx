import { useContext } from 'react';
import WorkoutsContext from '../context/WorkoutsProvider';
import { UseWorkoutsContextType } from '../context/WorkoutsProvider';

const useWorkout = (): UseWorkoutsContextType => {
    return useContext(WorkoutsContext);
};

export default useWorkout;
