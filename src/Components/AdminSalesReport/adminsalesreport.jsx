import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./adminsalesreport.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { connect } from "react-redux";
import { products } from "../../Actions";
import Moment from "moment";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const { getSalesReportDetails } = products;

const AdminSalesReport = ({ getSalesReportDetails, salesReportData }) => {
  const tableColumns = [
    { header: "Product Name", dataKey: "productName" },
    { header: "Category", dataKey: "category" },
    { header: "Quantity", dataKey: "sellQuantity" },
    { header: "Price (Rs:)", dataKey: "avgSellPrice" },
    { header: "Total Sales (Rs:)", dataKey: "totalSales" },
  ];
  const today = new Date();

  const defaultStartDate = new Date(today);
  defaultStartDate.setMonth(defaultStartDate.getMonth() - 1);

  const [startDate, setStartDate] = useState(defaultStartDate);
  const [endDate, setEndDate] = useState(today);

  useEffect(() => {
    getSalesReportDetails({
      startDate: Moment(startDate).format("YYYY-MM-DD"),
      endDate: Moment(endDate).format("YYYY-MM-DD"),
    });
  }, []);

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const loadReportData = () => {
    getSalesReportDetails({
      startDate: Moment(startDate).format("YYYY-MM-DD"),
      endDate: Moment(endDate).format("YYYY-MM-DD"),
    });
  };

  const downloadPdfDocument = () => {
    const doc = new jsPDF();
    const title = `Sales Report ${Moment(startDate).format(
      "YYYY-MM-DD"
    )} - ${Moment(endDate).format("YYYY-MM-DD")}`;
    doc.setFontSize(16); // Set title font size
    doc.setFont("times", "bold");

    const titleWidth =
      (doc.getStringUnitWidth(title) * doc.internal.getFontSize()) /
      doc.internal.scaleFactor;
    const textOffset = (doc.internal.pageSize.width - titleWidth) / 2; // Calculate text's x offset to center it

    doc.text(title, textOffset, 20);
    autoTable(doc, {
      startY: 30,
      columns: tableColumns,
      body: salesReportData,
    });

    doc.save(
      `Sales Report_${Moment(startDate).format("YYYY-MM-DD")} - ${Moment(
        endDate
      ).format("YYYY-MM-DD")}`
    );
  };

  return (
    <div className="admin-sales-report-bg">
      <div>
        <div>
          <div className="calender">
          <p className="calender-title-start">Start Date</p>
            <div className="calender-start">
              <DatePicker
                className="date"
                selected={startDate}
                onChange={handleStartDateChange}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                placeholderText="Start Date"
                dateFormat="yyyy-MM-dd"
              />
            </div>
            <p className="calender-title-end">End Date</p>
            <div className="calender-end">
              <DatePicker
                className="date"
                selected={endDate}
                onChange={handleEndDateChange}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                placeholderText="End Date"
                dateFormat="yyyy-MM-dd"
              />
            </div>
          </div>
          <button
            className="admin-sales-report-search-btn"
            onClick={loadReportData}
          >
            Search
          </button>
        </div>
        <h2 className="admin-sales-report-title">Sales Report</h2>
        <Paper
          sx={{
            width: "80em",
            marginLeft: "5%",
            marginTop: "2%",
            marginBottom: "3%",
          }}
        >
          <TableContainer component={Paper} style={{ marginTop: "6em" }}>
            <Table
              style={{ border: "solid" }}
              aria-label="simple table"
              id="table-to-print"
            >
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
                    Quantity
                  </TableCell>

                  <TableCell
                    style={{ fontSize: "1.2em", fontWeight: "bold" }}
                    align="center"
                  >
                    Price (RS:)
                  </TableCell>

                  <TableCell
                    style={{ fontSize: "1.2em", fontWeight: "bold" }}
                    align="center"
                  >
                    Total Sales (RS:)
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
                {Array.isArray(salesReportData) &&
                  salesReportData.map((row) => (
                    <TableRow
                      key={row.productName}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="center">{row.productName}</TableCell>
                      <TableCell align="center">{row.category}</TableCell>
                      <TableCell align="center">{row.sellQuantity}</TableCell>
                      <TableCell align="center">{row.avgSellPrice}</TableCell>
                      <TableCell align="center">{row.totalSales}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </div>
      <div className="admin-sales-report-download-btn-container">
        <button
          className="admin-sales-report-download-btn"
          onClick={downloadPdfDocument}
        >
          Download
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    salesReportData: state.craftbay.salesReportData,
  };
};

const mapDispatchToProps = {
  getSalesReportDetails,
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminSalesReport);
