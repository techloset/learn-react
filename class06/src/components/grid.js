import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Grid from '@material-ui/core/Grid';


const initialStudentsData = [
  {
    name: "Naveed",
    batch: "Batch3",
    section: "D",
    class: "web and Mobile",
    rollNo: 1221,
  },
  {
    name: "Amnan",
    batch: "Batch3",
    section: "D",
    class: "web and Mobile",
    rollNo: 232,
  },
  {
    name: "Adnan",
    batch: "Batch3",
    section: "D",
    class: "web and Mobile",
    rollNo: 232,
  },

  {
    name: "Hasnat",
    batch: "Batch3",
    section: "D",
    class: "web and Mobile",
    rollNo: 2321,
  },
  {
    name: "Ali",
    batch: "Batch3",
    section: "D",
    class: "web and Mobile",
    rollNo: 232,
  },
];

export default function BasicGrid() {
  return (
    <Grid container spacing={3}>
      <Grid  item xs={12} md={12} sm={12}> 
        <Paper> Lorem  Data </Paper>
        </Grid>
      <Grid item xs={12} md={6} sm={6}>
       <Paper> SOme data</Paper>
     </Grid>
     <Grid item xs={12} sm={6} md={6}>
  
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Student Name</TableCell>
            <TableCell align="right">Roll No.</TableCell>
            <TableCell align="right">Batch</TableCell>
            <TableCell align="right">Section</TableCell>
            <TableCell align="right">Class</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {initialStudentsData.map((student) => {
            return (
              <TableRow>
                <TableCell component="th" scope="row">
                  {student.name}
                </TableCell>
                <TableCell align="right"> {student.rollNo}</TableCell>
                <TableCell align="right">{student.batch}</TableCell>
                <TableCell align="right">{student.section}</TableCell>
                <TableCell align="right">{student.class}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
    </Grid>
    </Grid>
  );
}
