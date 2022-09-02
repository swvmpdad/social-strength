const { Exercise } = require('../models');

const exerciseData = [
    {
        exercise_name: 'Squat',
        muscle_group: 'Legs',
        description: 'Lowering of the hips while bending at the knees and returning to a standing positon. Can be done with a barbell, dumbells, kettlebells, or no extra weight',
        video: 'https://youtu.be/mM71Po7sZAk'
    },
    {
        exercise_name: 'Bench Press',
        muscle_group: 'Chest',
        description: 'Lie face up on a flat bench, and grip a barbell with the hands slightly wider than shoulder-width. Press the feet into the ground and the hips into the bench while lifting the bar off the rack. Slowly lower the bar to the chest by allowing the elbows to bend out to the side. Stop when the elbows are just below the bench, and press feet into the floor to press the weight straight up to return to the starting position.',
        video: 'https://youtu.be/1bTSTAch164'
    },
    {
        exercise_name: 'Leg Press',
        muscle_group: 'Legs',
        description: 'Placing your feet on the platform, press the weight away from you by extending your legs',
        video: ''
    },
    {
        exercise_name: 'Deadlift',
        muscle_group: 'Back/Legs',
        description: 'Stand behind the barbell with the feet about shoulder-width apart, the toes slightly rotated out, and the shins almost touching the bar. Sit back into the hips slightly while keeping a straight back so that the chest is lifted upward, and bend forward to grip the bar in an over-under grip with one palm facing up and the other facing down. Squeeze the bar in the hands and sink back onto the hips while pressing the feet into the floor. Keeping the back flat, push the hips forward to move to standing position. Finish standing in a tall position with the shoulders pulled back and the legs straight. Return to the starting position by shifting the weight back into the hips and keep the back straight while allowing the knees to bend. When this movement is done properly, the glutes and the back of the thighs should feel the work, NOT the back.',
        video: 'https://youtu.be/OHYNDQsMvdM'
    },
    {
        exercise_name: 'Treadmill',
        muscle_group: 'Cardio/Legs',
        description: 'Set your time and speed, start the machine, and run on the moving treadmill belt.'
    },
    {
        exercise_name: 'Elliptical Machine',
        muscle_group: 'Cardio/Legs',
        description: 'Enter any information prompted by the machine, grasp the handles, and move your body in a running-like motion.'
    },
    {
        exercise_name: 'Swimming',
        muscle_group: 'Cardio/Full Body',
        description: 'Swim laps in a pool using whatever stroke is the most comfortable.'
    },
    {
        exercise_name: 'Push-ups',
        muscle_group: 'Chest/Arms',
        description: 'Position your hands shoulder width apart with fingers facing forward. Fully extend your body without allowing any part to bend. Slowly lower your body by bending your elbows, keeping them slightly flared until your chest touches the floor. Press your body back up straigtening your elbows. Repeat.',
        video: 'https://youtu.be/OZG566zsZ0A'
    },
    {
        exercise_name: 'Pull-ups',
        muscle_group: 'Back/Arms',
        description: `Stand under the chin-up bar and reach your arms overhead with your palms facing away from you.  Reach,  jump or lift your body off the floor to grasp the handles firmly with a full grip position (thumbs wrapped around the handles).  Gently cross one leg over the other to stabilize your lower extremity and then stiffen 'brace' your abdominal muscles to stabilize your spine.  Align your head vertically with your trunk under your hands and assume a neutral wrist position (i.e., wrist aligned in a straight line with your forearms).  Depress and retract your scapulae (pull shoulders back and down) and attempt to hold this position throughout the exercise. Slowly exhale and slowly pull your body upwards by flexing (bending) your elbows and pulling your elboes down to your sides  Attempt to pull in a motion that drives your elbows directly down towards the floor, while keeping them positioned in the 3 and 9 o'clock position (aligned with the sides of the trunk).  Attempt to keep your body aligned vertically to the floor and avoid swinging your body during your upward pull. Continue pulling upward until your chin is level with the bar or your hands.  Pause momentarily then slowly return to your starting position by allowing your arms to extend back overhead until your arms are fully extended.  Continue to maintain your shoulder and wrist position, and the vertical alignment of your trunk.  Repeat the movement.`,
        video: 'https://youtu.be/eGo4IYlbE5g'
    },
    {
        exercise_name: 'Sit-ups',
        muscle_group: 'Core',
        description: 'Lie on your back, bend knees 45 degrees, ask a friend to hold your feet or find a structure to tuck them under, using your core bend your body raising your shoulders to sit up almost straight, keep your core tight as you slowly lower your shoulders back to the floor.',
        video: 'https://youtu.be/jDwoBqPH0jk'
    },
    {
        exercise_name: 'Rowing Machine',
        muscle_group: 'Cardio/Full Body',
        description: 'With your back straight, core engaged, and balls of your feet firmly in the straps, push back first with the lower body, then use your upper back to pull hands toward your chest. Release your arms toward the base and bend your knees to glide back to starting position. Think: legs, arms, arms, legs.',
        video: 'https://youtu.be/H0r_ZPXJLtg'
    },
    {
        exercise_name: 'Chin-ups',
        muscle_group: 'Back/Arms',
        description: ` Stand under the chin-up bar and reach your arms overhead with your palms facing you.  Reach, jump or lift your body off the floor to grasp the handles firmly with a full grip position (thumbs wrapped around the handles).  Gently cross one leg over the other to stabilize your lower extremity and then stiffen ("brace") your abdominal muscles to stabilize your spine.  Align your head vertically with your trunk under your hands and assume a neutral wrist position (i.e., wrist aligned in a straight line with your forearms).  Depress and retract your scapulae (pull shoulders back and down) and attempt to hold this position throughout the exercise. Slowly exhale and slowly pull your body upwards by flexing (bending) your elbows and pulling your arms down to your sides  Attempt to pull in a motion that drives your elbows directly down towards the floor, keeping your elbows in front of your body.  Attempt to keep your body aligned vertically to the floor and avoid swinging your body during your upward pull. Continue pulling upward until your chin is level with the bar or your hands.  Pause momentarily then slowly return to your starting position by allowing your arms to extend back overhead until your arms are fully extended.  Continue to maintain your shoulder and wrist position, and the vertical alignment of your trunk.  Repeat the movement.`,
        video: 'https://youtu.be/brhRXlOhsAM'
    },
    {
        exercise_name: 'Bent Over Rows',
        muscle_group: 'Back',
        description: 'Grip a barbell with palms down so that the wrists, elbows, and shoulders are in a straight line. Lift the bar from the rack, bend forward at the hips, and keep the back straight with a slight bend in the knees. Lower the bar towards the floor until the elbows are completely straight, and keep the back flat as the bar is pulled towards the belly button. Then slowly lower the bar to the starting position and repeat.',
        video: 'https://youtu.be/FWJR5Ve8bnQ'
    },
    {
        exercise_name: 'Bicep Curls',
        muscle_group: 'Arms',
        description: 'Hold the barbell (or dumbbells) with both hands facing up so the wrists, elbows, and shoulders are in a straight line about shoulder-width apart. Lift the barbell (or dumbbells) toward the shoulders while bending the elbows and keeping them next to the middle of the body. Slowly lower the weight to return to the starting position. Keep chest still, using just the arms for the movement.',
        video: 'https://youtu.be/kwG2ipFRgfo'
    },
    {
        exercise_name: 'Romanian Deadlifts',
        muscle_group: 'Legs',
        description: 'Holding a barbell with both hands so that it rests on the front of the thighs, keep a slight bend in both knees and a straight back. Push the hips back while lowering the weight towards the floor until feeling some tension along the back of the legs. To return to standing, push the heels into the floor and pull the knees backwards, keeping the bar very close to the body while standing.',
        video: 'https://youtu.be/xh8UZrzmNB0'
    },
    {
        exercise_name: 'Stair Climber',
        muscle_group: 'Cardio/Legs',
        description: 'Use the stair climber machine to simulate walking up steps, be sure to use the handrails for stability.',
        video: 'https://youtu.be/ST-5lD69XqU'
    }
];

const seedExercises = () => Exercise.bulkCreate(exerciseData);

module.exports = seedExercises;