import { useSelector } from "react-redux";  // importing useSelector.
import { removeUser } from "../Store/Slices/UserSlice";
import { useDispatch } from "react-redux";

const Displayusers = ()=>{

    const data = useSelector((item)=>{return item.users});   // accessing data with help of useSelector.
    const dispatch = useDispatch();

    // console.log("Data : ",data);   // printing data.

    const deleteUser = (payload) =>{
        dispatch(removeUser(payload))
    }

    return(
        <div>
            {
                data.map((user,index)=>(
                    <li key={index}>{user}
                    <button className="btn" onClick={()=>{deleteUser(index)}}>&#10060;</button>
                    </li>
                ))
            }
        </div>
    )
}

export default Displayusers;