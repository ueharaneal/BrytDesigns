import React from "react"
import { formSchemaType } from "./MultiStepForm"
export default function Step2({
	formData,
	updateFormData,
}: {
	formData: formSchemaType
	updateFormData: React.Dispatch<React.SetStateAction<formSchemaType>>
}) {
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		updateFormData(prevFormData => ({
			...prevFormData,
			address: {
				...prevFormData.address,
				[name]: value,
			},
		}))
	}

	return (
		<form className='flex flex-col gap-y-6 w-5/6'>
			<div className='flex flex-row justify-around'>
				<div className='flex flex-col my-1'>
					<label htmlFor='address'>Address</label>
					<input
						type='text'
						id='address'
						name='street'
						value={formData.address.street}
						onChange={handleChange}
						className='border rounded-lg px-3 py-2 focus:outline-none focus:ring-black focus:border-black placeholder:sm:text-sm placeholder-gray-400'
						placeholder='Address'
					/>
				</div>
				<div className='flex flex-col my-1'>
					<label htmlFor='apartment'>Apartment, Suite, etc.</label>
					<input
						type='text'
						id='apartment'
						name='apartment'
						value={formData.address.apartment}
						onChange={handleChange}
						className='border rounded-lg px-3 py-2 focus:outline-none focus:ring-black focus:border-black placeholder:sm:text-sm placeholder-gray-400'
						placeholder='Apartment, Suite, etc.'
					/>
				</div>
			</div>
			<div className='flex flex-row justify-between gap-x-3'>
				<div className='flex flex-col my-1'>
					<label htmlFor='country'>Country</label>
					<select
						className='border appearance-none rounded-lg px-4 py-2 focus:outline-none focus:ring-black focus:border-black placeholder:sm:text-sm placeholder-gray-400'
						value={formData.address.country}
						onChange={e =>
							updateFormData(prevFormData => ({
								...prevFormData,
								address: {
									...prevFormData.address,
									country: e.target.value, // Use e.target.value to get the selected value
								},
							}))
						}
						name='country'
					>
						<option value=''>Select Country</option>
						<option value='USA'>USA</option>
					</select>
				</div>
				<div className='flex flex-col my-1'>
					<label htmlFor='city'>City</label>
					<input
						type='text'
						id='city'
						name='city'
						value={formData.address.city}
						onChange={handleChange}
						className='border rounded-lg px-3 py-2 focus:outline-none focus:ring-black focus:border-black placeholder:sm:text-sm placeholder-gray-400'
						placeholder='City'
					/>
				</div>
				<div className='flex flex-col my-1'>
					<label htmlFor='zipcode'>Zipcode</label>
					<input
						type='text'
						id='zipcode'
						name='zip'
						value={formData.address.zip}
						onChange={handleChange}
						className='border rounded-lg px-2 py-2 focus:outline-none focus:ring-black focus:border-black placeholder:sm:text-sm placeholder-gray-400'
						placeholder='Zipcode'
					/>
				</div>
			</div>
			<div className='flex flex-col my-1'>
				<label htmlFor='company'>Company</label>
				<input
					type='text'
					id='company'
					name='company'
					value={formData.address.company}
					onChange={handleChange}
					className='border rounded-lg px-3 py-2 focus:outline-none focus:ring-black focus:border-black placeholder:sm:text-sm placeholder-gray-400'
					placeholder='Company'
				/>
			</div>
			<div className=''>
				<div className='flex flex-col my-3'>
					<label htmlFor='phoneNumber'>Phone Number</label>
					<input
						type='text'
						id='phoneNumber'
						name='phone'
						value={formData.address.phone}
						onChange={handleChange}
						className='border rounded-lg px-3 py-2 focus:outline-none focus:ring-black focus:border-black placeholder:sm:text-sm placeholder-gray-400'
						placeholder='Phone Number'
					/>
				</div>
			</div>
		</form>
	)
}
