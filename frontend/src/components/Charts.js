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
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";

const drawChart = (data) => {
  try {
    if (!data) {
      throw new Error("Missing heading or data.");
    }

    let x_arr = [];
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
      return (
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Show Graphs</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TableContainer component={Paper}>
              <Typography>No graphs available!</Typography>
            </TableContainer>
          </AccordionDetails>
        </Accordion>
      );
    }

    return (
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Show Graphs</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TableContainer component={Paper}>
            <Typography>
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
                    {/* <Bar dataKey="pv" fill="#8884d8" /> */}
                    {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
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
                      return (
                        <Line
                          type="monotone"
                          dataKey={x}
                          stroke={color_list[i]}
                        />
                      );
                    })}
                  </LineChart>
                </div>
              </div>
            </Typography>
          </TableContainer>
        </AccordionDetails>
      </Accordion>
    );
  } catch (error) {
    console.error("An error occurred in Charts:", error.message);
  }
};

export default drawChart;
