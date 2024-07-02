import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import { Edit } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { deleteRestaurant } from "../services/restaurantService";
import NoDataFound from "./NoDataFound";
import ShowModal from "./Modal";
import { useState } from "react";

export default function RestaurantTable({ restaurants, setRestaurants }: any) {
  const [open, setOpen] = useState(false);
  const [imgShow, setImgShow] = useState(false);
  const handleDelete = async (id: string) => {
    setImgShow(false);
    try {
      await deleteRestaurant(id);
      setRestaurants(restaurants.filter((r: any) => r.id !== id));
      // alert("Restaurant deleted successfully");
      setOpen(true);
    } catch (error) {
      console.error(error);
      alert("Failed to delete restaurant");
    }
  };

  const showPreview = () => {
    setImgShow(true);
    setOpen(true);
  };
  return (
    <React.Fragment>
      <TableContainer component={Paper} style={{ margin: "20px" }}>
        <Table sx={{ minWidth: 450 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Restaurant Image</TableCell>
              <TableCell>Restaurant Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Contact Number</TableCell>
              <TableCell>Edit</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {restaurants && restaurants.length > 0 ? (
              restaurants.map((row: any) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th">
                    <div onClick={() => showPreview()}>
                      <img
                        src={row.imagePreview}
                        style={{
                          width: "100%",
                          maxWidth: 100,
                          maxHeight: 100,
                          objectFit: "cover",
                        }}
                        alt="Preview"
                      />
                    </div>
                  </TableCell>
                  <TableCell component="th">{row.name}</TableCell>
                  <TableCell>{row.description}</TableCell>
                  <TableCell>{row.location}</TableCell>
                  <TableCell>{row.number}</TableCell>
                  <TableCell>
                    <Link to={`/edit/${row.id}`}>
                      <Edit style={{ color: "blue" }} />
                    </Link>
                  </TableCell>
                  <TableCell>
                    <DeleteIcon
                      style={{ cursor: "pointer", color: "blue" }}
                      onClick={() => handleDelete(row.id)}
                    />
                  </TableCell>

                  <ShowModal
                    open={open}
                    setOpen={setOpen}
                    title="Success"
                    text="Restaurant Deleted successfully"
                    image={imgShow}
                    imgPath={row.imagePreview}
                    width={imgShow ? 700 : 350}
                  />
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={6}
                  style={{ textAlign: "center" }}
                  component="th"
                >
                  <NoDataFound />
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
}
