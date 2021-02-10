import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { render } from 'react-dom';
import Score from "./Score";


const ResultsAtomize = () => {

  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  function createData(id, name, movie, character, score, button) {
    return { id, name, movie, score, character, button };
  }

  var buttonpressed = false;

  const button =
    <button onClick={(e) => buttonpressed = !buttonpressed}
    > Display </button>




  const rows = [
    createData(1,'Einav', 'Lion King The Morning Lesson', 'Simba', 100, button),
    createData(2,'Einav', 'The Lion, The Witch and The Wardrobe Scene 2', 'Tumnus', 90, button),
    createData(3,'Hila', 'Lion King The Morning Lesson', 'Mufasa', 100, button),
    createData(4, 'Hila', 'The Lion, The Witch and The Wardrobe Scene 2', 'Lucy', 85, button),
  ];

  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });

  const classes = useStyles();


  return (
    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="right">Movie&nbsp;</StyledTableCell>
              <StyledTableCell align="right">Score&nbsp;</StyledTableCell>
              <StyledTableCell align="right">Open Details&nbsp;</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.movie}</StyledTableCell>
                <StyledTableCell align="right">{row.score}</StyledTableCell>
                <StyledTableCell align="right">{row.button}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {buttonpressed ? (
     <label>quality score:100; 
     stress score:100</label>
      ) : null}
    </div>
  );
};
render(<ResultsAtomize />, document.getElementById("root"));


