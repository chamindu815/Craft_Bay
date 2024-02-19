import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import AdminUpdateProduct from "../AdminUpdateProduct/adminupdateproduct";
import { Navigate, useNavigate, Link } from "react-router-dom";
import ProductDelete from "../Popup/ProductDelete/productdelete";

const AdminViewProduct = () => {
  const [adminviewproduct, setAdminViewProducts] = useState();
  const navigate = useNavigate();
  const [deleteOpen, setDeleteOpen] = useState(0);

  useEffect(() => {
    get();
  }, []);

  const handleCancelPopup = () => {
    setDeleteOpen(0);
  };

  const handleItemDelete = (id) => {
    setDeleteOpen(id)
    // setAdminViewProducts(adminviewproduct.filter((p) => p.id !== id))
  };

  async function get() {
    try {
      const { data } = await axios.get(
        "http://localhost:8089/craftbay/admin/product/adminViewProduct"
      );
      console.log(data);
      setAdminViewProducts(data);
    } catch (err) {
      alert(err);
    }
  }

  const getRecentCellingPrice = (adminProductSellingPriceDetailsDtos) => {
    const priceList = adminProductSellingPriceDetailsDtos?.sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    return priceList.length !== 0 ? priceList[0].price : 0;
  };

  return (
    <div>
        <Paper sx={{ width: "90%", marginLeft: "5%", marginTop: "3%" }}>
          {deleteOpen !== 0 && (
            <ProductDelete
              onCancel={handleCancelPopup}
              itemId={deleteOpen}
            />
          )}
          <TableContainer component={Paper}>
            <Table style={{ border: "solid" }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell
                    style={{
                      fontSize: "1.2em",
                      fontWeight: "bold",
                      height: "3.5em",
                    }}
                    align="center"
                  >
                    ID
                  </TableCell>
                  <TableCell
                    style={{
                      fontSize: "1.2em",
                      fontWeight: "bold",
                    }}
                    align="center"
                  >
                    Image
                  </TableCell>
                  <TableCell
                    style={{ fontSize: "1.2em", fontWeight: "bold" }}
                    align="center"
                  >
                    Product Name
                  </TableCell>
                  <TableCell
                    style={{ fontSize: "1.2em", fontWeight: "bold" }}
                    align="center"
                  >
                    Product Category
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
                    Quantity
                  </TableCell>
                  <TableCell
                    style={{ fontSize: "1.2em", fontWeight: "bold" }}
                    align="center"
                  >
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {adminviewproduct &&
                  adminviewproduct.map((curElm, idx) => (
                    <TableRow key={idx}>
                      <TableCell align="center">{curElm.id}</TableCell>
                      <TableCell align="center" style={{ width: "100px" }}>
                        <img
                          src={`data:image/jpeg;base64,${curElm.image}`}
                          alt={curElm.name}
                        ></img>
                      </TableCell>
                      <TableCell align="center">{curElm.name}</TableCell>
                      <TableCell align="center">{curElm.category}</TableCell>
                      <TableCell align="center">
                        {"Rs." +
                          getRecentCellingPrice(
                            curElm.adminProductSellingPriceDetailsDtos
                          )}
                      </TableCell>
                      <TableCell align="center">
                        {curElm.remainingQuantity}
                      </TableCell>
                      <TableCell align="center">
                        <span className="actions">
                          <BsFillPencilFill
                            onClick={() => navigate(`/adminupdateproduct/${encodeURIComponent(JSON.stringify(curElm))}`)}
                          />
                          <BsFillTrashFill
                            style={{ color: "red", marginLeft: "-40px" }}
                            onClick={() => handleItemDelete(curElm.id)}
                          />
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
    </div>
  );
};

export default AdminViewProduct;
