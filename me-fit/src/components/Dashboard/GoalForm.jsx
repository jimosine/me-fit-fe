import { useForm, Controller } from 'react-hook-form';
import Select from 'react-select';
import { storageRead } from '../../utils/storage';


const GoalForm = ({ onSubmit, onCancel }) => {
    // Initialize form using useForm hook
    const {
        handleSubmit,
        register,
        control,
        watch
    } = useForm({
        defaultValues: {}
    });

    const programOptions = storageRead('programs').map(item => ({
        value: item.id,
        label: item.name,
    }))

    //OPTIONS FOR THE MULTI SELECT
    const workoutOptions = storageRead('workouts').map(item => ({
        value: item.id,
        label: item.name,
    }))

    // Log form errors to console
    //console.log(errors);

    // Get the value of the 'Type' input
    const type = watch('type');



    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* Input field for goal name */}
            <input type="text" placeholder="Name" {...register("name", { required: true, maxLength: 80 })} />

            {/* Input field for goal end date */}
            <input type="date" placeholder="Enddate" {...register("enddate", { required: true, maxLength: 100 })} />

            {/* Select field for goal type */}
            <select {...register("type", { required: true })}>
                <option value="">Select a goal</option>
                <option value="Program">Program</option>
                <option value="Workout">Workout</option>
            </select>

            {/* Conditional rendering for Program options */}
            {type === 'Program' &&
                <>
                    <Controller
                        control={control}
                        name="programs"
                        render={({
                            field: { onChange, onBlur, value, name, ref },
                        }) => (
                            <Select
                                options={programOptions}
                                onChange={onChange}
                                isMulti={true}
                                onBlur={onBlur}
                                value={value}
                                name={name}
                                ref={ref}
                            />
                        )}
                    />

                    {/* Display error message for ProgramID field */}
                    {/* {errors.ProgramID && <p>{errors.ProgramID.message}</p>} */}
                </>
            }

            {/* Conditional rendering for Workout options */}
            {type === 'Workout' &&
                <>
                    {/* Select field for workout ID */}
                    <Controller
                        control={control}
                        name="workouts"
                        render={({
                            field: { onChange, onBlur, value, name, ref },
                        }) => (
                            <Select
                                options={workoutOptions}
                                onChange={onChange}
                                isMulti={true}
                                onBlur={onBlur}
                                value={value}
                                name={name}
                                ref={ref}
                            />
                        )}
                    />

                    {/* Display error message for WorkoutID field */}
                    {/* {errors.WorkoutID && <p>{errors.WorkoutID.message}</p>} */}
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