//create step1 component
import React from "react"
import { useState } from "react"

export default function Step2() {
	return (
		<form className='flex flex-col gap-y-6 w-5/6'>
			<div className='flex flex-row justify-around'>
				<div className='flex flex-col my-1'>
					<label htmlFor='address'>Address</label>
					<input
						type='text'
						id='address'
						name='address'
						className='border rounded-lg px-3 py-2 focus:outline-none focus:ring-black focus:border-black placeholder:sm:text-sm placeholder-gray-400'
						placeholder='Address'
					/>
				</div>
				<div className='flex flex-col my-1'>
					<label htmlFor='apartment'>Aparment, Suite, etc.</label>
					<input
						type='text'
						id='apartment'
						name='apartment'
						className='border rounded-lg px-3 py-2 focus:outline-none focus:ring-black focus:border-black placeholder:sm:text-sm placeholder-gray-400'
						placeholder='Aparment, Suite, etc.'
					/>
				</div>
			</div>
			<div className='flex flex-row justify-between gap-x-3'>
				<div className='flex flex-col my-1'>
					<label htmlFor='country'>Country</label>
					<select className='border appearance-none rounded-lg px-4 py-2 focus:outline-none focus:ring-black focus:border-black placeholder:sm:text-sm placeholder-gray-400'>
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
						className='border rounded-lg px-3 py-2 focus:outline-none focus:ring-black focus:border-black placeholder:sm:text-sm placeholder-gray-400'
						placeholder='City'
					/>
				</div>
				<div className='flex flex-col my-1'>
					<label htmlFor='zipcode'>Zipcode</label>
					<input
						type='text'
						id='zipcode'
						name='zipcode'
						className='border rounded-lg px-2 py-2 focus:outline-none focus:ring-black focus:border-black placeholder:sm:text-sm placeholder-gray-400'
						placeholder='zipcode'
					/>
				</div>
			</div>
			<div className='flex flex-col my-1'>
				<label htmlFor='company'>Company</label>
				<input
					type='company'
					id='company'
					name='company'
					className='border rounded-lg px-3 py-2 focus:outline-none focus:ring-black focus:border-black placeholder:sm:text-sm placeholder-gray-400'
					placeholder='Company'
				/>
			</div>
			<div className=''>
				<div className='flex flex-col my-3'>
					<label htmlFor='phoneNumber'>Phone Number</label>
					<input
						type='phoneNumber'
						id='phoneNumber'
						name='phoneNumber'
						className='border rounded-lg px-3 py-2 focus:outline-none focus:ring-black focus:border-black placeholder:sm:text-sm placeholder-gray-400'
						placeholder='Phone Number'
					/>
				</div>
			</div>
		</form>
	)
}
