
import {useState } from "react";
import { z} from "zod";
import Step1 from "./Step1" 
import Step2 from "./Step2"
import Step3 from "./Step3"
 export default function MultiStepForm(){
    //I would ussually use Zustand to manage the state of the form 
    // I am just following the figma pixel size for the form container 
    //I change my mind the im going to make the form a bit larger 
    //I was also of thinking of using context api to manage the state of the form but realized that it would be overkill for this simple form
    //I ussually would react hook form/ works great with zod for form validation
    const buttonClass = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded";
    const mutedClass = "bg-border text-white font-bold py-2 px-4 rounded";

     type formSchema = { 
        account: {
            firstName: string,
            lastName: string,
            userName: string,
            email: string,
            password: string,
            confirmPassword: string
        },
        address: {
            street: string,
            apartment: string,
            country: string,
            city: string,
            state: string,
            zip: string
            company: string
            phone: string  
        },
        preferences: {
            theme: string,
            language: string
        }
      }    
      
      //creating the initial state of the form
        const initialFormState: formSchema = {
            account: {
                firstName: "",
                lastName: "",
                userName: "",
                email: "",
                password: "",
                confirmPassword: ""
            },
            address: {
                street: "",
                apartment: "",
                country: "",
                city: "",
                state: "",
                zip: "",
                company: "",
                phone: ""
            },
            preferences: {
                theme: "",
                language: ""
            }
        }

    const [formStep, setFormStep] = useState(0)
    const [formTitle, setFormTitle] = useState("Account")

    //creating the the object for the titles
    //honestly i should have put this with the step components 
    const formTitles : Record<number, string> = {
        0: "Account",
        1: "Address",
        2: "Preferences"
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
    }
    return (
        <>
            <div className="w-[650px] h-[713px] bg-card shadow-lg rounded-lg flex flex-col justify-center items-center my-4">
                <div className="w-full text-center font-bold text-3xl rounded-lg py-4">{formTitle}</div>
            <div className="w-[630px] h-[713px] bg-white flex flex-col items-center justify-between">
                <div className="text-center">This is the progress bar </div>
                {
                    formStep === 0 && <Step1 />
                }
                {
                    formStep === 1 && <Step2 />
                }
                {
                    formStep === 2 && <Step3 />
                }

                <div className="flex flex-row items-center  w-full justify-around my-7">
                {formStep !== 0 ? <button  className= {`${buttonClass} `}  onClick={handlePrevStep}>Back</button> : <button className= {`${mutedClass}`} disabled onClick={() => setFormStep(formStep - 1)}>Back</button>}
                {formStep !== 2 ? <button className= {`${buttonClass} `} onClick={handleNextStep}>Next</button> : <button className= {`${buttonClass} `}  onClick={handleFormSubmit}>Register</button>}
                </div>
            </div> 

            </div>
        </>
    )
}