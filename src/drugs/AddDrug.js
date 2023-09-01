import axios from "axios";
import "./table.css"
import { useEffect, useState } from "react";
import SingleDrug from "./SingleDrug";
import { useNavigate } from "react-router-dom";
const AddDrug = () => {
    
    const [drugToAdd, setDrugToAdd] = useState(null);
    const api = axios.create({
        baseURL: `http://localhost:8080/api/v1/`
    });

    const navigate = useNavigate();


    const handleOnChange = (e) => {
        setDrugToAdd({...drugToAdd, [e.target.name]: e.target.value});
    }

    const postDrug =()=>{
        api.post(
            `/drugs`,
            drugToAdd
            ).then(res => {
            navigate('/drugs');
            console.log(res);
        }).catch(err => {  
            console.log(err);
        });
    }

    const back = () => {
        navigate('/drugs');
    }


    return (
    <>
    <div style={{margin: "50px"}}>
    <div style={{backgroundColor: "beige"}} onClick={()=> back()}>
            Back
        </div>
        <h1>
            Add drug
        </h1>
        <br/>
        <label>
            Name:
            <input type="text" name="name" onChange={(e) => handleOnChange(e)} />
        </label>
        <label>
            Description:
            <input type="text" name="description" onChange={(e) => handleOnChange(e)}  />
        </label>
        <label>
            Manufacturer:
            <input type="text" name="manufacturer" onChange={(e) => handleOnChange(e)}  />
        </label>
        <label>
            Expiry Date:

            <input type="date" name="expiryDate" onChange={(e) => handleOnChange(e)}  />
        </label>
        <input type="button" value="Submit" onClick={()=> postDrug()} />
    </div>

    
    </>
    );

}
export default AddDrug;