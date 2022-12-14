

import toast from 'react-hot-toast';





const BookModal = ({phoneInfo}) => {



   
const handleClick=()=>{




    toast.success('Order placed successfully');
}





    return (
    


    <>
    <input type="checkbox" id="book-modal" className="modal-toggle" />
    <div className="modal">
        <div className="modal-box relative">
            <label htmlFor="book-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            


            


            <h3 className="text-lg font-bold">{phoneInfo.seller}</h3>
            <form  className='grid grid-cols-1 gap-3 mt-10'>
                <input type="text"  disabled  className="input w-full input-bordered " />
                
                <input name="name" type="text" value={phoneInfo.seller}   placeholder="Your Name" className="input w-full input-bordered" />
                <input name="email" type="email"    placeholder="Email Address" className="input w-full input-bordered" />
                <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                <input name="name" type="text"    placeholder="Meeting Location" className="input w-full input-bordered" />
                <br />
                <input   onClick={handleClick}   className='btn btn-accent w-full'  value="Submit" />
            </form>
        </div>
    </div>
</>



       
    );
};

export default BookModal;