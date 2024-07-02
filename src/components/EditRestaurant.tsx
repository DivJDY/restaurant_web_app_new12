import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RestaurantForm from "./RestaurantForm";
import { getRestaurant, updateRestaurant } from "../services/restaurantService";
import ShowModal from "./Modal";

const EditRestaurant: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { id } = useParams<{ id: string }>();
  const [initialData, setInitialData] = useState<any>(null);

  useEffect(() => {
    if (id) {
      // Check if id is defined
      const fetchRestaurant = async () => {
        try {
          const data = await getRestaurant(id);
          setInitialData(data);
        } catch (error) {
          console.error("Failed to fetch restaurant", error);
        }
      };
      fetchRestaurant();
    }
  }, [id]);

  const handleUpdateRestaurant = async (data: any) => {
    if (id) {
      try {
        await updateRestaurant(id, data);
        setOpen(true);
        // alert("Restaurant updated successfully");
      } catch (error) {
        console.error(error);
        alert("Failed to update restaurant");
      }
    }
  };

  return initialData ? (
    <React.Fragment>
      <RestaurantForm
        SubmitData={handleUpdateRestaurant}
        initialData={initialData}
      />
      <ShowModal
        open={open}
        setOpen={setOpen}
        title="Success"
        text="Restaurant Updated Successfully"
        width={350}
      />
    </React.Fragment>
  ) : (
    <div
      style={{
        color: "#000",
        fontWeight: 600,
        textAlign: "center",
        marginTop: "20px",
      }}
    >
      Loading...
    </div>
  );
};

export default EditRestaurant;
