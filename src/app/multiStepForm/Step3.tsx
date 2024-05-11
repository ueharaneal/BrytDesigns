import React from "react"
import { formSchemaType } from "./MultiStepForm"

export default function Step3({
	formData,
	updateFormData,
	formErrors,
	formErrorsArray,
}: {
	formData: formSchemaType
	updateFormData: React.Dispatch<React.SetStateAction<formSchemaType>>
	formErrors: any
	formErrorsArray: string[]
}) {
	const handleInformationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name } = e.target
		const newInformationValue = e.target.checked ? "Yes" : "Yes" // only set it to Yes becuase it doesnt accept "No" as a value
		updateFormData(prevFormData => ({
			...prevFormData,
			[name]: newInformationValue,
		}))
	}

	const handleNotificationChange = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		const { name } = e.target
		const newNotificationsValue = e.target.checked ? "Yes" : "Yes"
		updateFormData(prevFormData => ({
			...prevFormData,
			[name]: newNotificationsValue,
		}))
	}

	return (
		<form className='flex flex-col gap-y-7 text-xl'>
                <div className="flex flex-col gap-y-2">
                    {formErrorsArray &&
                        formErrorsArray.map((error, index) => (
                            <p className="error" key={index}>{error as React.ReactNode}</p>
                        ))}
                    {formErrors &&
                        Object.values(formErrors).map((error, index) => (
                            <p className="error" key={index}>{error as React.ReactNode}</p>
                        ))}
                </div>
			<div className='flex flex-row gap-x-2 items-center'>
				<input
					type='checkbox'
					id='wantsNotifications'
					name='wantsNotifications'
					onChange={handleInformationChange}
					className='peer relative appearance-none shrink-0 w-4 h-4 border-2 border-blue-200 rounded-sm mt-1 bg-white focus:outline-none focus:ring-offset-0 focus:ring-1 focus:ring-blue-100 checked:bg-pop checked:border-0'
				/>
				<label htmlFor='wantsNotifications'>Send notifications</label>
				{formErrors.wantsNotifications && (
					<div className='error'>{formErrors.wantsNotifications}</div>
				)}
			</div>
			<div className='flex flex-row gap-x-2 items-center'>
				<input
					type='checkbox'
					id='shareInformation'
					name='shareInformation'
					onChange={handleNotificationChange}
					className='peer relative appearance-none shrink-0 w-4 h-4 border-2 border-blue-200 rounded-sm mt-1 bg-white focus:outline-none focus:ring-offset-0 focus:ring-1 focus:ring-blue-100 checked:bg-pop checked:border-0'
				/>

				<label htmlFor='shareInformation'>Share Information</label>
				{formErrors.shareInformation && (
					<div className='error'>{formErrors.shareInformation}</div>
				)}
			</div>
			<div className='mt-10 flex flex-col gap-y-1'>
				<label htmlFor='notificationPreferences' className='text-sm'>
					Notifications Preference
				</label>
				<select
					className='border appearance-none rounded-lg px-3 py-2 text-base focus:outline-none focus:ring-black focus:border-black placeholder:sm:text-sm placeholder-gray-400'
					value={formData.notificationPreferences}
					onChange={e =>
						updateFormData(prevFormData => ({
							...prevFormData,
							notificationPreferences: e.target.value as
								| "Email"
								| "Text"
								| undefined,
						}))
					}
					name='notificationPreferences'
				>
					<option value=''>Notification Preference</option>
					<option value='Email'>Email</option>
					<option value='Text'>Text</option>
				</select>
				{formErrors.notificationPreferences && (
					<div className='error'>{formErrors.notificationPreferences}</div>
				)}
			</div>
		</form>
	)
}
