import { useDispatch } from "react-redux";
import { deleteFetchingTodo } from "../../redux/todo/action";
import Swal from "sweetalert2";
import { useState } from "react";

function DeleteTodo({todo}) {
    const [loading,setLoading] = useState(false)
    const dispatch = useDispatch();

async function handleDelete(todo){
    setLoading(true)
    await dispatch(deleteFetchingTodo(todo))
    setLoading(false)
    Swal.fire({
        title:'Todo Deleted',
        icon:'warning',
        showConfirmButton:false,
        timerProgressBar:true,
        timer:3000,
        toast: "true",
        position: "top",
    })
}

  return (
    <div>
        <i onClick={()=>handleDelete(todo)} className="bi bi-trash-fill cursor-pointer"></i>
        {loading && (
          <div className="spinner-border spinner-border-sm ms-1"></div>
        )}
    </div>
  )
}

export default DeleteTodo