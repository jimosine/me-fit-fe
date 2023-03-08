import { useForm } from 'react-hook-form';

const GoalForm = ({ onSubmit, onCancel }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    console.log(errors);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Name" {...register("Name", { required: true, maxLength: 80 })} />
            <input type="datetime-local" placeholder="Enddate" {...register("Enddate", { required: true, maxLength: 100 })} />
            <select {...register("Type", { required: true })}>
                <option value="Program">Program</option>
                <option value="Workout">Workout</option>
            </select>


            <button type="submit">Submit</button>
            <button type="button" onClick={onCancel}>Cancel</button>
        </form>
    );
};

export default GoalForm