
import React from 'react';

const BooksModal = ({ brand }) => {

   






  return (
    // <div>
    //   <input type="checkbox" id="phone-modal" className="modal-toggle" />
    //   <div className="modal">
    //     <div className="modal-box relative">
    //       <label
    //         htmlFor="phone-modal"
    //         className="btn btn-sm btn-circle absolute right-2 top-2"
    //       >
    //         ✕
    //       </label>
    //       <h3 className="text-lg font-bold">
    //         Congratulations random Internet user!{brand.brand}
    //       </h3>
    //       <p className="py-4">
    //         You've been selected for a chance to get one year of subscription to
    //         use Wikipedia for free!
    //       </p>
    //     </div>
    //   </div>
    // </div>

<>
            <input type="checkbox" id="phone-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{brand.brand}</h3>
                    <form  className='grid grid-cols-1 gap-3 mt-10'>
                        {/* onSubmit={handleBooking} */}
                        <input type="text" value={brand.resale_price} disabled  className="input w-full input-bordered " />
                       
                        <input name="name" type="text" placeholder="Your Name"  value={brand.resale_price}    className="input w-full input-bordered" />

                       
                        <input name="email" type="email" placeholder="Email Address"   value={brand.resale_price}    className="input w-full input-bordered"    />
                        <input name="phone" type="text" placeholder="Phone Number"   value={brand.resale_price}    className="input w-full input-bordered" />
                        <br />
                        <input className='btn btn-accent w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>






  );
};

export default BooksModal;