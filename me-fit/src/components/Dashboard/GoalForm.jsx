import { useForm } from 'react-hook-form';

const GoalForm = ({ onSubmit, onCancel }) => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    console.log(errors);

    const type = watch('Type');

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Name" {...register("Name", { required: true, maxLength: 80 })} />
            <input type="date" placeholder="Enddate" {...register("Enddate", { required: true, maxLength: 100 })} />
            <select {...register("Type", { required: true })}>
                <option value="">Select a goal</option>
                <option value="Program">Program</option>
                <option value="Workout">Workout</option>
            </select>
            {type === 'Program' &&
                <>
                    <select {...register("ProgramID", { required: true, validate: v => v.length })} multiple>
                        {/* <option value="">Select a program</option> */}
                        <option value="1">Program 1</option>
                        <option value="2">Program 2</option>
                        <option value="3">Program 3</option>
                    </select>
                    {errors.ProgramID && <p>{errors.ProgramID.message}</p>}
                </>
            }
            {type === 'Workout' &&
                <>
                    <select {...register("WorkoutID", { required: true, validate: v => v.length })} multiple>
                        {/* <option value="">Select a workout</option> */}
                        <option value="1">Workout 1</option>
                        <option value="2">Workout 2</option>
                        <option value="3">Workout 3</option>
                    </select>
                    {errors.WorkoutID && <p>{errors.WorkoutID.message}</p>}
                </>
            }
            <button type="submit">Submit</button>
            <button type="button" onClick={onCancel}>Cancel</button>
        </form>
    );
};

export default GoalForm