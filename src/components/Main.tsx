import {
  // useEffect,
  useState
} from "react";
import Card from "./Card";
import { AppBar, DialogProps, Toolbar } from "@mui/material";
import PopupCard from "./PopupCard";
import GlobalStyles from "@mui/material/GlobalStyles";

import styles from "./styles.module.scss";

const mainGlobalStyles = <GlobalStyles styles={{
  'div[role="dialog"]': {
    borderRadius: "30px!important",
    width: "100%"
  },
  'div[role="dialog"] img.MuiCardMedia-root': {
    height: "22vw",
    minHeight: "253px"
  }
}} />;

const cards = [
  {
    image:
      "https://steamcdn-a.akamaihd.net/apps/dota2/images/blog/play/dota_heroes.png",
    text: "Card 1",
    ctaUrl: "#",
    ctaText: "Button 1",
    backgroundColor: "#203f52",
    textColor: "white"
  },
  {
    image:
      "https://progameguides.com/wp-content/uploads/2019/10/fortnite-outfit-scratch.jpg",
    text: "Card 2",
    ctaUrl: "#",
    ctaText: "Button 2",
    backgroundColor: "#4d137f",
    textColor: "white"
  },
  {
    image: "https://images5.alphacoders.com/690/thumb-1920-690653.png",
    text: "Card 3",
    ctaUrl: "#",
    ctaText: "Button 3",
    backgroundColor: "#ff9900",
    textColor: "white"
  }
];

export default function Main() {
  const [open, setOpen] = useState(false);
  // const [scroll, setScroll] = useState<DialogProps["scroll"]>("paper");

  const handleClickOpen = (scrollType: DialogProps["scroll"]) => () => {
    setOpen(true);
    // setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const descriptionElementRef = React.useRef<HTMLElement>(null);
  // useEffect(() => {
  //   console.log(`open: ${open}`)
  //   if (open) {
  //     const { current: descriptionElement } = descriptionElementRef;
  //     if (descriptionElement !== null) {
  //       descriptionElement.focus();
  //     }
  //   }
  // }, [open]);

  return (
    <main>
      {mainGlobalStyles}
      <AppBar position="fixed">
        <Toolbar>{/* content */}</Toolbar>
      </AppBar>
      <Toolbar />
      <section className={styles.topCard}>
        <Card
          ctaClick={handleClickOpen("paper")}
          imageUrl="https://www.itp.net/public/styles/full_img_sml/public/images/2019/05/27/44485-pubg_base1.jpg?itok=EF911Xan"
          cardHeader="Card Header"
          cardText="Card text"
          ctaText="Show Popup"
          className={styles.fullWidthCard}
          backgroundColor="#34241e"
          textColor="white"
        />
        <PopupCard
          open={open}
          handleClose={handleClose}
          image="https://www.itp.net/public/styles/full_img_sml/public/images/2019/05/27/44485-pubg_base1.jpg?itok=EF911Xan"
          headerText="Popup Header"
          bodyText="Popup text"
          ctaText="Close Popup"
          ctaClick={handleClose}
          backgroundColor="#34241e"
          textColor="white"
        />
      </section>
      <section className={styles.cardsList}>
        {cards.map((card) => (
          <Card
            imageUrl={card.image}
            cardHeader={card.text}
            ctaText={card.ctaText}
            ctaHref={card.ctaUrl}
            className={styles.card}
            key={card.image}
            backgroundColor={card.backgroundColor}
            textColor={card.textColor}
          />
        ))}
      </section>
    </main>
  );
}
