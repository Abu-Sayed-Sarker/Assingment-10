import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import MyaddedVisaCard from "../Components/MyaddedVisaCard";

const MyAddedVisa = () => {
    const visaData = useLoaderData();
    const [visas, setVisas] = useState(visaData);





    return (
        <div>
            <div className="bg-gray-200">
                <div className="w-10/12 mx-auto">
                    <h1 className="text-center py-5 lg:text-5xl text-3xl font-bold text-pink-600">MY ADDED VISA</h1>
                    <div>
                        {
                            visas.length ? " " : <div className="h-[50vh] flex items-center justify-center">
                                <div className="text-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-16 w-16 text-gray-400 mb-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M9 14l6-6m0 0l-6 6m6-6V9a2 2 0 10-4 0v2m4 6H5m0 0h14m-14 0v-2a2 2 0 114 0v2m4-2a2 2 0 114 0v2m-4 0h6"
                                        />
                                    </svg>
                                    <h1 className="text-2xl font-bold text-gray-700">No Data Available</h1>
                                    <p className="text-gray-500 mt-2">
                                        We couldn’t find any data to display. Please try again later or add
                                        some new content.
                                    </p>
                                    <button
                                        onClick={() => window.location.reload()}
                                        className="mt-6 px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                                    >
                                        Reload Page
                                    </button>
                                </div>
                            </div>
                        }
                    </div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>Visa Image</th>
                                    <th>Country</th>
                                    <th>Price</th>
                                    <th>Type</th>
                                    <th>Description</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    visas.map(allvisa => <MyaddedVisaCard key={allvisa._id} visas={visas} setVisas={setVisas} visa={allvisa}></MyaddedVisaCard>)
                                }
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyAddedVisa;