import React, { useState } from "react";
import { actionCreators, RootStore } from "../store";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState("");
  // const dispatch = useDispatch();
  const { searchRepositories } = useActions();
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("test");
    // dispatch(actionCreators.searchRepositories(term) as any);
    searchRepositories(term);
  };
  // const { data, error, loading} = useSelector((s:RootStore) => s.repositories);
  const { data, error, loading } = useTypedSelector((s) => s.repositories);

  console.log(data);

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <button
        type="submit"
        style={{ marginLeft: "10px", cursor: "pointer", marginBottom: "20px" }}
      >
        Search
      </button>
      <hr />
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error && !loading && data.map((name) => <div key={name}>{name}</div>)}
    </form>
  );
};
export default RepositoriesList;
