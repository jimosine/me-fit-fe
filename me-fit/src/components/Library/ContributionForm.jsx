import { useForm, Controller } from 'react-hook-form';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Select from 'react-select';
import { storageRead } from '../../utils/storage';


const ContributionForm = ({ onSubmit }) => {
    // Initialize form using useForm hook
    // const { register, handleSubmit, watch } = useForm();

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
                    <input type="text" placeholder="Name" {...register("Name", { required: true, maxLength: 80 })} />

                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                    >
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <select {...register("Muscle Group", { required: true })}>
                        <option value="Calves">Calves </option>
                        <option value="Biceps"> Biceps </option>
                        <option value="Abs">Abs </option>
                    </select>
                    <div>
                        <input type="url" placeholder="Video link" {...register("Video link", { maxLength: 100 })} />
                    </div>
                    <input type="number" placeholder="Repetitions" {...register("Repetitions", { required: true })} />

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