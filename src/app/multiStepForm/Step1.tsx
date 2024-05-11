//create step1 component
import React from "react"
import { useState } from "react"

export default function Step1() {
	return (
		<form className='flex flex-col gap-y-3 w-5/6'>
			<div className='flex flex-row justify-around'>
				<div className='flex flex-col my-1'>
					<label htmlFor='firstName'>First Name</label>
					<input
						type='text'
						id='firstName'
						name='firstName'
						className='border rounded-lg px-3 py-2 focus:outline-none focus:ring-black focus:border-black placeholder:sm:text-sm placeholder-gray-400'
						placeholder='First name'
					/>
				</div>
				<div className='flex flex-col my-1'>
					<label htmlFor='lastName'>Last Name</label>
					<input
						type='text'
						id='lastName'
						name='lastName'
						className='border rounded-lg px-3 py-2 focus:outline-none focus:ring-black focus:border-black placeholder:sm:text-sm placeholder-gray-400'
						placeholder='Last name'
					/>
				</div>
			</div>
			<div className='flex flex-col my-1'>
				<label htmlFor='userName'>User Name</label>
				<input
					type='text'
					id='userName'
					name='userName'
					className='border rounded-lg px-3 py-2 focus:outline-none focus:ring-black focus:border-black placeholder:sm:text-sm placeholder-gray-400'
					placeholder='Username'
				/>
			</div>
			<div className='flex flex-col my-1'>
				<label htmlFor='email'>Email</label>
				<input
					type='email'
					id='email'
					name='email'
					className='border rounded-lg px-3 py-2 focus:outline-none focus:ring-black focus:border-black placeholder:sm:text-sm placeholder-gray-400'
					placeholder='Email'
				/>
			</div>
			<div className="">
				<div className='flex flex-col my-3'>
					<label htmlFor='password'>Password</label>
					<input
						type='password'
						id='password'
						name='password'
						className='border rounded-lg px-3 py-2 focus:outline-none focus:ring-black focus:border-black placeholder:sm:text-sm placeholder-gray-400'
						placeholder='Password'
					/>
				</div>
				<div className='flex flex-col my-1'>
					<label htmlFor='confirmPassword'>Confirm Password</label>
					<input
						type='password'
						id='confirmPassword'
						name='confirmPassword'
						className='border rounded-lg px-3 py-2 focus:outline-none focus:ring-black focus:border-black placeholder:sm:text-sm placeholder-gray-400'
						placeholder='Confirm password'
					/>
				</div>
			</div>
		</form>
	)
}
