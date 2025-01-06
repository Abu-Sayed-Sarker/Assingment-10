import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import VisaCard from "../Components/AllVisa/VisaCard";

const Allvisa = () => {
    const allVisa = useLoaderData();


    const [visas, setvisa] = useState(allVisa)

    const [type, setType] = useState("")


    useEffect(() => {
        fetch(`https://visa-navigate-server.vercel.app/visas/type/${type}`)
            .then(res => res.json())
            .then(Data => {
                setvisa(Data)
        })
    }, [type])
    
    
    




    return (
        <div className="bg-gray-200">
            <div className="w-10/12 mx-auto">
                <h1 className="text-center py-5 lg:text-5xl text-3xl font-bold text-pink-600">ALL VISA</h1>
                <div>
                    <select onChange={(e)=> setType(e.target.value)} name="visa-type" className="select select-bordered w-full">
                        <option disabled selected>Filter visa by visa type</option>
                        <option>Tourist-visa</option>
                        <option>Student-visa</option>
                        <option>Official-visa</option>
                    </select>
                </div>
                <div className="grid lg:grid-cols-4 gap-3 md:grid-cols-2 grid-cols-1 py-10">
                    {
                        visas.map(visa => <VisaCard key={visa._id} visa={visa} setvisa={setvisa}></VisaCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Allvisa;