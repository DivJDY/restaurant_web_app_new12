import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getRestaurants } from "../services/restaurantService";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import RestaurantTable from "./RestaurantTable";

const RestaurantList: React.FC = () => {
  const [restaurants, setRestaurants] = useState<any[]>([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      const data = await getRestaurants();
      setRestaurants(data);
    };
    fetchRestaurants();
  }, []);

  return (
    <div>
      <div>
        <h1
          style={{
            paddingTop: "20px",
            color: "#000",
            fontWeight: 800,
            fontFamily: "Arial, Helvetica, sans-serif",
            textAlign: "center",
          }}
        >
          Restaurants
        </h1>
      </div>

      <Link
        to="/add"
        style={{
          paddingTop: "20px",
          color: "blue",
          fontWeight: 600,
          fontFamily: "Arial, Helvetica, sans-serif",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        Add Restaurant
      </Link>

      <RestaurantTable
        restaurants={restaurants}
        setRestaurants={setRestaurants}
      />
      <Box
        sx={{ "& > :not(style)": { m: 1 } }}
        marginTop={10}
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "flex-end",
        }}
        // alignItems={"flex-end"}
      >
        <Link to="/add">
          <Fab
            variant="extended"
            color="primary"
            style={{ backgroundColor: "blue", fontWeight: 800 }}
          >
            <AddIcon sx={{ mr: 1 }} />
            Add Restaurant
          </Fab>
        </Link>
      </Box>
    </div>
  );
};

export default RestaurantList;
