import DeleteAllUsers from "./DeleteAllUsers";
import './UserDetails.css';
import { fakeUserData } from "../api/fake_data";    // importing fakeUSerData.
import { useDispatch } from "react-redux";          // importing usDispatch.
import { addUser } from "../Store/Slices/UserSlice";  // importing addUSer reducer.
import Displayusers from "./Displayusers";

const UserDetails = ()=>{

    const dispatch = useDispatch();

    const addNewUser = (payload)=>{   // fake data in payload.
        console.log(payload);
        dispatch(addUser(payload));    // Here instead of "type" we are directly calling the addUser reducer from slice using dispatch.
    }

    return(
        <div className="container">
            <div className="admin-table">
                <div className="admin-subtitle"><h4>List of Users Details</h4></div>
                <button className="btn btn-success" onClick={()=>{addNewUser(fakeUserData())}}>Add New Users</button>
            </div> <br/>
            <div className="userlist">
            <ul className="ul">
                <Displayusers></Displayusers>  {/* Here we are calling the Displayusers component */}
            </ul>
            </div>
            <hr/>
            <DeleteAllUsers />
        </div>
    )
}

export default UserDetails;