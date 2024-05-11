import { useState } from "react"
import { z } from "zod"
import Step1 from "./Step1"
import Step2 from "./Step2"
import Step3 from "./Step3"
import Step4 from "./Step4"
import ProgressBar from "./ProgressBar"
import axios from 'axios'
export default function MultiStepForm() {
	//I would ussually use Zustand to manage the state of the form
	// I am just following the figma pixel size for the form container
	//I change my mind the im going to make the form a bit larger
	//I was also of thinking of using context api to manage the state of the form but realized that it would be overkill for this simple form
	//I ussually would react hook form/ works great with zod for form validation
	const buttonClass =
		"bg-pop hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
	const mutedClass = "bg-border text-white font-bold py-2 px-4 rounded"

    const accountSchema = z.object({
        firstName: z.string(),
        lastName: z.string(),
        userName: z.string(),
        email: z.string(),
        password: z.string(),
        confirmPassword: z.string(),
    });
    const addressSchema = z.object({
        street: z.string(),
        apartment: z.string(),
        country: z.string(),
        city: z.string(),
        state: z.string(),
        zip: z.string(),
        company: z.string(),
        phone: z.string(),
    });
    const preferencesSchema = z.object({
        notifications: z.string(),
        shareInformation: z.string(),
        notificationsPreference: z.string(),
    });
    const formSchema = z.object({
        account: accountSchema,
        address: addressSchema,
        preferences: preferencesSchema,
    });

        type formSchemaType = z.infer<typeof formSchema>

        
	//creating the initial state of the form
	const initialFormState: formSchemaType = {
		account: {
			firstName: "",
			lastName: "",
			userName: "",
			email: "",
			password: "",
			confirmPassword: "",
		},
		address: {
			street: "",
			apartment: "",
			country: "",
			city: "",
			state: "",
			zip: "",
			company: "",
			phone: "",
		},
		preferences: {
			notifications: "false",
			shareInformation: "false",
			notificationsPreference: "",
		},
	}

	const [formStep, setFormStep] = useState(0)
	const [formTitle, setFormTitle] = useState("Account")

	//creating the the object for the titles
	//honestly i should have put this with the step components
	const formTitles: Record<number, string> = {
		0: "Account",
		1: "Address",
		2: "Preferences",
	}
	//creating handle prev and next Step handler
	const handleNextStep = () => {
		setFormStep(prevStep => prevStep + 1)
		setFormTitle(formTitles[formStep])
	}
	const handlePrevStep = () => {
		setFormStep(prevStep => prevStep - 1)
		setFormTitle(formTitles[formStep])
	}

	const handleFormSubmit = () => {
		console.log("Form submitted")
		setFormStep(prevStep => prevStep + 1)
	}
	return (
		<>
			<div className='w-[750px] bg-card shadow-lg rounded-lg flex flex-col justify-center items-center my-4'>
				<div className='w-full text-center font-bold text-3xl rounded-lg py-4'>
					{formTitle}
				</div>
				<div className='w-[730px] min-h-[550px] bg-white flex flex-col items-center justify-between'>
					<div className='my-7'>
						<ProgressBar currentStep={formStep} />{" "}
					</div>
					{formStep === 0 && <Step1 />}
					{formStep === 1 && <Step2 />}
					{formStep === 2 && <Step3 />}
					{formStep === 3 && <Step4 />}

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
