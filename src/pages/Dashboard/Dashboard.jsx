import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import { React, useState } from "react"
import "./dashboard.css"
import Map from "../Maps/Map"

const Dashboard = () => {
  const [mapLatitude, setMapLatitude] = useState("");
  const [mapLongitude, setMapLongitude] = useState("");
  const [openDialog, setOpenDialog] = useState(false);

  const handleSearch = (latitude, longitude) => {
    setMapLatitude(latitude);
    setMapLongitude(longitude);
    handleCloseDialog();
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <div className="dashboard">
      <Sidebar handleSearch={handleSearch} openDialog={openDialog} setOpenDialog={setOpenDialog} />
      <div className="dashboardContainer">
        <Navbar />
        <h1>GIS-MAP</h1>
        <Map latitude={mapLatitude} longitude={mapLongitude} />
      </div>
    </div>
  );
};

export default Dashboard;
