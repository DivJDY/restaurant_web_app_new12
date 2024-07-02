import { Typography } from "@mui/material";
import React from "react";

function NoDataFound() {
  return (
    <div>
      <Typography
        style={{
          color: "blue",
          fontWeight: 600,
          fontFamily: "Arial, Helvetica, sans-serif",
          textAlign: "center",
          fontSize: "16px",
        }}
      >
        No Data Found
      </Typography>
    </div>
  );
}

export default NoDataFound;
