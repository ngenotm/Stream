import { useForm } from "react-hook-form";
import FormField from "../FormField";
import TextAreaField from "../TextAreaField";

const QuestionForm = () => {
    const { register, handleSubmit, formState: { errors }, setError, reset } = useForm();

    return (
        <div className="">
            <form className="space-y-5">
                <FormField
                    label="Subject"
                    id="subject"
                    type="text"
                    placeholder="Enter the subject of your question"
                    register={register}
                    required={{
                        value: true,
                        message: 'Subject is required'
                    }}
                    minLength={{
                        value: 3,
                        message: 'Subject must be at least 3 characters'
                    }}
                    errors={errors}
                />
                <TextAreaField
                    label="Question"
                    id="question"
                    placeholder="Write your question here"
                    register={register}
                    required={{
                        value: true,
                        message: 'Question is required'
                    }}
                    minLength={{
                        value: 3,
                        message: 'Question must be at least 3 characters'
                    }}
                    errors={errors}
                />

                <button className="bg-c-red-45 text-white/90 w-full py-2.5 rounded-md font-medium">
                    Submit Question
                </button>

            </form>
        </div>
    );
}

export default QuestionForm;