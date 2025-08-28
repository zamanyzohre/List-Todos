import { useDispatch, useSelector } from "react-redux";
import { filterTodo } from "../../redux/todo/action";

function Filter() {
  const { loading } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  function handleFilter(e) {
    dispatch(filterTodo(e.target.value));
  }

  return (
    <div>
      <h5 className="mb-2">Filter</h5>
      <div className="col-2">
        <select onChange={(e) => handleFilter(e)} className="form-select" aria-label="Default select example" >
          <option value="200">all</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="30">30</option>
          <option value="50">50</option>
          <option value="100">100</option>
          <option value="150">150</option>
        </select>
      </div>
       {loading && (
        <div className="col-md-12 text-center">
          <div className="spinner-border spinner-border-sm mt-5"></div>
        </div>
      )}
    </div>
  );
}

export default Filter;
