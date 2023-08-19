import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  LineChart,
  Line,
} from "recharts";


function drawChart(data) {
  let x_arr = [];
  // iterate the outer array to look at each item in that array
  for (var i = 0; i < data.length; i++) {
    let prompt = "";
    let curr_obj = data[i];
    for (let key in curr_obj) {
      // console.log(key, yourobject[key]);
      if (isNaN(curr_obj[key])) {
        prompt += key + ": " + curr_obj[key] + ", ";
      }
    }
    x_arr.push(prompt);
  }

  let input_data = [];
  let list_a = [];
  let checkChart = false;
  for (var i = 0; i < data.length; i++) {
    let curr_obj = data[i];
    let obj1 = {};
    let key_list = [];

    for (let key in curr_obj) {
      // console.log(key, yourobject[key]);
      if (!isNaN(curr_obj[key])) {
        // obj1[{ key }] = Number(curr_obj[key]);
        checkChart = true;
        obj1[key] = Number(curr_obj[key]);
        key_list.push(key);
      }
      list_a = key_list;
    }
    if (Object.keys(obj1).length) {
      obj1["name"] = x_arr[i];
      obj1["id"] = i;
      input_data.push(obj1);
      obj1 = {};
    }
  }
  console.log(input_data);
  console.log(list_a);
  let color_list = [
    "#82ca9d",
    "#8884d8",
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "red",
    "pink",
  ];

  if (!checkChart) {
    return <Typography>No graphs available!</Typography>;
  }

  return (
    <div>
      <div className="bar-chart">
        <BarChart
          width={800}
          height={600}
          data={input_data}
          margin={{
            top: 5,
            right: 5,
            left: 5,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis xAxisId="0" dataKey="id" />
          {/* <XAxis xAxisId="1" dataKey="name" /> */}
          <YAxis width={100} />
          <Tooltip />
          <Legend />
          {/* <Bar dataKey="MaxLatency" fill="#82ca9d" /> */}
          {/* <Bar dataKey="MinLatency" fill="#82ca9d" /> */}
          {list_a.map(function (x, i) {
            return <Bar dataKey={x} fill={color_list[i]} />;
          })}
          {/* <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" /> */}
        </BarChart>
      </div>
      <div className="line-chart">
        <LineChart
          width={800}
          height={600}
          data={input_data}
          margin={{
            top: 5,
            right: 5,
            left: 5,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          {/* <XAxis dataKey="name" /> */}
          <XAxis xAxisId="0" dataKey="id" />

          <YAxis width={100} />
          <Tooltip />
          <Legend />
          {list_a.map(function (x, i) {
            return <Line type="monotone" dataKey={x} stroke={color_list[i]} />;
          })}
        </LineChart>
      </div>
    </div>
  );
}

const ShowResult = (props) => {
//   let arr = [];
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
    if (!state.result) {
      console.log({ user_query: userQuery, table_name: tableName });
      return await fetch("http://localhost:5000/api/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user_query: userQuery, table_name: tableName }),
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
  };

  // if (!result) {
  if (!state.result) {
    return <div>hello</div>;
  } else if (Array.isArray(Object.entries(state.result))) {
    console.log("check properly");
    console.log(state.result);
    console.log(state.prompt);
    console.log(state.query);
    let x = Object.entries(state.result)[0][1];
    console.log(x);
    let q = Object.entries(Object.entries(state.result)[0][1]);
    console.log(q);
    for (var z = 0; z < q.length; z++) {
      console.log(q[z][0]);
    }

    let y = Object.entries(state.result);

    console.log(y);
    for (var z = 0; z < y.length; z++) {
      // let w=Object.entries[y[z]];
      // console.log(w);
      let r = Object.entries(y[z][1]);
      for (var z1 = 0; z1 < r.length; z1++) {
        console.log(r[z1][1]);
      }
    }
    // arr = Object.entries( state.result )[0][1].result;
    // console.log(arr);
    // console.log(state);
    // console.log(state.result);
    // console.log(state.prompt);
    // console.log(state.query);
    // arr = Object.entries({ new_result })[0][1].result;
    // console.log(arr);
  }

  return (
    <div className="showResult">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {Object.entries(Object.entries(state.result)[0][1]).map(
                (value, index) => (
                  <TableCell>{value[0]}</TableCell>
                )
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.entries(state.result).map((item, index) => (
              <TableRow key={index}>
                {Object.entries(item[1]).map((value, index) => (
                  <TableCell key={index}>{value[1]}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div className="root">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Show graphs</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TableContainer component={Paper}>
              <Typography>{drawChart(state.result)}</Typography>
            </TableContainer>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Show Prompt</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TableContainer component={Paper}>
              <Typography>{state.prompt}</Typography>
            </TableContainer>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Show Query</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TableContainer component={Paper}>
              <Typography>{state.query}</Typography>
            </TableContainer>
          </AccordionDetails>
        </Accordion>
      </div>
      {/* D3 bar chart */}
      {/* <div>{drawChart(arr)}</div> */}
    </div>
  );
};

export default ShowResult;
