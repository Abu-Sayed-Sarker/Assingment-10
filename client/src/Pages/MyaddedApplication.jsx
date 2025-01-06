import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import AppliedvisaCard from "../Components/AppliedvisaCard";

const MyaddedApplication = () => {


    const [scarch, setscrch] = useState("");

    const parems = useParams()
    const email = parems.email;

    const allApplication = useLoaderData();



    const [applications, setApplications] = useState(allApplication)




    useEffect(() => {
        fetch(`https://visa-navigate-server.vercel.app/addedvisa/${email}?searchParams=${scarch}`)
            .then(res => res.json())
            .then(data => {
                setApplications(data)

            })
    }, [email, scarch])
    return (
        <div className="bg-gray-200">
            <div className="w-10/12 mx-auto">
                <h1 className="text-center py-5 lg:text-5xl text-3xl font-bold text-pink-600">MY APPLICATIONS</h1>
                <div>
                    <label className="input input-bordered flex items-center gap-2">
                        <input onChange={(e) => setscrch(e.target.value)} type="text" className="grow" placeholder="Search" />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                fillRule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clipRule="evenodd" />
                        </svg>
                    </label>
                </div>
                {
                    applications.length ? " " : <div className="h-[50vh] flex items-center justify-center">
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
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Visa Image</th>
                                <th>Country</th>
                                <th>Price</th>
                                <th>Type</th>
                                <th>Date</th>
                                <th>Cancel</th>
                            </tr>
                        </thead>
                        <tbody>
                            {applications.map(visa => (
                                <AppliedvisaCard key={visa._id} visa={visa} setApplications={setApplications} applications={applications} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyaddedApplication;