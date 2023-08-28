import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const drawTable = (data) => {
  try {
    if (!data) {
      throw new Error("Missing heading or data.");
    }
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {Object.entries(Object.entries(data)[0][1]).map(
                (value, index) => (
                  <TableCell>{value[0]}</TableCell>
                )
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.entries(data).map((item, index) => (
              <TableRow key={index}>
                {Object.entries(item[1]).map((value, index) => (
                  <TableCell key={index}>{value[1]}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  } catch (error) {
    console.error("An error occurred in Tables:", error.message);
  }
};

export default drawTable;
