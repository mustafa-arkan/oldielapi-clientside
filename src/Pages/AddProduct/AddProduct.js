import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Navigate } from 'react-router-dom';


const AddProduct = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleAddProduct = data =>{



        fetch('https://social-app-server-mustafa-arkan.vercel.app/addproducts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json', 
                
            },
           
        })
        .then(res => res.json())
                .then(result =>{
                    console.log(result);
                    toast.success(`${data.name} is added successfully`);
                    Navigate('/dashboard/addproducts')
                })


    }



    return (
        <div className='w-96 p-7'>
        <h2 className="text-4xl">Add your product.</h2>
        <form onSubmit={handleSubmit(handleAddProduct)}>
            
            <div className="form-control w-full max-w-xs">
                <label className="label"> <span className="label-text">Model Name</span></label>
                <input type="text" {...register("model", {
                    required: "model is Required"
                })} className="input input-bordered w-full max-w-xs" />
                {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
            </div>


            <div className="form-control w-full max-w-xs">
                <label className="label"> <span className="label-text">Location</span></label>
                <input type="text" {...register("location", {
                    required: "location is Required"
                })} className="input input-bordered w-full max-w-xs" />
                {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
            </div>




            <div className="form-control w-full max-w-xs">
                <label className="label"> <span className="label-text">Usage</span></label>
                <input type="text" {...register("usage", {
                    required: "Name is Required"
                })} className="input input-bordered w-full max-w-xs" />
                {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
            </div>


            <div className="form-control w-full max-w-xs">
                <label className="label"> <span className="label-text">Seller Name</span></label>
                <input type="text" {...register("seller", {
                    required: "Name is Required"
                })} className="input input-bordered w-full max-w-xs" />
                {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
            </div>


            <div className="form-control w-full max-w-xs">
                <label className="label"> <span className="label-text">original Price</span></label>
                <input type="text" {...register("origunal", {
                    required: "Name is Required"
                })} className="input input-bordered w-full max-w-xs" />
                {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
            </div>


            <div className="form-control w-full max-w-xs">
                <label className="label"> <span className="label-text">Resale Price</span></label>
                <input type="text" {...register("resale", {
                    required: "Name is Required"
                })} className="input input-bordered w-full max-w-xs" />
                {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
            </div>




            <div className="form-control w-full max-w-xs">
                <label className="label"> <span className="label-text">Email</span></label>
                <input type="email" {...register("email", {
                    required: true
                })} className="input input-bordered w-full max-w-xs" />
                {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
            </div>


            {/* <div className="form-control w-full max-w-xs">
                <label className="label"> <span className="label-text">Product Photo Url</span></label>
                <input type="text" {...register("url", {
                    required: true
                })} className="input input-bordered w-full max-w-xs" />
                {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
            </div> */}



            
            <div className="form-control w-full max-w-xs">
                <label className="label"> <span className="label-text">Photo </span></label>
                <input type="file" {...register("image", {
                    
                })} className="input input-bordered w-full max-w-xs" />
                {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
            </div>
            <input className='btn btn-accent w-full mt-4' value="Add Your Product" type="submit" />
        </form>
    </div>
    );
};

export default AddProduct;