import { createContext, ReactElement, useState } from 'react';

// Define the type of state that we use through the context
export type WorkoutsType = {
    id: number;
    name: string;
    price: number;
    includes: string[];
    summary: string;
    bodyPart: string[];
    category: string[];
    popular: boolean;
};

const initState: WorkoutsType[] = [
    {
        id: 1,
        name: 'Full Body 1',
        price: 15,
        includes: [
            'Bench press - 3 sets of 5-8 reps',
            'Lat pull-down - 3 sets of 10-15 reps',
            'Squats - 3 sets of 5-8 reps',
            'Leg curl - 3 sets of 10-15 reps',
            'Dumbbell shoulder press - 2 sets of 5-8 reps',
            'Incline curl - 2 sets of 10-15 reps',
            'Triceps press-down - 2 sets of 10-15 reps',
        ],
        summary: 'Effective way to target all muscle groups.',
        bodyPart: ['general', 'full-body'],
        category: ['barbell', 'dumbell', 'machine', 'weighted-body'],
        popular: true,
    },
    {
        id: 2,
        name: 'Full Body 2',
        price: 15,
        includes: [
            'Incline dumbbell press - 3 sets of 10-15 reps',
            'Seated cable row - 3 sets of 10-15 reps',
            'Leg press - 3 sets of 10-15 reps',
            'Romanian deadlift - 3 sets of 10-15 reps',
            'Lateral raise - 2 sets of 15-20 reps',
            'Dumbbell hammer curl - 2 sets of 10-15 reps',
            'Overhead triceps extension - 2 sets of 10-15 reps',
        ],
        summary: 'Effective way to target all muscle groups.',
        bodyPart: ['general', 'full-body'],
        category: ['barbell', 'dumbell', 'machine'],
        popular: false,
    },
    {
        id: 3,
        name: 'Full Body 3',
        price: 15,
        includes: [
            'Cable crossover - 3 sets of 15-20 reps',
            'Dumbbell row - 3 sets of 5-8 reps',
            'Leg extension - 3 sets of 15-20 reps',
            'Leg curl - 3 sets of 15-20 reps',
            'Bent over lateral raise - 2 sets of 10-15 reps',
            'Preacher curl - 2 sets of 10-15 reps',
            'Lying triceps extension - 2 sets of 10-15 reps',
        ],
        summary: 'Effective way to target all muscle groups.',
        bodyPart: ['general', 'full-body'],
        category: ['barbell', 'dumbell', 'machine'],
        popular: false,
    },
    {
        id: 3,
        name: 'Upper body 1',
        price: 10,
        includes: [
            'Dumbell chest press - 3 sets of 10-12 reps',
            'Dumbell shoulder press - 3 sets of 10-12 reps',
            'Lat pull-down - 3 sets of 10-15 reps',
            'Seated cable row - 3 sets of 10-15 reps',
            'Cable biceps curl - 3 sets of 10-12 reps',
            'Cable triceps push-down - 3 sets of 10-12 reps',
        ],
        summary: 'Effective way to target your upper body.',
        bodyPart: ['general', 'arms', 'back', 'chest', 'shoulders'],
        category: ['dumbell', 'machine'],
        popular: false,
    },
    {
        id: 4,
        name: 'Upper Body 2',
        price: 10,
        includes: [
            'Bench press - 3 sets of 5-8 reps',
            'Seated cable row - 3 sets of 10-15 reps',
            'Incline dumbbell press - 3 sets of 10-12 reps',
            'Lateral raise - 2 sets of 15-20 reps',
            'Skull crushers - 3 sets of 10-15 reps',
            'Dumbbell curls - 3 sets of 10-15 reps',
        ],
        summary: 'Effective way to target your upper body.',
        bodyPart: ['general', 'arms', 'back', 'chest', 'shoulders'],
        category: ['barbell', 'dumbell', 'machine'],
        popular: true,
    },
    {
        id: 5,
        name: 'Core 1',
        price: 5,
        includes: [
            'Plank - 3 sets for 30 seconds',
            'V-sit pose - 3 sets for 30 seconds',
            'Bridge - 3 sets of 10-15 reps',
            'Dead bug - 3 sets for 30 seconds',
        ],
        summary: 'Effective way to target all your core.',
        bodyPart: ['core'],
        category: ['weighted-body'],
        popular: false,
    },
    {
        id: 6,
        name: 'Core 2',
        price: 5,
        includes: [
            'Side plank - 3 sets for 30 seconds',
            'Bicycle crunch - 3 sets pf 10-15 reps',
            'Push-up lat row - 3 sets of 8-10 reps',
            'Half-kneeling wood chop - 3 sets of 8-12 reps',
        ],
        summary: 'Effective way to target all your core.',
        bodyPart: ['core'],
        category: ['dumbell', 'weighted-body'],
        popular: false,
    },
    {
        id: 7,
        name: 'Core 3',
        price: 5,
        includes: [
            'Forearm Plank - 3 sets for 30 seconds',
            'Russian twist - 3 sets of 10-15 reps',
            'Butterfly sit-up - 3 sets of 10-12 reps',
            'Jackknife - 3 sets for 30 seconds',
        ],
        summary: 'Effective way to target all your core.',
        bodyPart: ['core'],
        category: ['dumbell', 'weighted-body'],
        popular: false,
    },
    {
        id: 8,
        name: 'Legs 1',
        price: 5,
        includes: [
            'Front squat - 3 sets of 10-12 reps',
            'Leg press - 3 sets of 12-15 reps',
            'Landmine goblet squat - 3 sets of 10-12 reps',
            'Seated leg curl - 3 sets of 12-15 reps',
        ],
        summary: 'Effective way to target all your legs.',
        bodyPart: ['legs'],
        category: ['dumbell', 'machine', 'weighted-body'],
        popular: true,
    },
    {
        id: 9,
        name: 'Legs 2',
        price: 5,
        includes: [
            'Back squat - 3 sets of 10-12 reps',
            'Romanian deadlift - 3 sets of 10-15 reps',
            'Reverse lunge - 3 sets of 10-12 reps',
            'Standing calf raise  - 3 sets of 12-15 reps',
        ],
        summary: 'Effective way to target your legs.',
        bodyPart: ['legs'],
        category: ['barbell', 'weighted-body'],
        popular: false,
    },
    {
        id: 10,
        name: 'Legs 3',
        price: 5,
        includes: [
            'Bulgarian split squat - 3 sets of 10-12 reps',
            'Nordic hamstring curl - 3 sets of 12-15 reps',
            'Leg extensions - 3 sets of 10-12 reps',
            'Kettlebell swing - 3 sets of 12-15 reps',
        ],
        summary: 'Effective way to target your legs.',
        bodyPart: ['legs'],
        category: ['dumbell', 'machine'],
        popular: false,
    },
    {
        id: 11,
        name: 'Push 1',
        price: 5,
        includes: [
            'Bench press - 3 sets of 5-8 reps',
            'Incline dumbbell press - 3 sets of 10-12 reps',
            'Dumbbell chest fly - 3 sets of 8-10 reps',
            'Push-ups - 3 sets of 20-25',
        ],
        summary: 'Effective way to target your chest, shoulders and triceps.',
        bodyPart: ['arms', 'shoulders', 'chest'],
        category: ['barbell', 'dumbell', 'weighted-body'],
        popular: false,
    },
    {
        id: 12,
        name: 'Push 2',
        price: 5,
        includes: [
            'Overhead press - 3 sets of 5-8 reps',
            'Dumbbell lateral raise - 3 sets of 10-12 reps',
            'Barbell lying tricep extension - 3 sets of 8-10 reps',
            'Dumbbell bench press - 3 sets of 10-12 reps',
        ],
        summary: 'Effective way to target your chest, shoulders and triceps.',
        bodyPart: ['arms', 'shoulders', 'chest'],
        category: ['barbell', 'dumbell'],
        popular: false,
    },
    {
        id: 13,
        name: 'Pull 1',
        price: 5,
        includes: [
            'Pull-ups - 3 sets of 5-10 reps',
            'Barbell rows - 3 sets of 8-10 reps',
            'Pullovers - 3 sets of 8-10',
            'Face pulls - 3 sets of 10-12',
        ],
        summary: 'Effective way to target your back and biceps.',
        bodyPart: ['arms', 'back'],
        category: ['barbell', 'dumbell', 'machine', 'weighted-body'],
        popular: false,
    },
    {
        id: 14,
        name: 'Pull 2',
        price: 5,
        includes: [
            'Lat pull-down - 3 sets of 10-15 reps',
            'Dumbbell row - 3 sets of 5-8 reps',
            'Dumbbell shrugs - 3 sets of 12-15 reps',
            'Barbell bicep curls - 3 sets of 10-12 reps',
        ],
        summary: 'Effective way to target your back and biceps.',
        bodyPart: ['arms', 'back'],
        category: ['barbell', 'dumbell', 'machine'],
        popular: false,
    },
    {
        id: 15,
        name: 'Back 1',
        price: 2.5,
        includes: [
            'Romanian deadlift - 3 sets of 10-15 reps',
            'T-bar row - 3 sets of 10-12 reps',
            'Lat pull-down - 3 sets of 10-15 reps',
        ],
        summary: 'Effective way to target your back.',
        bodyPart: ['back'],
        category: ['barbell', 'machine'],
        popular: false,
    },
    {
        id: 16,
        name: 'Back 2',
        price: 2.5,
        includes: [
            'Bent over rows - 3 sets of 8-10 reps',
            'Seated rows - 3 sets of 10-12 reps',
            'Single-arm dumbbell rows - 3 sets of 8-10 reps',
        ],
        summary: 'Effective way to target your back.',
        bodyPart: ['back'],
        category: ['barbell', 'dumbell', 'machine'],
        popular: false,
    },
    {
        id: 17,
        name: 'Back 3',
        price: 2.5,
        includes: [
            'Pull-ups - 3 sets of 5-10 reps',
            'Single-arm smith machine rows - 3 sets of 10-12 reps',
            'Dumbbell pull-over - 3 sets of 8-12 reps',
        ],
        summary: 'Effective way to target your back.',
        bodyPart: ['back'],
        category: ['dumbell', 'machine', 'weighted-body'],
        popular: false,
    },
    {
        id: 18,
        name: 'Arms 1',
        price: 2.5,
        includes: [
            'Dumbbell hammer curl - 2 sets of 10-15 reps',
            'Pull-ups - 3 sets of 5-10 reps',
            'EZ-bar preacher curl - 3 sets of 8-10 reps',
        ],
        summary: 'Effective way to target your arms.',
        bodyPart: ['arms'],
        category: ['barbell', 'dumbell', 'weighted-body'],
        popular: false,
    },
    {
        id: 19,
        name: 'Arms 2',
        price: 2.5,
        includes: [
            'Dips - 2 sets of 8-12 reps',
            'Triceps press-down - 2 sets of 10-15 reps',
            'Wide-grip curls - 3 sets of 8-10 reps',
        ],
        summary: 'Effective way to target your arms.',
        bodyPart: ['arms'],
        category: ['barbell', 'dumbell', 'weighted-body'],
        popular: false,
    },
    {
        id: 20,
        name: 'Arms 3',
        price: 2.5,
        includes: [
            'Close-grip curl - 3 sets of 8-10 reps',
            'Incline curl - 2 sets of 10-15 reps',
            'Dumbbell pull-over - 3 sets of 8-12 reps',
        ],
        summary: 'Effective way to target your arms.',
        bodyPart: ['arms'],
        category: ['barbell', 'dumbell'],
        popular: false,
    },
    {
        id: 21,
        name: 'Chest 1',
        price: 2.5,
        includes: [
            'Barbell bench press - 3 sets of 5-8 reps',
            'Decline press - 3 sets of 8-10 reps',
            'Push-ups - 3 sets of 20-25',
        ],
        summary: 'Effective way to target your chest.',
        bodyPart: ['chest'],
        category: ['barbell', 'weighted-body'],
        popular: false,
    },
    {
        id: 22,
        name: 'Chest 2',
        price: 2.5,
        includes: [
            'Dumbbell bench press - 3 sets of 10-12 reps',
            'Dips - 2 sets of 8-12 reps',
            'Dumbbell chest fly - 3 sets of 8-10 reps',
        ],
        summary: 'Effective way to target your chest.',
        bodyPart: ['chest'],
        category: ['dumbell', 'weighted-body'],
        popular: false,
    },
    {
        id: 23,
        name: 'Chest 3',
        price: 2.5,
        includes: [
            'Incline dumbbell press - 3 sets of 10-12 reps',
            'Machine chest press - 3 sets of 12-15 reps',
            'Dumbbell pull-over - 3 sets of 8-12 reps',
        ],
        summary: 'Effective way to target your chest.',
        bodyPart: ['chest'],
        category: ['dumbell', 'machine'],
        popular: false,
    },
    {
        id: 24,
        name: 'Shoulders 1',
        price: 2.5,
        includes: [
            'Machine reverse fly - 2 sets of 12-15 reps',
            'Front delt raise - 3 sets of 12-15 reps',
            'Arnold press - 3 sets of 10-12',
        ],
        summary: 'Effective way to target your shoulders.',
        bodyPart: ['shoulders'],
        category: ['dumbell', 'machine'],
        popular: false,
    },
    {
        id: 25,
        name: 'Shoulders 2',
        price: 2.5,
        includes: [
            'Overhead shoulder press - 3 sets of 10-15 reps',
            'Lateral delt raise - 3 sets of 12-15 reps',
            'Upright row - 3 sets of 12-15 reps',
        ],
        summary: 'Effective way to target your shoulders.',
        bodyPart: ['shoulders'],
        category: ['barbell', 'dumbell'],
        popular: false,
    },
    {
        id: 26,
        name: 'Shoulders 3',
        price: 2.5,
        includes: [
            'Dumbell shoulder press - 3 sets of 10-12 reps',
            'Bent-over reverse fly - 3 sets of 12-15 reps',
            'Circle press - 3 reps of 12-15 reps',
        ],
        summary: 'Effective way to target your shoulders.',
        bodyPart: ['shoulders'],
        category: ['dumbell'],
        popular: false,
    },
];

export type UseWorkoutsContextType = { workouts: WorkoutsType[] };

const initContextState: UseWorkoutsContextType = { workouts: [] };
const WorkoutsContext = createContext<UseWorkoutsContextType>(initContextState);

type ChildrenType = { children?: ReactElement | ReactElement[] };

export const WorkoutsProvider = ({ children }: ChildrenType): ReactElement => {
    const [workouts, setWorkouts] = useState<WorkoutsType[]>(initState);

    return (
        <WorkoutsContext.Provider value={{ workouts }}>
            {children}
        </WorkoutsContext.Provider>
    );
};

export default WorkoutsContext;
