import { useForm, Controller } from 'react-hook-form';
import Select from 'react-select';
import { storageRead } from '../../utils/storage';
import { Button } from 'react-bootstrap';

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

    const typeOptions = [
        { value: "Program", label: "Program" },
        { value: "Workout", label: "Workout" }
    ]


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
            <input
                className="contribution-form-field-name"
                type="text"
                placeholder="Name..."
                {...register("name", { required: true, maxLength: 80 })}
            />

            {/* Input field for goal end date */}
            <input type="date" className="contribution-form-field-name" placeholder="Enddate" {...register("enddate", { required: true, maxLength: 100 })} />

            <Controller
                control={control}
                name="type"
                render={({
                    field: { onChange, onBlur, value, name, ref },
                }) => (
                    <Select className="contribution-form-field"
                        options={typeOptions}
                        onChange={onChange}
                        onBlur={onBlur}
                        getOptionValue={(option) => option.value}
                        value={value}
                        name={name}
                        ref={ref}
                        placeholder={"Goal type..."}
                    />
                )}
            />

            {/* Conditional rendering for Program options */}
            {type !== undefined && type.value === 'Program' &&
                <>
                    <Controller
                        control={control}
                        name="programsId"
                        render={({
                            field: { onChange, onBlur, value, name, ref },
                        }) => (
                            <Select className="contribution-form-field"
                                options={programOptions}
                                onChange={onChange}
                                isMulti={true}
                                onBlur={onBlur}
                                value={value}
                                name={name}
                                ref={ref}
                                placeholder={"Select one or more programs..."}
                            />
                        )}
                    />

                    {/* Display error message for ProgramID field */}
                    {/* {errors.ProgramID && <p>{errors.ProgramID.message}</p>} */}
                </>
            }

            {/* Conditional rendering for Workout options */}
            {type !== undefined && type.value === 'Workout' &&
                <>
                    {/* Select field for workout ID */}
                    <Controller
                        control={control}
                        name="workoutsId"
                        render={({
                            field: { onChange, onBlur, value, name, ref },
                        }) => (
                            <Select className="contribution-form-field"
                                options={workoutOptions}
                                onChange={onChange}
                                isMulti={true}
                                onBlur={onBlur}
                                value={value}
                                name={name}
                                ref={ref}
                                placeholder={"Select one or more workouts..."}
                            />
                        )}
                    />

                    {/* Display error message for WorkoutID field */}
                    {/* {errors.WorkoutID && <p>{errors.WorkoutID.message}</p>} */}
                </>
            }

            {/* Submit button */}
            {/* Cancel button */}

            <div className='contribution-form-buttons'>
                <Button
                    className="buttonEdit"
                    variant="primary"
                    type="submit"
                >
                    Submit
                </Button>
                <Button
                    className="buttonRemove"
                    variant="danger"
                    onClick={onCancel}
                >
                    Cancel   </Button>
            </div>
        </form >
    );
};

export default GoalForm;