import React from "react";
import { Grid, Box, Button, Stack } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";

type SlideProps = {
  handlePrev: () => void;
  handleNext: () => void;
  slides: Slide[];
  handleSlideChange: (event: React.MouseEvent<HTMLImageElement>) => void;
  slide: number;
};

type Slide = {
  img: string;
  title: string;
};

const Slide: React.FC<SlideProps> = ({
  handlePrev,
  handleNext,
  slides,
  handleSlideChange,
  slide,
}) => {
  return (
    <Grid item xs={12} sm={12} md={12} lg={8}>
      <Box component="div">
        <img
          src={slides[slide]?.img}
          alt={slides[slide]?.title}
          width={"100%"}
          height={"auto"}
          style={{ borderRadius: "20px", maxHeight: "600px" }}
        />
      </Box>
      <Stack
        direction="row"
        spacing={2}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Button size="small" variant="text" onClick={handlePrev}>
          <ArrowLeftIcon fontSize="large" />
        </Button>
        <Box
          component="div"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            marginTop: 2,
          }}
        >
          {slides.map((item: Slide, idx: number) => (
            <img
              key={item.title}
              style={{
                border: idx === slide ? "2px solid" : "none",
                opacity: idx === slide ? "1" : "0.5",
                margin: "5px",
                borderRadius: "10px",
                cursor: "pointer",
              }}
              id={idx.toString()}
              src={item.img}
              alt={item.title}
              width={100}
              height={"auto"}
              onClick={handleSlideChange}
            />
          ))}
        </Box>
        <Button size="small" variant="text" onClick={handleNext}>
          <ArrowRightIcon fontSize="large" />
        </Button>
      </Stack>
    </Grid>
  );
};

export default Slide;
