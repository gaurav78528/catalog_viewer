import { useEffect, useRef, useState } from "react";
import { Container, Grid } from "@mui/material";
import SlideComp from "./components/Slide";
import SlideDetails from "./components/SlideDetails";

interface Slide {
  img: string;
  title: string;
  desc: string;
}

interface GalleryProps {
  data: Slide[];
}

const Gallery = ({ setData }: GalleryProps) => {
  const [slide, setSlide] = useState<number>(0);
  const slideTimerRef = useRef<any>(null);
  const [slides, setSlides] = useState<Slide[]>(data);
  const [isTimerStarted, setIsTimerStarted] = useState<boolean>(false);
  
  async function fetchData(){
 try{
    const res = await  fetch(url);
    const actualRes= await res.json();
    setData(actualRes)
  }catch(err){
    console.log(err)
  }
  useEffect(() => {
    fetchData()
//     setSlides(data);
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
        <SlideComp
          handlePrev={handlePrev}
          handleNext={handleNext}
          slides={slides}
          handleSlideChange={handleSlideChange}
          slide={slide}
        />

        <SlideDetails
          slides={slides}
          toggleTimer={toggleTimer}
          isTimerStarted={isTimerStarted}
          slide={slide}
        />
      </Grid>
    </Container>
  );
};

export default Gallery;
