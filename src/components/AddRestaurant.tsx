import React, { useState } from "react";
import RestaurantForm from "./RestaurantForm";
import { addRestaurant } from "../services/restaurantService";
import ShowModal from "./Modal";

const AddRestaurant: React.FC = () => {
  const [open, setOpen] = useState(false);
  const handleAddRestaurant = async (data: any) => {
    try {
      await addRestaurant(data);
      // alert("Restaurant added successfully");
      setOpen(true);
    } catch (error) {
      console.error(error);
      alert("Failed to add restaurant");
    }
  };

  return (
    <React.StrictMode>
      <RestaurantForm SubmitData={handleAddRestaurant} />
      <ShowModal
        open={open}
        setOpen={setOpen}
        title="Success"
        text="Restaurant Added Successfully"
        image={false}
        width={350}
      />
    </React.StrictMode>
  );
};

export default AddRestaurant;
