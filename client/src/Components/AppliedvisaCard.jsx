/* eslint-disable react/prop-types */

import { MdCancel } from "react-icons/md";



const AppliedvisaCard = ({ visa, applications, setApplications }) => {
    const handelDelete = id => {
        fetch(`https://visa-navigate-server.vercel.app/addedvisa/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                const newArray = applications.filter((data => id != data._id));
                setApplications(newArray);
                console.log(result);


            })
    }



    return (
        <tr>
            <td><img className="w-16 rounded-xl" src={visa.img} alt="" /></td>
            <td>{visa.countryName}</td>
            <td>{visa.price}</td>
            <td>{visa.type}</td>
            <td> {visa.date}</td>
            <td className="space-x-1">
                <button onClick={() => handelDelete(visa._id)} className="text-[25px] hover:text-teal-600 disabled:cursor-not-allowed"><MdCancel /></button>
            </td>
        </tr>
    );
};

export default AppliedvisaCard;