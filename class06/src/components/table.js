import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Hidden from '@material-ui/core/Hidden';


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

export default function BasicTable() {
  return (
    <Hidden mdDown>


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

    </Hidden>



  );
}
