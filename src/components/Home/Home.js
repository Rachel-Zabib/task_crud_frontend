import React,{useEffect,useState} from 'react'
import './Home.css'
import axios from 'axios';

export default function Home(props){
    const [tasks, settasks] = useState([])

    useEffect(() => { 
        getTasks();
    }, [])

    let inputChange=(e,task)=>{
        axios.put(`http://localhost:8000/api/tasks/${task.id}`,{completed:e.target.checked}).then((response)=>{
            getTasks();
        })
    }
    let deleteButton=(e,task)=>{
        axios.delete(`http://localhost:8000/api/tasks/${task.id}`).then((response)=>{
            getTasks();
        })
    }

    let getTasks=()=>{
        axios.get("http://localhost:8000/api/tasks").then((response)=>{
            settasks(response.data);
        })
    }

    return (
        <div className="homeDiv">
            <br/>
            <br/>
            <div class="container bootstrap snippets bootdey">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="main-box no-header clearfix">
                            <div class="main-box-body clearfix">
                                <div class="table-responsive">
                                    <table class="table user-list">
                                        <thead>
                                            <tr>
                                                <th class="text-center">&nbsp;</th>
                                                <th ><span>Task</span></th>
                                                <th class="text-center">&nbsp;</th> 
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {tasks.map((task,i)=>{
                                                return (
                                                    <tr key={i}>
                                                        <td style={{width: "20%"}} class="text-center">
                                                            {task.completed?
                                                                <input key={`${i}input1`} type="checkbox" checked onChange={(e)=>inputChange(e,task)}/>:
                                                                <input key={`${i}input2`} type="checkbox" onChange={(e)=>inputChange(e,task)}/>}    
                                                        </td>
                                                        <td className={`textTask ${task.completed&&"completedTask"}`}><span>{i+1}. </span><span> {task.text}</span></td>
                                                        <td style={{width: "20%"}}>
                                                            <div className="deleteDiv" onClick={(e)=>{deleteButton(e,task)}}>
                                                                <span class="fa-stack">
                                                                    <i class="fa fa-square fa-stack-2x"></i>
                                                                    <i class="fa fa-trash-o fa-stack-1x fa-inverse"></i>
                                                                </span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  
}

  
  