import { useState } from "react"
import { useDispatch } from "react-redux"
import { postFetchingTodo } from "../../redux/todo/action"
import Swal from 'sweetalert2'

function CreateTodo() {
    const [newTodo,setNewTodo] = useState('')
    const dispatch = useDispatch()

    function handleState(e){
        setNewTodo(e.target.value)
            // e.target.value = ''
        
    }

    function handleSubmit(e){
        e.preventDefault()
        dispatch(postFetchingTodo(newTodo))
        Swal.fire({
            title:'Todo Add',
            icon:'success',
            showConfirmButton:false,
            timerProgressBar:true,
            timer:3000,
            toast: "true",
            position: "top",
        })
    }

  return (
    <div>
        <h4 className="fw-bold mb-4">Create Todo :</h4>
        <form className="d-flex" onSubmit={(e)=>handleSubmit(e)}>
            <div className="col-md-6">
                <input onChange={e=>handleState(e)} type="text" className="form-control" placeholder="Todo Title ..." />
                <p className="text-danger" style={{fontSize:"0.85rem"}}>
                    {newTodo? "" : "title is required"}
                </p>
            </div>
            <div className="col-auto">
                <button className="btn btn-dark ms-4" type="submit">Create</button>
            </div>
        </form>
    </div>
  )
}

export default CreateTodo