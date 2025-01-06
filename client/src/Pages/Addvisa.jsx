import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";

const Addvisa = () => {

    const {user} = useContext(AuthContext)

    const habdleAddVisaFrom = e => {
        e.preventDefault()
        const form = new FormData(e.target);
        const photo = form.get("photo");
        const country = form.get("country");
        const visaType = form.get("visa-type");
        const Age = form.get("Age");
        const Validity = form.get("Validity");
        const fee = form.get("fee");
        const description = form.get("description");
        const method = form.get("method");
        const Processing_time = form.get("Processing_time");


        const email = user.email;


        // array 
        const passport = e.target.passport.checked == true ? form.get("passport") : "";
        const application = e.target.application.checked == true ? form.get("application") : "";
        const userphoto = e.target.userphoto.checked == true ? form.get("userphoto") : "";


        const Required_documents = [passport, application, userphoto];

        
        const Data = {email, country, photo, visaType, Age, Required_documents, Validity, fee, method, Processing_time, description}
        


        fetch("https://visa-navigate-server.vercel.app/visas", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(Data)
        })
            .then(res => res.json())
            .then(data => {
                toast.success("Add new visa successfully")
                e.target.reset();
                console.log(data);
                
            
        })
    }
    return (
        <div className="bg-gray-200">
            <div className="w-10/12 mx-auto">
                <h1 className="text-center pt-5 lg:text-5xl text-3xl font-bold text-pink-600">Add new visa</h1>
                <form onSubmit={habdleAddVisaFrom} className="w-full flex flex-col gap-3 py-10">
                    <div className="flex lg:flex-row flex-col gap-3">

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text text-xl">Enter yout Country photo URL</span>
                            </div>
                            <input name="photo" type="text" placeholder="URL" className="input input-bordered w-full" />
                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text text-xl">Enter Country name</span>
                            </div>
                            <input name="country" type="text" placeholder="Country name here" className="input input-bordered w-full" />
                        </label>

                    </div>
                    <div className=" flex lg:flex-row flex-col gap-3">

                        {/* chosees section  */}

                        <div className="w-full space-y-3">
                            <div className="w-full">

                                <label>
                                    <div className="label">
                                        <span className="label-text text-xl">Choose Visa type</span>
                                    </div>
                                    <select name="visa-type" className="select select-bordered w-full">
                                        <option disabled selected>Select Visa type</option>
                                        <option>Tourist-visa</option>
                                        <option>Student-visa</option>
                                        <option>Official-visa</option>
                                    </select>
                                </label>

                            </div>
                            <div className="">
                                <div className="label">
                                    <span className="label-text text-xl">Required documents</span>
                                </div>


                                <div className="border border-gray-700 rounded-2xl">
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
                                </div>

                            </div>
                        </div>


                        {/* 2nd option  */}

                        <div className="w-full space-y-3">
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text text-xl">Age restriction.</span>
                                </div>
                                <input name="Age" type="number" placeholder="Enter Required age" className="input input-bordered w-full" />
                            </label>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text text-xl">Validity</span>
                                </div>
                                <input name="Validity" type="text" placeholder="Validity here" className="input input-bordered w-full" />
                            </label>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text text-xl">Fee</span>
                                </div>
                                <input name="fee" type="number" placeholder="Enter visa fee" className="input input-bordered w-full" />
                            </label>

                        </div>
                    </div>


                    <div>
                        <div className="w-full space-y-3">

                            <div className="flex lg:flex-row flex-col gap-3">
                                <label className="w-full">
                                    <div className="label">
                                        <span className="label-text text-xl">Application method</span>
                                    </div>
                                    <select name="method" className="select select-bordered w-full">
                                        <option disabled selected>Select Application method</option>
                                        <option>Online Application</option>
                                        <option>In-Person Application</option>
                                        <option>Postal Application</option>
                                        <option>Through an Agent or Third-Party</option>
                                        <option>Drop Box Submission</option>
                                    </select>
                                </label>

                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text text-xl">Processing time</span>
                                    </div>
                                    <input name="Processing_time" type="text" placeholder="Processing time here" className="input input-bordered w-full" />
                                </label>

                            </div>
                            <div className="w-full">
                                <div className="label">
                                    <span className="label-text text-xl">Description</span>
                                </div>
                                <textarea name="description" className="textarea textarea-bordered w-full" placeholder="Type here"></textarea>
                            </div>

                        </div>
                    </div>

                    <button className="btn w-full bg-pink-600 hover:bg-pink-400 rounded-xl">Add Visa</button>

                </form>
            </div>
        </div>
    );
};

export default Addvisa;