import { useForm, Controller } from 'react-hook-form';
import Button from 'react-bootstrap/Button';
import Select from 'react-select';
import { storageRead } from '../../utils/storage';


const ContributionForm = ({ onSubmit }) => {
    // Initialize form using useForm hook

    const {
        handleSubmit,
        register,
        control,
        watch
    } = useForm({
        defaultValues: {}
    });

    // Get the value of the 'Type' input
    const type = watch('Type');


    //OPTIONS FOR THE MULTI SELECT FOR PROGRAM CONTRIBUTIONS
    const programOptions = storageRead('workouts').map(item => ({
        value: item.id,
        label: item.name,
    }))


    //OPTIONS FOR THE MULTI SELECT
    const workoutOptions = storageRead('exercises').map(item => ({
        value: item.id,
        label: item.name,
    }))

    const exerciseOptions = [
        { value: 'Calves', label: 'Calves' },
        { value: 'Biceps', label: 'Biceps' },
        { value: 'Abs', label: 'Abs' },
    ];

    const options = [
        { value: 'Program', label: 'Program' },
        { value: 'Workout', label: 'Workout' },
        { value: 'Exercise', label: 'Exercise' },
    ];

    const programTypeOptions = [
        { value: 'Cardio', label: 'Cardio' },
        { value: 'Strength', label: 'Strength' },
        { value: 'Yoga', label: 'Yoga' }
    ];
    const workoutTypeOptions = [
        { value: 'Upper Body', label: 'Upper Body' },
        { value: 'Lower Body', label: 'Lower Body' },
        { value: 'HIIT', label: 'HIIT' }
    ];




    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* Select field for contribution type */}

            <Controller
                control={control}
                name="Type"
                render={({
                    field: { onChange, onBlur, value, name, ref },
                }) => (
                    <Select className="contribution-form-field"
                        options={options}
                        onChange={onChange}
                        onBlur={onBlur}
                        value={value}
                        name={name}
                        ref={ref}
                    />
                )}
            />


            {type !== undefined && type.value === 'Program' &&

                <>
                    <div>
                        <input
                            className="contribution-form-field-name"
                            type="text"
                            placeholder="Name..."
                            {...register("Name", { required: true, maxLength: 80 })}
                        />

                        <input
                            className="contribution-form-field-name"
                            type="text"
                            placeholder="Image link..."
                            {...register("imageUrl")}
                        />


                        <textarea rows="2"
                            className="contribution-form-field-description"
                            type="text"
                            placeholder="Short description..."
                            {...register("description_short")}
                        />


                        <textarea rows="5"
                            className="contribution-form-field-description"
                            type="text"
                            placeholder="Long description..."
                            {...register("description_long")}
                        />


                        <Controller
                            control={control}
                            name="programType"
                            render={({
                                field: { onChange, onBlur, value, name, ref },
                            }) => (
                                <Select className="contribution-form-field"
                                    options={programTypeOptions}
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    value={value}
                                    name={name}
                                    ref={ref}
                                    placeholder="Program Type..."
                                />
                            )}
                        />

                        <Controller
                            control={control}
                            name="workouts"
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
                                    placeholder="Workouts..."
                                />
                            )}
                        />
                    </div>
                </>
            }

            {type !== undefined && type.value === 'Workout' &&
                <>
                    <div>
                        <input
                            className="contribution-form-field-name"
                            type="text"
                            placeholder="Name..."
                            {...register("Name", { required: true, maxLength: 80 })}
                        />

                        <input
                            className="contribution-form-field-name"
                            type="text"
                            placeholder="Image link..."
                            {...register("imageUrl")}
                        />


                        <textarea rows="2"
                            className="contribution-form-field-description"
                            type="text"
                            placeholder="Short description..."
                            {...register("description_short")}
                        />


                        <textarea rows="5"
                            className="contribution-form-field-description"
                            type="text"
                            placeholder="Long description..."
                            {...register("description_long")}
                        />

                        <Controller
                            control={control}
                            name="workoutType"
                            render={({
                                field: { onChange, onBlur, value, name, ref },
                            }) => (
                                <Select className="contribution-form-field"
                                    options={workoutTypeOptions}
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    value={value}
                                    name={name}
                                    ref={ref}
                                    placeholder="Workout Type..."
                                />
                            )}
                        />

                        <Controller
                            control={control}
                            name="exercises"
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
                                    isSearchable={true}
                                    placeholder="Exercises..."
                                />
                            )}
                        />
                    </div>
                </>
            }


            {type !== undefined && type.value === 'Exercise' &&
                <>
                    <input
                        className="contribution-form-field-name"
                        type="text"
                        placeholder="Name"
                        {...register("name", { required: true, maxLength: 80 })} />

                    <input
                        className="contribution-form-field-name"
                        type="text"
                        placeholder="Image link..."
                        {...register("imglink")}
                    />

                    <input type="url"
                        className="contribution-form-field-name"
                        placeholder="Video link"
                        {...register("vidlink", { maxLength: 100 })} />

                    <textarea rows="2"
                        className="contribution-form-field-description"
                        type="text"
                        placeholder="Short description..."
                        {...register("description")}
                    />

                    <input
                        className="contribution-form-field-name"
                        type="number"
                        placeholder="Repetitions"
                        {...register("repetitions")} />

                    <Controller
                        control={control}
                        name="musclegroup"
                        render={({
                            field: { onChange, onBlur, value, name, ref },
                        }) => (
                            <Select className="contribution-form-field"
                                options={exerciseOptions}
                                onChange={onChange}
                                onBlur={onBlur}
                                value={value}
                                name={name}
                                ref={ref}
                                placeholder="Muscle Group..."
                            />
                        )}
                    />



                </>
            }



            <div className='contribution-form-buttons'>
                <Button className='contribution-form-button' variant="secondary" >
                    Close
                </Button>
                <Button variant="primary" type="submit">
                    Save Changes
                </Button>
            </div>
        </form >
    );
};

export default ContributionForm;