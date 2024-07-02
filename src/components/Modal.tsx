import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ShowModal({
  open,
  setOpen,
  title,
  text,
  image,
  imgPath,
  width,
}: any) {
  // const [open, setOpen] = React.useState(false);

  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 20,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style} width={width}>
            {image ? (
              <img
                src={imgPath}
                style={{
                  marginLeft: 2,
                  alignItems: "center",
                  width: "100%",
                  maxWidth: 350,
                  maxHeight: 350,
                  objectFit: "cover",
                }}
                alt="Preview"
              />
            ) : (
              <div>
                <Typography
                  id="transition-modal-title"
                  color={"green"}
                  fontWeight={800}
                  variant="h6"
                  component="h2"
                >
                  {title}
                </Typography>
                <Typography
                  color={"#000"}
                  fontWeight={500}
                  id="transition-modal-description"
                  sx={{ mt: 1 }}
                >
                  {text}
                </Typography>
              </div>
            )}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
