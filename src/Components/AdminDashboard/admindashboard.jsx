import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import AdminAddProduct from "../AdminAddProduct/adminaddproduct";
import AdminViewProduct from "../AdminViewProduct/adminviewproduct";
import AdminInventoryReport from "../AdminInventoryReport/admininventoryreport";
import AdminSalesReport from "../AdminSalesReport/adminsalesreport";
import AdminOrder from "../AdminOrder/adminorder";

function samePageLinkNavigation(event) {
  if (
    event.defaultPrevented ||
    event.button !== 0 || // ignore everything but left-click
    event.metaKey ||
    event.ctrlKey ||
    event.altKey ||
    event.shiftKey
  ) {
    return false;
  }
  return true;
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        // Routing libraries handle this, you can remove the onClick handle when using them.
        if (samePageLinkNavigation(event)) {
          event.preventDefault();
        }
      }}
      aria-current={props.selected && "page"}
      {...props}
    />
  );
}

LinkTab.propTypes = {
  selected: PropTypes.bool,
};

export default function NavTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    // event.type can be equal to focus with selectionFollowsFocus.
    if (
      event.type !== "click" ||
      (event.type === "click" && samePageLinkNavigation(event))
    ) {
      setValue(newValue);
    }
  };

  const renderTabContent = (value) => {
    switch (value) {
      case 0:
        return <AdminViewProduct />;
      case 1:
        return <AdminAddProduct />;
      case 2:
        return <AdminOrder />;
      case 3:
        return <AdminInventoryReport />;
      case 4:
        return <AdminSalesReport />;
      default:
        return null;
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="nav tabs example"
        role="navigation"
      >
        <LinkTab
          style={{
            fontSize: "20px",
            margin: "10px",
            fontWeight: "bold",
            color: "#000000",
          }}
          label="Products"
        />
        <LinkTab
          style={{
            fontSize: "20px",
            margin: "10px",
            fontWeight: "bold",
            color: "#000000",
          }}
          label="Add Product"
        />

        <LinkTab
          style={{
            fontSize: "20px",
            margin: "10px",
            fontWeight: "bold",
            color: "#000000",
          }}
          label="Orders"
        />
        <LinkTab
          style={{
            fontSize: "20px",
            margin: "10px",
            fontWeight: "bold",
            color: "#000000",
          }}
          label="Inventory Report"
        />

        <LinkTab
          style={{
            fontSize: "20px",
            margin: "10px",
            fontWeight: "bold",
            color: "#000000",
          }}
          label="Sales Report"
        />
      </Tabs>
      <Box>{renderTabContent(value)}</Box>
    </Box>
  );
}
