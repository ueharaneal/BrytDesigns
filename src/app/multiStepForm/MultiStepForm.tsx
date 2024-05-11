
import {useState } from "react";

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

    const [formStep, setFormStep] = useState(0)
    const [formTitle, setFormTitle] = useState("Account")
    return (
        <>
            <div className="w-[550px] h-[613px] bg-card shadow-lg rounded-lg flex flex-col justify-center items-center my-4">
                <div className="w-full text-center font-bold text-3xl rounded-lg py-4">{formTitle}</div>
            <div className="w-[530px] h-[613px] bg-white flex flex-col justify-between">
                {
                    formStep === 0 && <Step1 />
                }
                {
                    formStep === 1 && <Step2 />
                }
                {
                    formStep === 2 && <Step3 />
                }

                <div className="flex flex-row justify-around my-7">
                {formStep !== 0 ? <button  className= {`${buttonClass} `}  onClick={() => setFormStep(formStep - 1)}>Back</button> : <button className= {`${mutedClass}`} disabled onClick={() => setFormStep(formStep - 1)}>Back</button>}
                {formStep !== 2 ? <button className= {`${buttonClass} `} onClick={() => setFormStep(formStep + 1)}>Next</button> : <button className= {`${mutedClass} `} disabled onClick={() => setFormStep(formStep + 1)}>Next</button>}
                </div>
            </div> 

            </div>
        </>
    )
}