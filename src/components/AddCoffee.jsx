import React from 'react';
import Swal from 'sweetalert2'

const AddCoffee = () => {

    const handleAddCoffee = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = {name,quantity,supplier,taste,category,details,photo}
        // console.log(newCoffee);

        fetch('https://coffee-store-server-pi-ivory.vercel.app/coffee', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            if (data.insertedId) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee added successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
        
    }

    return (
        <div className='bg-[#F4F3F0] p-24'>
            <h1 className='text-3xl font-extrabold'>Add a coffee</h1>
            <form onSubmit={handleAddCoffee}>
                {/* form row-1 */}
                <div className=' md:flex mb-8'>
                    <div className='md:w-1/2'>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Coffee Name</legend>
                            <input type="text" name='name' className="input w-full" placeholder="Coffee Name" />

                        </fieldset>
                    </div>
                    <div className='md:w-1/2 ml-4'>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend"> Available Quantity</legend>
                            <input type="text" name='quantity' className="input w-full" placeholder="Available Quantity" />

                        </fieldset>
                    </div>
                </div>
                {/* form row-2 */}
                <div className=' md:flex mb-8'>
                    <div className='md:w-1/2'>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Supplier Name</legend>
                            <input type="text" name='supplier' className="input w-full" placeholder="Supplier Name" />

                        </fieldset>
                    </div>
                    <div className='md:w-1/2 ml-4'>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Taste</legend>
                            <input type="text" name='taste' className="input w-full" placeholder="Enter Coffee Taste" />

                        </fieldset>
                    </div>
                </div>
                {/* form row-3 */}
                <div className=' md:flex mb-8'>
                    <div className='md:w-1/2'>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Category Name</legend>
                            <input type="text" name='category' className="input w-full" placeholder="Category Name" />

                        </fieldset>
                    </div>
                    <div className='md:w-1/2 ml-4 '>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend"> Details</legend>
                            <input type="text" name='details' className="input w-full" placeholder="Details" />

                        </fieldset>
                    </div>
                </div>
                {/* form row-4 */}
                <div className=''>
                    <div className='w-full mb-4'>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Photo URL</legend>
                            <input type="text" name='photo' className="input w-full" placeholder="Photo URL" />
                        </fieldset>
                    </div>
                    
                </div>
                
                <input type="submit" value="Add Coffee" className="btn btn-neutral w-full" />
            </form>
        </div>
    );
};

export default AddCoffee;