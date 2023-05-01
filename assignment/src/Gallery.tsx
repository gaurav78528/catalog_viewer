import { useEffect, useRef, useState } from "react";
import { Container, Grid, Box, Typography, Button, Stack } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";

interface Slide {
  img: string;
  title: string;
  desc: string;
}

interface GalleryProps {
  data: Slide[];
}

const Gallery = ({ data }: GalleryProps) => {
  const [slide, setSlide] = useState<number>(0);
  const slideTimerRef = useRef<any>(null);
  const [slides, setSlides] = useState<Slide[]>(data);
  const [isTimerStarted, setIsTimerStarted] = useState<boolean>(false);

  useEffect(() => {
    setSlides(data);
  }, []);

  const handlePrev = (): void => {
    if (slide === 0) {
      setSlide(slides.length - 1);
    } else {
      setSlide((prev) => prev - 1);
    }
  };

  const handleNext = (): void => {
    if (slide === slides.length - 1) {
      setSlide(0);
    } else {
      setSlide((prev) => prev + 1);
    }
  };

  const handleSlideChange = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void => {
    if ((e.target as HTMLImageElement).tagName === "IMG") {
      setSlide(Number((e.target as HTMLImageElement).id));
    }
  };

  const toggleTimer = (val: boolean): void => {
    if (slideTimerRef.current === null) {
      slideTimerRef.current = setInterval(handleNext, 3000);
    } else {
      clearInterval(slideTimerRef.current);
      slideTimerRef.current = null;
    }
    setIsTimerStarted(val);
  };

  useEffect(() => {
    return () => {
      if (slideTimerRef.current !== null) {
        clearInterval(slideTimerRef.current);
        slideTimerRef.current = null;
      }
    };
  }, []);

  return (
    <Container maxWidth="xl">
      <Grid container spacing={4} p={"40px"}>
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
        <Grid item xs={12} sm={12} md={12} lg={4}>
          <Box component="div">
            <Typography variant="h3" component="h3" color="gray">
              {slides[slide]?.title}
            </Typography>
            <Typography component="p" color="gray">
              {slides[slide]?.desc.slice(0, 1000)}
            </Typography>
          </Box>
          <Box
            component="div"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            my="50px"
          >
            <Button
              variant="contained"
              sx={{ borderRadius: "50%", height: "60px", width: "60px" }}
              onClick={() => toggleTimer(!isTimerStarted)}
            >
              {!isTimerStarted ? (
                <PlayArrowIcon fontSize="large" />
              ) : (
                <PauseIcon fontSize="large" />
              )}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Gallery;
