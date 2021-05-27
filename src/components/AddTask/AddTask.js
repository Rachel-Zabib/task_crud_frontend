import React,{useState} from 'react'
import './AddTask.css'
import axios from 'axios'

export default function AddTask(props){
    const [state, setstate] = useState({txt:""})

    let onClickForm=(e)=>{
        e.preventDefault();
        axios.post(`http://localhost:8000/api/tasks`,{completed:false,text:state.txt}).then((response)=>{
            props.history.push("/")
        })    
    }

    return (
        <div>
            <h1 className="addH1">Add Task</h1>
            <div className="formDiv">
                <form onSubmit={onClickForm}>
                    <div class="mb-3">
                        <label for="txt" class="form-label">Text</label>
                        <input type="text" class="form-control" id="txt" value={state.txt} onChange={(e)=>setstate({txt:e.target.value})}/>
                    </div>
                    <button class="btn btn-primary" >Add</button>
                </form>
            </div>       
        </div>
    )
}
