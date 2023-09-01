import axios from "axios";
import { useEffect, useState } from "react";

const SingleDrug = ({ id, back }) => {
    const [drug, setDrug] = useState(null);
    const api = axios.create({
        baseURL: `http://localhost:8080/api/v1/`
    });

    useEffect(()=>{
        api.get(`/drugs/${id}`).then(res => {
            setDrug(res.data);
            console.log(res);
        }).catch(err => {  
            console.log(err);
        });

    },[id])


    return (
        <div style={{padding: "50px"}}>
        <div style={{backgroundColor: "beige"}} onClick={()=> back()}>
            Back
        </div>
            {drug !== null ? (
            <div>
            <p>Name: {drug.name}</p>
            <p>Description: {drug.description}</p>
            <p>Mnufacturer: {drug.manufacturer}</p>
            <p>Expiry Date: {drug.expiryDate}</p>

            </div>
            ):(
            <h1>Drug not found</h1>
            )}
        </div>
    );
}
export default SingleDrug;