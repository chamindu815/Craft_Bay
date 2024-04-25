import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import ProductDelete from "../Popup/ProductDelete/productdelete";
import { connect } from 'react-redux';
import { products } from '../../Actions';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import "./adminviewproduct.css"


const { getProducts } = products;
const AdminViewProduct = ({ getProducts, products }) => {
  const navigate = useNavigate();
  const [deleteOpen, setDeleteOpen] = useState(0);

  useEffect(() => {
    console.log('xxxxx admin view products');
    getProducts()
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      NotificationManager.success('Products Load Successfully!', 'Success', 3000);
    } 
    // else {
      // NotificationManager.error('Error message', 'Error', 5000);
    // }
  }, [products]);

  const handleCancelPopup = () => {
    setDeleteOpen(0);
  };

  const handleItemDelete = (id) => {
    setDeleteOpen(id)
  };

  const getRecentCellingPrice = (productSellingPriceDetailsDtos) => {
    const priceList = productSellingPriceDetailsDtos?.sort((a, b) => new Date(b.date) - new Date(a.date))
    return priceList?.length !== 0 ? priceList[0].price : 0
  }

  return (
    <div className="admin-view-product-bg">
      <Paper sx={{ width: "95%", marginLeft: "2.5%", marginTop: "2.5%" }}>
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
              {products &&
                products.map((curElm, idx) => (
                  <TableRow key={idx}>
                    <TableCell align="center" style={{ width: "100px" }}>
                      <img
                        src={`data:image/jpeg;base64,${curElm.image}`}
                        alt={curElm.name}
                      ></img>
                    </TableCell>
                    <TableCell align="center">{curElm.name}</TableCell>
                    <TableCell align="center">{curElm.category}</TableCell>
                    <TableCell align="center">
                      {"Rs." + getRecentCellingPrice(curElm.adminProductSellingPriceDetailsDtos)}
                    </TableCell>
                    <TableCell align="center">
                      {curElm.remainingQuantity}
                    </TableCell>
                    <TableCell align="center">
                      <span className="actions">
                        <BsFillPencilFill onClick={() => navigate(`/adminupdateproduct/${curElm.id}`)} />
                        {/* <BsFillTrashFill style={{ color: 'red', marginLeft: '-100px' }}
                      onClick={() => setDeleteOpen(true)}
                    /> */}

                        <BsFillTrashFill
                          style={{ color: "red", marginLeft: "-100px" }}
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
      <NotificationContainer />
    </div>
  );
};


const mapStateToProps = (state) => {
  return {
    products: state.craftbay.products,
  };
};

const mapDispatchToProps = {
  getProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminViewProduct);
