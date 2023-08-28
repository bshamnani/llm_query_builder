import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

const ShowCards = (heading, data) => {
  try {
    if (!heading || !data) {
      throw new Error("Missing heading or data.");
    }
    return (
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Show {heading}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TableContainer component={Paper}>
            <Typography>{data}</Typography>
          </TableContainer>
        </AccordionDetails>
      </Accordion>
    );
  } catch (error) {
    console.error("An error occurred in ShowCards:", error.message);
  }
};

export default ShowCards;
