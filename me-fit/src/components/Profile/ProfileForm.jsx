import { useForm } from 'react-hook-form';


const ProfileForm = ({ onSubmit, onCancel }) => {
    // Initialize form using useForm hook
    const { register, handleSubmit } = useForm();




    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* Input field for goal name */}
            <input type="text" placeholder="First Name" {...register("first_name", { required: true, maxLength: 80 })} />
            <input type="text" placeholder="Last Name" {...register("last_name", { required: true, maxLength: 80 })} />


            <div>
                {/* Submit button */}
                <button type="submit">Submit</button>

                {/* Cancel button */}
                <button type="button" onClick={onCancel}>Cancel</button></div>
        </form>
    );
};

export default ProfileForm;