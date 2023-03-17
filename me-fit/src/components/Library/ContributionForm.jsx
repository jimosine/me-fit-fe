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


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* Select field for contribution type */}
            <select {...register("Type", { required: true })}>
                {/* <select {...register("Type", { required: true })} onChange={handleTypeChange}> */}
                <option value="">What do you want to add?</option>
                <option value="Program">Program</option>
                <option value="Workout">Workout</option>
                <option value="Exercise">Exercise</option>
            </select>


            {type === 'Program' &&

                <>
                    <div>
                        <input type="text" placeholder="Name" {...register("Name", { required: true, maxLength: 80 })} />

                        <select {...register("Program Type", { required: true })}>
                            <option value="Cardio">Cardio </option>
                            <option value="Strength"> Strength </option>
                            <option value="Yoga">Yoga </option>
                        </select>

                        <Controller
                            control={control}
                            name="workouts"
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
                    </div>
                </>
            }

            {
                type === 'Workout' &&
                <>
                    <div>
                        <input type="text" placeholder="Name" {...register("Name", { required: true, maxLength: 80 })} />

                        <select {...register("Workout Type", { required: true })}>
                            <option value="Upper Body">Upper Body </option>
                            <option value="Lower Body"> Lower Body </option>
                            <option value="HIIT">HIIT </option>
                        </select>

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
                                    isSearchable={true}
                                />
                            )}
                        />
                    </div>
                </>
            }


            {
                type === 'Exercise' &&
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



            <div>
                <Button variant="secondary" >
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