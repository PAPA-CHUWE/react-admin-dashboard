import "./sidebar.css"
import { useState } from "react"
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { IconButton } from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MyLocationOutlinedIcon from '@mui/icons-material/MyLocationOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import StackedLineChartOutlinedIcon from '@mui/icons-material/StackedLineChartOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PowerSettingsNewOutlinedIcon from '@mui/icons-material/PowerSettingsNewOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';

const Sidebar = (props) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [openDialog, handleDisplay] = useState(false);
  const [openDialogAddress, handleDisplayAddress] = useState(false);
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [address, setAddress] = useState("");


  const handleClose = () => {
    handleDisplay(false);
  };

  const openDialogBox = () => {
    handleDisplay(true);
  };

  const handleCloseAddress = () => {
    handleDisplayAddress(false);
  };
  const openDialogBoxAddress = () => {
    handleDisplayAddress(true);
  };

  const handleSearchAddress = () => {
    console.log("Address:", address);
    handleCloseAddress();
  };
  const handleSearch = () => {
    console.log("Latitude:", latitude);
    console.log("Longitude:", longitude);
    props.handleSearch(latitude, longitude);
    handleClose();
  };
  const refreshPage = () => {
    window.location.reload();
  };

  const underDev = () => {
    const alertContainer = document.createElement("div");
    alertContainer.style.position = "fixed";
    alertContainer.style.top = "50%";
    alertContainer.style.left = "50%";
    alertContainer.style.transform = "translate(-50%, -50%)";
    alertContainer.style.backgroundColor = "red";
    alertContainer.style.color = "white";
    alertContainer.style.padding = "10px";
    alertContainer.style.borderRadius = "5px";
    alertContainer.style.zIndex = "9999";
    alertContainer.innerText = "This feature is under development";
    document.body.appendChild(alertContainer);
  
    setTimeout(() => {
      document.body.removeChild(alertContainer);
    }, 5000);
  };
  return (
    <div className={`sidebar ${isCollapsed ? "isCollapsed" : ""}`}>
      <div className="top">
        <span className="logo">Engineer Gilbert
          <IconButton
            className="iconButtLogo"
            onClick={() => {
              console.log("Menu icon clicked");
              setIsCollapsed(!isCollapsed)
            }}
          >
            <MenuOutlinedIcon />
          </IconButton>
        </span>
      </div>
      <hr />
      {
        !isCollapsed && (
          <>
            <div className="center">
              <ul>
                <p className="title">Main</p>
                <li onClick={refreshPage}>
                  <DashboardOutlinedIcon />
                  <span>Dashboard</span>
                </li>
                <p className="title">Find The Place</p>
                <li onClick={openDialogBox}>
                  <MyLocationOutlinedIcon />
                  <span>By Coordinates</span>
                </li>
                <li onClick={openDialogBoxAddress}>
                  <LocationOnOutlinedIcon />
                  <span>By Address</span>
                </li>
                <li>
                  <ExploreOutlinedIcon />
                  <span>By Name</span>
                </li>
                <p className="title">Stats</p>
                <li onClick={underDev}>
                  <StackedLineChartOutlinedIcon />
                  <span>Stats</span>
                </li>
                <li onClick={underDev}>
                  <InfoOutlinedIcon />
                  <span>More Info</span>
                </li>
                <p className="title">Service</p>
                <li onClick={underDev}>
                  <AdminPanelSettingsOutlinedIcon />
                  <span>Profile</span>
                </li>
                <li onClick={underDev}>
                  <SettingsOutlinedIcon />
                  <span>Settings</span>
                </li>
                <p className="title">User</p>
                <li onClick={underDev}>
                  <ManageAccountsOutlinedIcon />
                  <span>User Management</span>
                </li>
                <li onClick={underDev}>
                  <PowerSettingsNewOutlinedIcon />
                  <span>Logout</span>
                </li>
              </ul>
            </div>
            <div className="bottom">
              <div className="colorOptions"></div>
              <div className="colorOptions"></div>
              <div className="colorOptions"></div>
            </div>
            <div className="Owner">
              <small>
                  Copyright © 2023 <span>Terrence Chuwe</span>. <br /> All Rights Reserved.
              </small>
            </div>
            <Dialog onClose={handleCloseAddress} open={openDialogAddress}>
              <DialogTitle>Enter Latitude and Longitude</DialogTitle>
              <div style={{ padding: "16px" }}>
                <TextField
                  label="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  fullWidth
                  margin="normal"
                />
                <Button variant="contained" color="primary" onClick={handleSearchAddress}>
                  Search
                </Button>
              </div>
            </Dialog>
            <Dialog onClose={handleClose} open={openDialog}>
              <DialogTitle>Enter Latitude and Longitude</DialogTitle>
              <div style={{ padding: "16px" }}>
                <TextField
                  label="Latitude"
                  value={latitude}
                  onChange={(e) => setLatitude(e.target.value)}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Longitude"
                  value={longitude}
                  onChange={(e) => setLongitude(e.target.value)}
                  fullWidth
                  margin="normal"
                />
                <Button variant="contained" color="primary" onClick={handleSearch}>
                  Search
                </Button>
              </div>
            </Dialog>
          </>
        )
      }

    </div>
  )
}

export default Sidebar;
