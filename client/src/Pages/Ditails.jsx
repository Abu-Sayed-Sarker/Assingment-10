import { useLoaderData } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";

const Ditails = () => {
    const { user } = useContext(AuthContext)
    const visa = useLoaderData()


    const [Dates, setDate] = useState(new Date());
    const date = `${Dates.getDate()}/${Dates.getMonth() + 1}/${Dates.getFullYear()}`




    const submitAddVisa = e => {
        e.preventDefault();

        const form = new FormData(e.target);
        const Email = form.get("Email");
        const firstName = form.get("firstName");
        const LastName = form.get("LastName");


        const countryName = visa.country;
        const price = visa.fee;
        const img = visa.photo;
        const type = visa.visaType;
        const prossingTime = visa.Processing_time;
        const validati = visa.Validity;
        const Method = visa.method;

        const AddApplication = { Email, firstName, LastName, countryName, img, Method, validati, type, price, prossingTime, date };


        fetch("https://visa-navigate-server.vercel.app/addedvisa", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(AddApplication)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success("Application Successfully Added")
                e.target.reset();

            })
    }

    return (
        <div className="bg-gray-200">
            <div className="mx-auto w-10/12">
                <h1 className="text-center py-5 lg:text-5xl text-3xl font-bold text-pink-600">VISA DITAILS</h1>
                <div>
                    <div className="card bg-base-100 shadow-xl flex lg:flex-row md:flex-row flex-col">
                        <figure className="px-10 pt-10 lg:pb-10 md:pb-10">
                            <img

                                src={visa.photo}
                                alt="Shoes"
                                className="rounded-xl border-pink-600 border-2" />
                        </figure>
                        <div className="card-body lg:w-9/12 mx-auto">
                            <h2 className="text-center mx-auto card-title text-4xl pb-5">{visa.country}</h2>
                            <div>
                                <div className="">
                                    <div className="flex justify-between text-left">
                                        <label>
                                            <p className="font-semibold text-xl">Visa Type</p>
                                            <p>{visa.visaType}</p>
                                        </label>
                                        <label>
                                            <p className="font-semibold text-xl">Visa Validity time</p>
                                            <p>{visa.Validity}</p>
                                        </label>
                                    </div>
                                    <div className="flex justify-between text-left">
                                        <label>
                                            <p className="font-semibold text-xl">Visa Fee</p>
                                            <p>{visa.fee} $</p>
                                        </label>
                                        <label>
                                            <p className="font-semibold text-xl">Processing time</p>
                                            <p>{visa.Processing_time}</p>
                                        </label>

                                    </div>
                                    <div className="flex justify-between text-left">
                                        <label>
                                            <p className="font-semibold text-xl">Application method</p>
                                            <p>{visa.method}</p>
                                        </label>
                                        <div>
                                            <p className="font-semibold text-xl">Required documents</p>
                                            <p className="text-left">{visa.Required_documents.map((d, index) => <li className="list-none" key={index}>{d == "" ? "" : `=> ${d}`}</li>)}</p>
                                        </div>
                                    </div>
                                    <label>
                                        <p className="font-semibold text-xl">Description</p>
                                        <p>{visa.description}</p>
                                    </label>

                                </div>


                            </div>
                            <div className="card-actions">
                                {/* Open the modal using document.getElementById('ID').showModal() method */}
                                <button className="mt-5 btn bg-pink-600 hover:bg-pink-400" onClick={() => document.getElementById('my_modal_5').showModal()}>Apply Now</button>
                                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                    <div className="modal-box">


                                        <form onSubmit={submitAddVisa} method="dialog">
                                            <div className="flex flex-col gap-3">
                                                <p className="text-left">Enter email</p>
                                                <input name="Email" type="text" value={`${user?.email}`} required placeholder="Type here" className="input input-bordered w-full" />
                                                <div className="flex gap-3">
                                                    <input name="firstName" type="text" required placeholder="First Name" className="input input-bordered w-ful" />
                                                    <input name="LastName" type="text" required placeholder="Last Name" className="input input-bordered w-full" />
                                                </div>
                                                <div className="flex gap-3">
                                                    <DatePicker className="input input-bordered w-ful" selected={Dates} onChange={(Date) => setDate(Date)}></DatePicker>
                                                    <input value={`${visa.fee}`} type="text" required placeholder="Visa Fee" className="input input-bordered w-full" />
                                                </div>
                                            </div>
                                            {/* if there is a button in form, it will close the modal */}
                                            <button onClick={() => document.getElementById('my_modal_5').close()} className="btn mt-4 bg-pink-600 hover:bg-pink-400 w-full">Apply</button>
                                        </form>

                                    </div>
                                </dialog>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ditails;