import axios from "axios";
import "./table.css"
import { useEffect, useState } from "react";
import SingleDrug from "./SingleDrug";
import { useNavigate } from "react-router-dom";
const DrugTable = () => {
    const [drugs, setDrugs] = useState([]);
    const [drugIsOpen, setDrugIsOpen] = useState(false);
    const [selectedDrug, setSelectedDrug] = useState(null);
    const [drugToAdd, setDrugToAdd] = useState(null);
    const api = axios.create({
        baseURL: `http://localhost:8080/api/v1/`
    });

    const navigate = useNavigate();

    const navigateToAddDrug = () => {
        navigate('/addDrug');
    }


    useEffect(()=>{
        api.get('/drugs').then(res => {
            setDrugs(res.data);
            console.log(res);
        }).catch(err => {  
            console.log(err);
        });
    
    },[])

    const postDrug =()=>{
        api.post('/drugs').then(res => {
            setDrugs(res.data);
            console.log(res);
        }).catch(err => {  
            console.log(err);
        });
    }

    const openDrug = (drug) => {
        console.log(drug);
        setSelectedDrug(drug);
        setDrugIsOpen(true);

    }

    return (
    <>
    {!drugIsOpen && <>
        <h1>List Of Drugs</h1>
        <div style={{backgroundColor:"beige", cursor: "pointer", width:"150px", margin:"10px"}} onClick={()=>navigateToAddDrug()}>
            Add Drug
        </div>
        <table className="drugTable">
            <thead>
                <td>Id</td>
                <td>Name</td>
                <td>Description</td>
                <td>Manufacturer</td>
                <td>Expiry Date</td>
            </thead>
            <tbody>
                {drugs.length > 0 ? drugs.map((drug) => (
                    <tr style={{cursor:"pointer"}} onClick={()=> openDrug(drug)}>
                        <td>{drug.id}</td>
                        <td>{drug.name}</td>
                        <td>{drug.description}</td>
                        <td>{drug.manufacturer}</td>
                        <td>{drug.expiryDate}</td>
                    </tr>
                )):(<>
                <tr>
                    <td colSpan="5">No drugs found</td>
                </tr>
                </>)}

            </tbody>
        </table>
    </>}
    {drugIsOpen && <>
        <SingleDrug id={selectedDrug?.id} back={()=> setDrugIsOpen(false)} />
    </>}
    
    </>
    );

}
export default DrugTable;