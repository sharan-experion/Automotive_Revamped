import axios from 'axios';
import React, { useRef, useState,  } from 'react'
import { useHistory } from 'react-router-dom';

const JobCard = () => {
    //     let obj ={ vehicleNumber: "",
    //     name: "",
    //     mobileNumber: '',
    //     vehicleType: "",
    //     engineNumber: "",
    //     chaseNumber: "",
    // }

    const [customerDetails, setCustomerDetails] = useState();
    const [estimatedetails, setEstimationDetails] = useState([])
    const vehicleNumInputRef = useRef();
    const history = useHistory()
    const handleComplete =(res,id)=>{
        sessionStorage.setItem("customerDetails",JSON.stringify(customerDetails))
        sessionStorage.setItem("estimId",JSON.stringify(id))
        history.push('/invoice')
    }
    const handleSearch = () => {
        if (vehicleNumInputRef.current.value.length == 8) {
            axios.get(`http://127.0.0.1:8000/estimate/getcustomer/${vehicleNumInputRef.current.value}`)
                .then(response => {
                    if (response.data.length !== 0) {
                        setCustomerDetails(response.data[0])
                        axios.get(`http://127.0.0.1:8000/estimate/estimatedetails/${vehicleNumInputRef.current.value}`)
                            .then(res => {
                                setEstimationDetails(res.data)
                                // console.log(data.data);
                            })
                    }
                    else {
                        alert("Vehicle number does not exist")
                    }


                })
        }


    }
    return (
        <div className='text-center mt-5'>

            <div >

                <div >

                    <h3 className='pt-5'>Click on search icon</h3>
                    <div>
                        <input type="text" placeholder="Enter the Vehicle Number" ref={vehicleNumInputRef} required maxLength={8} onChange={handleSearch} /><br></br>


                    </div>
                </div>

            </div>
            <div className='text-center  '>

                <table class="table position-relative start-0">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">Vehicle Number</th>
                            <th scope="col">Name</th>
                            <th scope="col">Mobile Number</th>
                            <th scope="col">Vehicle Type</th>
                            <th scope="col">Engine Number</th>
                            <th scope="col">Chase Number</th>

                        </tr>
                    </thead>

                    <tbody>
                        <tr let arr of >
                            <th scope="row">{customerDetails?.vehicleNumber}</th>
                            <td>{customerDetails?.name}</td>
                            <td>{customerDetails?.mobileNumber}</td>
                            <td>{customerDetails?.vehicleType}</td>
                            <td>{customerDetails?.engineNumber}</td>
                            <td>{customerDetails?.chaseNumber}</td>


                        </tr>

                    </tbody>
                </table>


            </div>
            <div className='text-center  '>

                <table class="table position-relative start-0">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">Estimation Id</th>
                            <th scope="col">Date of Estimation</th>
                            <th scope="col">Total Cost</th>
                            <th scope="col">Work Status</th>

                        </tr>
                    </thead>

                    <tbody>
                        {
                            estimatedetails.map(function (arr, i) {
                                return <tr>
                                    <th scope="row">{arr?.id}</th>
                                    <td>{arr?.date_of_estimation}</td>
                                    <td>{arr?.total_cost}</td>
                                    <td> {arr?.work_status && <button className='btn btn-success' onClick={()=>{handleComplete("completed",arr?.id)}} >Completed</button>} {!arr?.work_status && <button className='btn btn-danger' onClick={()=>{handleComplete("inCompleted",arr?.id)}} >InCompleted</button>}</td>

                                </tr>
                            })

                        }
                    </tbody>
                </table>


            </div>


        </div>


    )

};

export default JobCard;