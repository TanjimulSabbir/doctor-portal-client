import { format } from 'date-fns';
import React, { useContext } from 'react';
import { AuthContext } from '../../../../Context/AuthProvider';
import { toast } from 'react-toastify';


const AppoinmentModal = ({ treatment, selected, setTreatment, refetch }) => {
    const { treatmentName, slots, price } = treatment;
    const { user } = useContext(AuthContext);
    const date = format(selected, "PP")

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const price = form.price.value;
        const UserData = {
            date, treatmentName, slot, name, phone, email, price: price || "100"
        }
        console.log(UserData, "submited Data");
        fetch(`https://doctor-portal-server-seven-brown.vercel.app/booking`, {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(UserData)
        })
            .then((res) => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    setTreatment(null);
                    toast.success("Appointment Successful");
                    refetch();
                }
                else {
                    toast.error(data.message)
                }
            })
            .catch(err => {
                toast(err)
            })
        // Get data
        fetch("https://doctor-portal-server-seven-brown.vercel.app/booking")
            .then(res => res.json())
            .then(data => console.log(data));

    }

    return (
        <div>
            {/* Put this part before </body> tag */}
            <input input-borderd type="checkbox" id="treatment-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative bg-slate-50">
                    <label htmlFor="treatment-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-xl font-bold text-black">{treatmentName}</h3>
                    <form className='space-y-5 mt-10' onSubmit={handleSubmit}>

                        <input type="text" className="input input-bordered w-full" value={`${selected && format(selected, 'PP')}`} disabled />
                        <select name='slot' className="select select-bordered w-full">
                            {
                                slots.map((slot, index) => <option key={index} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input name='name' required input-borderd type="text" defaultValue={user?.displayName} placeholder="Full Name" className="input input-borderd w-full bg-white border border-black text-black" />

                        <input name='phone' required input-borderd type="text" placeholder="Phone" className="input input-borderd w-full bg-white border border-black text-black" />

                        <input name='email' required defaultValue={user?.email} disabled input-borderd type="email" placeholder="Email" className="input input-borderd w-full bg-white 
                        border border-black text-black" />

                        <input name='price' required defaultValue={'$' + price} disabled input-borderd type="email" placeholder="Price" className="input input-borderd w-full bg-white border border-black text-black" />

                        <button className='btn w-full text-white border-none bg-violet-500 hover:bg-violet-600'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AppoinmentModal;