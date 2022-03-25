import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

interface Props {
  ctaClick?: () => void;
  imageUrl: string;
  cardHeader?: string;
  cardText?: string;
  ctaText?: string;
  ctaHref?: string;
  className?: string;
  key?: string;
  backgroundColor: string;
  textColor: string;
}
export default function MediaCard({
  ctaClick,
  imageUrl,
  cardHeader,
  cardText,
  ctaText,
  ctaHref = "",
  className,
  backgroundColor,
  textColor
}: Props) {
  return (
    <Card sx={{ maxWidth: 345 }} className={className}>
      <CardMedia component="img" height="140" image={imageUrl} alt="" />
      <CardContent
        style={{
          backgroundColor: backgroundColor,
          color: textColor
        }}
      >
        <Typography gutterBottom variant="h5" component="div">
          {cardHeader}
        </Typography>
        <Typography
          variant="body2"
          gutterBottom
          color="text.secondary"
          style={{
            color: textColor
          }}
        >
          {cardText}
        </Typography>
        <Typography mt="1rem">
          {ctaClick && (
            <Button
              variant="contained"
              onClick={ctaClick}
              style={{
                color: textColor
              }}
            >
              {ctaText}
            </Button>
          )}
          {ctaHref && (
            <Button
              variant="outlined"
              href={ctaHref}
              style={{
                color: textColor,
                borderColor: textColor
              }}
            >
              {ctaText}
            </Button>
          )}
        </Typography>
      </CardContent>
    </Card>
  );
}
