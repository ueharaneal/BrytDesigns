import { SetStateAction, useState } from "react"
import { set, z } from "zod"
import Step1 from "./Step1"
import Step2 from "./Step2"
import Step3 from "./Step3"
import Step4 from "./Step4"
import ProgressBar from "./ProgressBar"
import axios from 'axios'
import { formJsonSchema } from "../api/register/schemas";


export const formSchema = formJsonSchema

 export type formSchemaType = z.infer<typeof formSchema>

export default function MultiStepForm() {
	//I would ussually use Zustand to manage the state of the form
	// I am just following the figma pixel size for the form container
	//I change my mind the im going to make the form a bit larger
	//I was also of thinking of using context api to manage the state of the form but realized that it would be overkill for this simple form
	//I ussually would react hook form/ works great with zod for form validation
	const buttonClass =
		"bg-pop hover:bg-popDark text-white font-bold py-2 px-4 rounded"
	const mutedClass = "bg-border text-white font-bold py-2 px-4 rounded"




	//creating the initial state of the form
	const initialFormState: formSchemaType = {
        firstName: "Neal",
        lastName: "uehara",
        email: "ueharaneal@gmail.com",
        username: "ueharaNeal",
        password: "",
        confirmPassword: "",
        address1: "12312sdlfkjgkldfg",
        address2: "",
        country: 'US',
        city: "newport beach",
        zipCode: "91746",
        company: "bryt",
        phoneNumber: "9496833881",
        wantsNotifications: "Yes",
        shareInformation: "Yes",
        notificationPreferences: "Email",
      };
    const formTitles: Record<number, string> = {
        0: "Account: 1 of 3",
        1: "Address: 2 of 3",
        2: "Preferences: 3 of 3",
    }

	const [formStep, setFormStep] = useState(0)
	const [formTitle, setFormTitle] = useState(formTitles[0])
    const [formData, setFormData] = useState<formSchemaType>(initialFormState)
    const [formErrors, setFormErrors] = useState({})
    const [formErrorsArray, setFormErrorsArray] = useState<any>()
    const [response, setResponse] = useState<any>("")
    
    //I know this is dirty but i am running out of time! 
    const updateFormData = (value: SetStateAction<formSchemaType>) => {
        if (typeof value === 'function') {
            setFormData(prevState => value(prevState));
        } else {
            setFormData(value);
        }
    };
	//creating the the object for the titles
	//honestly i should have put this with the step components
	//creating handle prev and next Step handler
	const handleNextStep = () => {
		setFormStep(prevStep => prevStep + 1)
		setFormTitle(formTitles[formStep + 1])
   
	}
	const handlePrevStep = () => {
		setFormStep(prevStep => prevStep - 1)
		setFormTitle(formTitles[formStep - 1])
	}

    const handleFormSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const validationResult = formJsonSchema.safeParse(formData);
        if (validationResult.success) {
            const validatedData = validationResult.data;
            console.log('Validated data:', validatedData);

            try {
                const response = await axios.post('http://localhost:3000/api/register', validatedData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                console.log('Form submitted successfully:', response.data.data);
                setResponse(response.data.data.message);
                setFormStep(prevStep => prevStep + 1);
            } catch (error) {
                console.error('Error submitting form:', error);
                console.log('Form errors:', formErrors);


            }
        } else {
            console.log('Validation Field error:', validationResult.error.formErrors);
            setFormErrors(validationResult.error.formErrors.fieldErrors);
            setFormErrorsArray(validationResult.error.formErrors.formErrors);
            console.log('Form errors:', formErrors);
            console.log('Form errors array:', formErrorsArray);
        }
    }
    
	return (
		<>
			<div className='w-[750px] bg-card shadow-lg rounded-lg flex flex-col justify-center items-center my-4 text-primary'>
				<div className='w-full text-center font-bold text-3xl rounded-lg py-4 text-primary'>
					{formTitle}
				</div>
				<div className='w-[730px] min-h-[550px] bg-white flex flex-col items-center justify-between'>
					<div className='my-7'>
						<ProgressBar currentStep={formStep} />{" "}
					</div>
					{formStep === 0 && <Step1 formData={formData} updateFormData={updateFormData} formErrors = {formErrors} />}
					{formStep === 1 && <Step2 formData={formData} updateFormData={updateFormData} formErrors = {formErrors}/>}
					{formStep === 2 && <Step3 formData={formData} updateFormData={updateFormData} formErrors = {formErrors} formErrorsArray={formErrorsArray}/>}
					{formStep === 3 && <Step4 responseMessage={response}/>}

					<div className='flex flex-row items-center  w-full justify-around my-7'>
						{formStep !== 0 ? (
							<button
								className={`${buttonClass} `}
								onClick={handlePrevStep}
							>
								Back
							</button>
						) : (
							<button
								className={`${mutedClass}`}
								disabled
								onClick={() => setFormStep(formStep - 1)}
							>
								Back
							</button>
						)}
						{formStep !== 3 && (
							<button
								className={`${buttonClass}`}
								onClick={
									formStep !== 2 ? handleNextStep : handleFormSubmit
								}
							>
								{formStep !== 2 ? "Next" : "Register"}
							</button>
						)}
					</div>
				</div>
			</div>
		</>
	)
}
