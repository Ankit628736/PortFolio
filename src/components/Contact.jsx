import axios from 'axios';
import React from 'react'
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';


function Contact() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async data => {
        const userInfo={
            name:data.name,
            email:data.email,
            message:data.message
        }
        try{
           await axios.post("https://getform.io/f/azyllqeb",userInfo);
           toast.success("Your message has been send")
        }catch(error){
                // console.log(error);
                toast.error("Something went wrong");
        }
    }
  return (
    <>
    <div name="Contact" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
        <h1 className='text-3xl font-bold mb-4'>Contact me</h1>
        <span>Please fill out the form below to contact me</span>
        <div className='flex flex-col items-center justify-center mt-5'>
            <form
            onSubmit={handleSubmit(onSubmit)}
            // action="https://getform.io/f/azyllqeb" 
            // method='POST' 
            className='bg-slate-200 w-96 px-8 py-6 rounded-xl'>
                <h1 className='text-xl font-semibold mb-4'>Send Your Message</h1>
                <div className='flex flex-col mb-4'>
                    <label className='block text-gray-700'>FullName</label>
                    <input
                    {...register("name", { required: true })}
                    type="text" 
                    id='name'
                    name='name'
                    className='shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                    placeholder="Enter your Fullname" />
                    {errors.name && <span>This field is required</span>}
                </div>
                <div className='flex flex-col mb-4'>
                    <label className='block text-gray-700'>Email Address</label>
                    <input
                    {...register("email", { required: true })}
                    type="text" 
                    id='name'
                    name='email'
                    className='shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                    placeholder="Enter your email address" />
                    {errors.email && <span>This field is required</span>}
                </div>
                <div className='flex flex-col mb-4'>
                    <label className='block text-gray-700'>Massage</label>
                    <textarea
                    {...register("message", { required: true })}
                    type="text" 
                    id='massage'
                    name='message' 
                    className='shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                    placeholder="Enter your Quary" />
                    {errors.message && <span>This field is required</span>}
                </div>
                <button type='submit' className='bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300'>Send</button>
            </form>
        </div>
    </div>
    </>
  )
}

export default Contact
