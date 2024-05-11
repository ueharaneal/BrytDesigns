import React from "react"
import { formSchemaType } from "./MultiStepForm"

const countries = [
    "United States",
    "United Kingdom",
    "Canada",
    "Mexico",
    "Germany",
    "France",
    "Japan",
    "China",
    "India",
    "Russia",
    "South Korea",
    "Brazil",
    "Australia",
    "South Africa",
    "Spain",
    "Italy",
    "Turkey",
    "Indonesia",
    "Nigeria",
    "Netherlands",
    "Switzerland",
    "Sweden",
    "Norway",
    "Denmark",
    "Finland",
    "Belgium",
    "Poland",
    "Austria",
    "Portugal",
    "Greece",
    "Czech Republic",
    "Hungary",
    "Ireland",
    "New Zealand",
    "Singapore",
    "Hong Kong"
]
export default function Step2({
	formData,
	updateFormData,
    formErrors
}: {
	formData: formSchemaType
	updateFormData: React.Dispatch<React.SetStateAction<formSchemaType>>
    formErrors: any
}) {
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		updateFormData(prevFormData => ({
			...prevFormData,
				[name]: value
		}))
	}

	return (
		<form className='flex flex-col gap-y-6 w-5/6'>
			<div className='flex flex-row justify-around'>
				<div className='flex flex-col my-1'>
					<label htmlFor='address1'>Address</label>
					<input
						type='text'
						id='address1'
						name='address1'
						value={formData.address1}
						onChange={handleChange}
						className='border rounded-lg px-3 py-2 focus:outline-none focus:ring-black focus:border-black placeholder:sm:text-sm placeholder-gray-400'
						placeholder='Address'
					/>
                    {formErrors.address1 && (
                <div className="error">{formErrors.address1}</div>
            )}
				</div>
				<div className='flex flex-col my-1'>
					<label htmlFor='apartment'>Address 2</label>
					<input
						type='text'
						id='address2'
						name='address2'
						value={formData.address2}
						onChange={handleChange}
						className='border rounded-lg px-3 py-2 focus:outline-none focus:ring-black focus:border-black placeholder:sm:text-sm placeholder-gray-400'
						placeholder='Address 2'
					/>
				</div>
			</div>
			<div className='flex flex-row justify-between gap-x-3'>
				<div className='flex flex-col my-1'>
					<label htmlFor='country'>Country</label>
					<select
						className='border appearance-none rounded-lg px-4 py-2 focus:outline-none focus:ring-black focus:border-black placeholder:sm:text-sm placeholder-gray-400'
						value={formData.country}
						onChange={e =>
							updateFormData(prevFormData => ({
                                ...prevFormData,
                                country: "US", // Update only the selected value
                            }))
						}
						name='country'
					>
						<option value=''>Select Country</option>
						{countries.map(country => (
                             // Map over the countries array
                            <option key={country} value="US"> {country} </option> 
                        ))}
					</select>
                    {formErrors.country && (
                <div className="error">{formErrors.country}</div>
            )}
				</div>
				<div className='flex flex-col my-1'>
					<label htmlFor='city'>City</label>
					<input
						type='text'
						id='city'
						name='city'
						value={formData.city}
						onChange={handleChange}
						className='border rounded-lg px-3 py-2 focus:outline-none focus:ring-black focus:border-black placeholder:sm:text-sm placeholder-gray-400'
						placeholder='City'
					/>
                    {formErrors.city && (
                <div className="error">{formErrors.city}</div>
            )}
				</div>
				<div className='flex flex-col my-1'>
					<label htmlFor='zipCode'>Zipcode</label>
					<input
						type='text'
						id='zipCode'
						name='zipCode'
						value={formData.zipCode}
						onChange={handleChange}
						className='border rounded-lg px-2 py-2 focus:outline-none focus:ring-black focus:border-black placeholder:sm:text-sm placeholder-gray-400'
						placeholder='Zipcode'
					/>
                    {formErrors.zipCode && (
                <div className="error">{formErrors.zipCode}</div>
            )}
				</div>
			</div>
			<div className='flex flex-col my-1'>
				<label htmlFor='company'>Company</label>
				<input
					type='text'
					id='company'
					name='company'
					value={formData.company}
					onChange={handleChange}
					className='border rounded-lg px-3 py-2 focus:outline-none focus:ring-black focus:border-black placeholder:sm:text-sm placeholder-gray-400'
					placeholder='Company'
				/>
                {formErrors.company && (
                <div className="error">{formErrors.company}</div>
            )}
			</div>
			<div className=''>
				<div className='flex flex-col my-3'>
					<label htmlFor='phoneNumber'>Phone Number</label>
					<input
						type='text'
						id='phoneNumber'
						name='phoneNumber'
						value={formData.phoneNumber}
						onChange={handleChange}
						className='border rounded-lg px-3 py-2 focus:outline-none focus:ring-black focus:border-black placeholder:sm:text-sm placeholder-gray-400'
						placeholder='Phone Number'
					/>
                    {formErrors.phoneNumber && (
                <div className="error">{formErrors.phoneNumber}</div>
            )}
				</div>
			</div>
		</form>
	)
}
