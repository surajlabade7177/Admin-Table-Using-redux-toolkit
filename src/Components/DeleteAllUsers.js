import './DeleteAllUsers.css';
// import { deleteUsers } from '../Store/Slices/UserSlice';  // imported for micro-reducers.
import { deleteUsers } from '../actions/actions';   // imported for the createActions() & assign in it to the dispatch().
import { useDispatch } from 'react-redux';

const DeleteAllUsers = ()=>{

    const dispatch = useDispatch();

    const clearAll = ()=>{
        dispatch(deleteUsers());
    }

    return(
        <div>
            <button className="btn btn-danger deletebtn" onClick={()=>{clearAll()}}>Clear All</button>
        </div>
    )
}

export default DeleteAllUsers;