import { useForm } from 'react-hook-form';

const GoalForm = ({ onSubmit, onCancel }) => {
    // Initialize form using useForm hook
    const { register, handleSubmit, formState: { errors }, watch } = useForm();

    // Log form errors to console
    console.log(errors);

    // Get the value of the 'Type' input
    const type = watch('Type');

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* Input field for goal name */}
            <input type="text" placeholder="Name" {...register("Name", { required: true, maxLength: 80 })} />

            {/* Input field for goal end date */}
            <input type="date" placeholder="Enddate" {...register("Enddate", { required: true, maxLength: 100 })} />

            {/* Select field for goal type */}
            <select {...register("Type", { required: true })}>
                <option value="">Select a goal</option>
                <option value="Program">Program</option>
                <option value="Workout">Workout</option>
            </select>

            {/* Conditional rendering for Program options */}
            {type === 'Program' &&
                <>
                    {/* Select field for program ID */}
                    <select {...register("ProgramID", { required: true, validate: v => v.length })} multiple>
                        {/* <option value="">Select a program</option> */}
                        <option value="1">Program 1</option>
                        <option value="2">Program 2</option>
                        <option value="3">Program 3</option>
                    </select>

                    {/* Display error message for ProgramID field */}
                    {errors.ProgramID && <p>{errors.ProgramID.message}</p>}
                </>
            }

            {/* Conditional rendering for Workout options */}
            {type === 'Workout' &&
                <>
                    {/* Select field for workout ID */}
                    <select {...register("WorkoutID", { required: true, validate: v => v.length })} multiple>
                        {/* <option value="">Select a workout</option> */}
                        <option value="1">Workout 1</option>
                        <option value="2">Workout 2</option>
                        <option value="3">Workout 3</option>
                    </select>

                    {/* Display error message for WorkoutID field */}
                    {errors.WorkoutID && <p>{errors.WorkoutID.message}</p>}
                </>
            }

            {/* Submit button */}
            <button type="submit">Submit</button>

            {/* Cancel button */}
            <button type="button" onClick={onCancel}>Cancel</button>
        </form>
    );
};

export default GoalForm;