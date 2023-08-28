import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

import drawTable from "./Table";
import drawChart from "./Charts";
import ShowCards from "./Cards";

const ShowResult = (props) => {
  let params = useParams();
  console.log(params);
  let userQuery = params.query;
  let tableName = params.table;
  const [state, setState] = useState({
    result: null,
    prompt: null,
    query: null,
  });

  useEffect(() => {
    func();
  });

  const func = async () => {
    // if (!result) {
    try {
      if (!state.result) {
        console.log({ user_query: userQuery, table_name: tableName });
        return await fetch("http://localhost:5000/api/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user_query: userQuery,
            table_name: tableName,
          }),
        })
          .then((data) => data.json())
          // .then((data) => setResult({result: data[0].data}))
          .then((data) =>
            setState({
              result: data[0].data,
              prompt: data[1],
              query: data[2],
            })
          );
      }
    } catch (error) {
      console.error("An error occurred while fetching the data", error.message);
    }
  };

  // if (!result) {
  if (!state.result) {
    return <div>hello</div>;
  } else if (Array.isArray(Object.entries(state.result))) {
    console.log(state.result);
    console.log(state.prompt);
    console.log(state.query);
  }

  return (
    <div className="showResult">
      <h2>Results: </h2>
      <div className="result-table">{drawTable(state.result)}</div>
      <div className="result-chart">
        {drawChart(state.result)}
        {ShowCards("Prompt", state.prompt)}
        {ShowCards("Query", state.query)}
      </div>
    </div>
  );
};

export default ShowResult;
