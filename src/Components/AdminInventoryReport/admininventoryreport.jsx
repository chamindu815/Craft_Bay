import React, { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./admininventoryreport.css";
import { connect } from "react-redux";
import { products } from "../../Actions";
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

const { getInventoryReportDetails } = products;

// const createData = (name, calories, fat, carbs) => {
//   return { name, calories, fat, carbs };
// };

const Admininventoryreport = ({
  getInventoryReportDetails,
  inventoryReportData,
}) => {
  const tableColumns = [
    { header: "Product Name", dataKey: "productName" },
    { header: "Category", dataKey: "category" },
    { header: "Remaining Quantity", dataKey: "remainingQuantity" },
    { header: "Buying Price (Rs:)", dataKey: "buyingPrice" },
    { header: "Selling Price (Rs:)", dataKey: "sellingPrice" },
  ];

  useEffect(() => {
    getInventoryReportDetails();
  }, []);


  const downloadPdfDocument = () => {
    const doc = new jsPDF();
    const title = `Inventory Report`;
    doc.setFontSize(16);
    doc.setFont("times", "bold");

    const titleWidth = doc.getStringUnitWidth(title) * doc.internal.getFontSize() / doc.internal.scaleFactor;
    const textOffset = (doc.internal.pageSize.width - titleWidth) / 2; // Calculate text's x offset to center it

    doc.text(title, textOffset, 20);
    autoTable(doc, {
      startY: 30,
      columns: tableColumns,
      body: inventoryReportData,
      // Customize as needed
    });

    doc.save(`Inventory Report`);
  };

  return (
    <div className="admin-inventory-report-bg">
      <div>
        <h2 className="admin-invent-report-title">Inventory Report</h2>
        <Paper
          sx={{
            width: "80em",
            marginLeft: "5%",
            marginTop: "2%",
            marginBottom: "3%",
          }}
        >
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
                    Category
                  </TableCell>
                  <TableCell
                    style={{ fontSize: "1.2em", fontWeight: "bold" }}
                    align="center"
                  >
                    Remaining Quantity
                  </TableCell>
                  <TableCell
                    style={{ fontSize: "1.2em", fontWeight: "bold" }}
                    align="center"
                  >
                    Latest Buying Price (Rs:)
                  </TableCell>
                  <TableCell
                    style={{ fontSize: "1.2em", fontWeight: "bold" }}
                    align="center"
                  >
                    Latest Selling Price (Rs:)
                  </TableCell>
                  {/*<TableCell
                  style={{ fontSize: "1.2em", fontWeight: "bold" }}
                  align="center"
                >
                  Action
                </TableCell> */}
                </TableRow>
              </TableHead>
              <TableBody>
                {Array.isArray(inventoryReportData) &&
                  inventoryReportData.map((row) => (
                    <TableRow
                      key={row.productName}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="center">{row.productName}</TableCell>
                      <TableCell align="center">{row.category}</TableCell>
                      <TableCell align="center">{row.remainingQuantity}</TableCell>
                      <TableCell align="center">{row.buyingPrice}</TableCell>
                      <TableCell align="center">{row.sellingPrice}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </div>
      <div className="admin-invent-report-download-btn-container">
        <button className="admin-invent-report-download-btn" onClick={downloadPdfDocument}>Download</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    inventoryReportData: state.craftbay.inventoryReportData,
  };
};

const mapDispatchToProps = {
  getInventoryReportDetails,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Admininventoryreport);
