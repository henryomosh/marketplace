import { useDispatch, useSelector } from "react-redux";
import { fetchApi } from "../redux/slice/apiSlice";

function FetchApi() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  console.log("state", state);
  return (
    <div className="App">
      <button onClick={(e) => dispatch(fetchApi())}>Click</button>
      <br />
    </div>
  );
}

export default FetchApi;
