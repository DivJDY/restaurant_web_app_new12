import { Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

// Form
interface RestaurantFormProps {
  SubmitData: (data: any) => void;
  initialData?: any;
}

const RestaurantForm: React.FC<RestaurantFormProps> = ({
  SubmitData,
  initialData,
}) => {
  const [name, setName] = useState(initialData?.name || "");
  const [description, setDescription] = useState(
    initialData?.description || ""
  );
  const [location, setLocation] = useState(initialData?.location || "");
  const [number, setNumber] = useState(initialData?.number || "");
  const [error, setError] = useState(false);
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value) {
      if (value.length <= 10 && /^\d*$/.test(value)) {
        setNumber(value);
        if (value.length === 10) {
          setError(false);
        } else {
          setError(true);
        }
      }
    }
  };
  // const handleChangeImg = (e: any) => {
  //   if (e.target.name) {
  //     setImage(e.target.files[0]);
  //     setImagePreview(URL.createObjectURL(e.target.files[0]));
  //   }
  // };

  const handleChangeImg = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(file);

      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  console.log("hchfvjdf", image, "===", imagePreview);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (image) {
      SubmitData({ name, description, location, number, imagePreview });
    }
    // console.log("=====>>.", formData);
    // SubmitData({ name, description, location, number, image });
    if (!initialData) {
      setName("");
      setLocation("");
      setDescription("");
      setNumber("");
      setImage(null);
      setImagePreview(null);
    }
  };

  return (
    <React.Fragment>
      <Grid marginTop={4}>
        <Typography
          style={{ fontWeight: 800, fontSize: "20px" }}
          className="text-blue-700 text-center text-xl "
        >
          <Link
            to="/"
            className="hover:text-green-800 underline underline-offset-8"
          >
            List of Restaurants
          </Link>{" "}
          / {!initialData ? "Add Restaurant" : "Edit Restaurant"}
        </Typography>
      </Grid>

      <Grid className="flex justify-center">
        <form onSubmit={handleSubmit}>
          <Grid marginY={5}>
            <TextField
              style={{ fontSize: "16px", color: "#000", fontWeight: 800 }}
              color="success"
              id="outlined-basic"
              variant="outlined"
              label="Restaurant Name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              // focused
            />
          </Grid>

          <Grid marginY={5}>
            <TextField
              color="success"
              id="outlined-basic"
              variant="outlined"
              label="Description"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              // focused
            />
          </Grid>
          <Grid marginY={5}>
            <TextField
              color="success"
              id="outlined-basic"
              variant="outlined"
              label="Restaurant Location"
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
              // focused
            />
          </Grid>
          <Grid marginY={5}>
            {/* <TextField
            color="success"
            id="outlined-basic"
            variant="outlined"
            label="Contact number"
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            required
            // focused
          /> */}
            <TextField
              color="success"
              id="outlined-basic"
              variant="outlined"
              label="Contact number"
              type="text"
              value={number}
              onChange={handleChange}
              // onChange={(e) => setNumber(e.target.value)}
              inputProps={{ maxLength: 10 }}
              error={error}
              helperText={error ? "Contact number must be 10 digits" : ""}
              required
            />
          </Grid>
          <Grid marginY={5}>
            <input
              type="file"
              accept="image/*"
              name="image"
              onChange={handleChangeImg}
            />
          </Grid>

          {imagePreview ? (
            <img
              src={imagePreview}
              style={{
                width: "100%",
                maxWidth: 200,
                maxHeight: 200,
                objectFit: "cover",
              }}
              alt="Preview"
            />
          ) : (
            initialData && (
              <img
                src={initialData && initialData.imagePreview}
                style={{
                  width: "100%",
                  maxWidth: 200,
                  maxHeight: 200,
                  objectFit: "cover",
                }}
                alt="Preview"
              />
            )
          )}

          <Grid
            marginTop={5}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Button
              style={{
                backgroundColor: "blue",
                color: "#fff",
                fontSize: "16px",
                fontWeight: 800,
                borderRadius: "12px",
              }}
              variant="contained"
              type="submit"
            >
              {!initialData ? "Submit" : "Update"}
            </Button>
          </Grid>
        </form>
      </Grid>
    </React.Fragment>
  );
};

export default RestaurantForm;
