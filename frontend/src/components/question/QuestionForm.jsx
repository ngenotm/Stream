import { useForm } from "react-hook-form";
import FormField from "../FormField";
import TextAreaField from "../TextAreaField";
import { toast } from "react-toastify";

const QuestionForm = () => {
    const { register, handleSubmit, formState: { errors }, setError, reset } = useForm();

    const onSubmit = async (data) => {
        const { subject, question } = data;

        console.log(data);

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/support/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                fullName: "test",
                email: "text@gmail.com",
                subject,
                message: question,
            }),
        });

        if (!response.ok) {
            if (response.status === 500) {
                toast.error("Server error! Please try again later.");
            } else {
                toast.error('Failed to send message! Please try again later.');
            }
            return;
        }

        reset();

        toast.success('Message sent successfully! Please be patient.');
    }

    return (
        <div className="">
            <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
                <FormField
                    label="Subject"
                    id="subject"
                    type="text"
                    placeholder="Enter the subject of your question"
                    register={register}
                    validation={{
                        required: {
                            value: true,
                            message: 'Subject is required'
                        },
                        minLength: {
                            value: 3,
                            message: 'Subject must be at least 3 characters'
                        }
                    }}
                    errors={errors}
                />
                <TextAreaField
                    label="Question"
                    id="question"
                    placeholder="Write your question here"
                    register={register}
                    validation={{
                        required: {
                            value: true,
                            message: 'Question is required'
                        },
                        minLength: {
                            value: 3,
                            message: 'Question must be at least 3 characters'
                        }
                    }}
                    errors={errors}
                />

                <button className="bg-c-red-45 text-white/90 px-8 py-2.5 rounded-md  font-medium">
                    Submit Question
                </button>

            </form>
        </div>
    );
}

export default QuestionForm;