import { useDispatch } from "react-redux";
import { putFetchingTodo } from "../../redux/todo/action";
import Swal from "sweetalert2";
import { useState } from "react";

function UpdateTodo({todo}) {
    const [loading,setLoading] = useState(false)
    const dispatch = useDispatch()

  async function handleChecked(todo) {
    setLoading(true)
    await dispatch(putFetchingTodo(todo));
    setLoading(false)
    Swal.fire({
        title:'Todo Update',
        icon:'success',
        showConfirmButton:false,
        timerProgressBar:true,
        timer:3000,
        toast: "true",
        position: "top",
    })
  }

  return (
    <>
     {loading && (
          <div className="spinner-border spinner-border-sm me-1"></div>
      )}
    {todo.completed ? (
        <i onClick={()=>handleChecked(todo)} className="bi bi-check-all me-1 fs-4 cursor-pointer"></i>
    ) : (
        <i onClick={()=>handleChecked(todo)} className="bi bi-check me-1 fs-4 cursor-pointer"></i>
    )}
     
    </>
  )
}

export default UpdateTodo;
