import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import styles from "./styles.module.scss";

interface Props extends DialogProps {
  handleClose: () => void;
  image: string;
  headerText: string;
  bodyText: string;
  ctaText: string;
  ctaClick: () => void;
  className?: string | undefined;
  backgroundColor?: string;
  textColor?: string;
}

export default function PopupCard({
  open,
  handleClose,
  image,
  headerText,
  bodyText,
  ctaText,
  ctaClick,
  className,
  backgroundColor,
  textColor
}: Props) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
      className={className}
    >
      <CardMedia component="img" height="140" image={image} alt="" />

      <DialogTitle
        id="scroll-dialog-title"
        style={{
          textAlign: "center",
          backgroundColor: backgroundColor,
          color: textColor
        }}
      >
        {headerText}
      </DialogTitle>
      <DialogContent
        style={{
          textAlign: "center",
          backgroundColor: backgroundColor,
          color: textColor
        }}
      >
        <DialogContentText id="scroll-dialog-description" tabIndex={-1} style={{
          color: textColor
        }}>
          {bodyText}
        </DialogContentText>
        <DialogActions style={{
          justifyContent: "center",
          marginTop: "1rem"
        }}>
          <Button variant="outlined" onClick={handleClose} style={{
            color: textColor,
            borderColor: textColor
          }}>
            {ctaText}
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
}