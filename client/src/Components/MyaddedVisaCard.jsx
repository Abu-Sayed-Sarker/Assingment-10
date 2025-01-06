/* eslint-disable react/prop-types */

import { useState } from "react";
import toast from "react-hot-toast";
import { FaRegEdit } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

const MyaddedVisaCard = ({ visa, visas, setVisas }) => {

    const [allvisa, setvisa] = useState(visa);


    const [currentVisaId, setCurrentVisaId] = useState(null);
    const [photo, setPhoto] = useState(null);
    const [name, setName] = useState(null);
    const [validaty, setVAlidaty] = useState(null);
    const [Fee, setFee] = useState(null);




    const handelDelete = id => {
        fetch(`https://visa-navigate-server.vercel.app/visas/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                const newArray = visas.filter((data => id != data._id));
                setVisas(newArray);
                console.log(result);


            })
    }


    const submitUpdateVisa = async (e) => {
        e.preventDefault();




        const form = new FormData(e.target);



        //array

        const passport = e.target.passport.checked == true ? form.get("passport") : "";
        const application = e.target.application.checked == true ? form.get("application") : "";
        const userphoto = e.target.userphoto.checked == true ? form.get("userphoto") : "";


        const Required_documents = [passport, application, userphoto];

        const updatedVisa = {
            country: form.get("country") || name,
            validity: form.get("validity") || validaty,
            VisaType: form.get("visa-type") || allvisa.visaType,
            method: form.get("method") || allvisa.method,
            price: form.get("Price") || Fee,
            age: form.get("age") || allvisa.age,
            photo: form.get("Photo") || photo,
            description: form.get("description") || allvisa.description,
            Processing_time: form.get("Processing_time") || allvisa.description,
            Required_documents: Required_documents
        };



        try {
            const response = await fetch(`https://visa-navigate-server.vercel.app/visas/id/${currentVisaId}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedVisa),
            });
            const result = await response.json();

            if (response.ok) {
                setvisa(updatedVisa)
                toast.success("Visa updated successfully!");
                // Optionally refresh visas list here by re-fetching or updating state

            } else {
                toast.error(`Failed to update visa: ${result.message}`);
            }
        } catch (error) {
            console.error("Error updating visa:", error);
            toast.error("An error occurred while updating the visa.");
        }
    };

    return (
        <tr>
            <td><img className="w-16 rounded-xl" src={allvisa.photo} alt="" /></td>
            <td>{allvisa.country}</td>
            <td>{allvisa.fee}</td>
            <td>{allvisa.visaType}</td>
            <td> {allvisa.description}</td>
            <td className="space-x-1">
                <button onClick={() => handelDelete(allvisa._id)} className="text-[25px] hover:text-teal-600 disabled:cursor-not-allowed"><MdCancel /></button>
                <button onClick={() => {
                    document.getElementById(allvisa._id).showModal()
                    setCurrentVisaId(allvisa._id)
                    setPhoto(allvisa.photo)
                    setName(allvisa.country)
                    setVAlidaty(allvisa.Validity)
                    setFee(allvisa.fee)
                }} className="text-[25px] hover:text-teal-600 disabled:cursor-not-allowed"><FaRegEdit /></button>
                <dialog id={allvisa._id} className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <form onSubmit={submitUpdateVisa} method="dialog">
                            <div className="flex flex-col gap-3">
                                <p className="text-left">Upadate Photo URL</p>
                                <input name="Photo" type="text" placeholder="Type here" className="input input-bordered w-full" />
                                <label className="flex gap-3">
                                    <input name="country" type="text" placeholder="Country Name" className="input input-bordered w-ful" />
                                    <input name="validity" type="text" placeholder="Validity" className="input input-bordered w-full" />
                                </label>
                                <label className="flex gap-3">
                                    <select name="visa-type" className="select select-bordered w-full">
                                        <option disabled selected>Select Visa type</option>
                                        <option>Tourist-visa</option>
                                        <option>Student-visa</option>
                                        <option>Official-visa</option>
                                    </select>

                                    <select name="method" className="select select-bordered w-full">
                                        <option disabled selected>Select Application method</option>
                                        <option>Online Application</option>
                                        <option>In-Person Application</option>
                                        <option>Postal Application</option>
                                        <option>Through an Agent or Third-Party</option>
                                        <option>Drop Box Submission</option>
                                    </select>


                                </label>
                                <input name="Processing_time" type="text" placeholder="Processing time here" className="input input-bordered w-full" />
                                <label className="flex gap-3">

                                    <input name="Price" type="Number" placeholder="Visa Fee" className="input input-bordered w-full" />
                                    <input name="age" type="Number" placeholder="Age" className="input input-bordered w-full" />
                                </label>

                                <div className="p-3">
                                    <div className="form-control">
                                        <label className="label cursor-pointer">
                                            <span className="label-text">Valid passport</span>
                                            <input name="passport" type="checkbox" value={"Valid passport"} className="checkbox" />
                                        </label>
                                    </div>
                                    <div className="form-control">
                                        <label className="label cursor-pointer">
                                            <span className="label-text">Visa application form</span>
                                            <input name="application" type="checkbox" value={"Visa application"} className="checkbox" />
                                        </label>
                                    </div>
                                    <div className="form-control">
                                        <label className="label cursor-pointer">
                                            <span className="label-text">Recent passport-sized photograph</span>
                                            <input name="userphoto" value={"passport-sized photograph"} type="checkbox" className="checkbox" />
                                        </label>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <div className="label">
                                        <span className="label-text text-xl">Description</span>
                                    </div>
                                    <textarea name="description" className="textarea textarea-bordered w-full" placeholder="Type here"></textarea>
                                </div>
                            </div>
                            {/* if there is a button in form, it will close the modal */}
                            <button onClick={() => document.getElementById(allvisa._id).close()} className="btn mt-4 bg-pink-600 hover:bg-pink-400">Apply</button>
                        </form>

                    </div>
                </dialog>

            </td>
        </tr>

    );
};

export default MyaddedVisaCard;