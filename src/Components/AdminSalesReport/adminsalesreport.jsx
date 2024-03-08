import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./adminsalesreport.css";

const createData = (name, calories, fat, carbs) => {
  return { name, calories, fat, carbs };
};

const AdminSalesReport = () => {
  const rows = [
    createData("Frozen", 159, 6.0, 24),
    createData("Ice ", 237, 9.0, 37),
    createData("Eclair", 262, 16.0, 24),
    createData("Cupcake", 305, 3.7, 67),
    createData("Gingerbread", 356, 16.0, 49),
  ];

  return (
    <div className="admin-sales-report-bg">
      <div>
        <h2 className="admin-sales-report-title">Sales Report</h2>
        <Paper sx={{ width: "80em", marginLeft: "5%", marginTop: "2%", marginBottom:"3%" }}>
          <TableContainer component={Paper}>
            <Table style={{ border: "solid" }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell
                    style={{
                      fontSize: "1.2em",
                      fontWeight: "bold",
                    }}
                    align="center"
                  >
                    Product Name
                  </TableCell>
                  <TableCell
                    style={{ fontSize: "1.2em", fontWeight: "bold" }}
                    align="center"
                  >
                    Quantity
                  </TableCell>
                  <TableCell
                    style={{ fontSize: "1.2em", fontWeight: "bold" }}
                    align="center"
                  >
                    Price
                  </TableCell>
                  <TableCell
                    style={{ fontSize: "1.2em", fontWeight: "bold" }}
                    align="center"
                  >
                    Date
                  </TableCell>
                  {/* <TableCell
                  style={{ fontSize: "1.2em", fontWeight: "bold" }}
                  align="center"
                >
                  Quantity
                </TableCell>
                <TableCell
                  style={{ fontSize: "1.2em", fontWeight: "bold" }}
                  align="center"
                >
                  Action
                </TableCell> */}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="center">{row.name}</TableCell>
                    <TableCell align="center">{row.calories}</TableCell>
                    <TableCell align="center">{row.fat}</TableCell>
                    <TableCell align="center">{row.carbs}</TableCell>
                    <TableCell align="center">{row.protein}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </div>
      <div className="admin-sales-report-download-btn-container">
        <button className="admin-sales-report-download-btn">Download</button>
      </div>
    </div>
  );
};

export default AdminSalesReport;
