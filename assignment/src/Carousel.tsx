// import { useEffect, useRef, useState } from "react";
// import { Container, Stack, Box, Typography } from "@mui/material";

// interface Slide {
//   img: string;
//   title: string;
//   desc: string;
// }

// interface CarouselProps {
//   data: Slide[];
// }

// const Carousel = ({ data }: CarouselProps) => {
//   const [slide, setSlide] = useState<number>(0);
//   const slideTimerRef = useRef(null);
//   const [slides, setSlides] = useState<Slide[]>(data);
//   const [isTimerStarted, setIsTimerStarted] = useState<boolean>(false);

//   const handlePrev = (): void => {
//     if (slide === 0) {
//       setSlide(slides.length - 1);
//     } else {
//       setSlide((prev) => prev - 1);
//     }
//   };

//   const handleNext = (): void => {
//     if (slide === slides.length - 1) {
//       setSlide(0);
//     } else {
//       setSlide((prev) => prev + 1);
//     }
//   };

//   const handleSlideChange = (
//     e: React.MouseEvent<HTMLDivElement, MouseEvent>
//   ): void => {
//     if ((e.target as HTMLImageElement).tagName === "IMG") {
//       setSlide(Number((e.target as HTMLImageElement).id));
//     }
//   };

//   const toggleTimer = (): void => {
//     if (slideTimerRef.current === null) {
//       // slideTimerRef.current = setInterval(handleNext, 3000);
//     } else {
//       clearInterval(slideTimerRef.current);
//       slideTimerRef.current = null;
//     }
//   };

//   useEffect(() => {
//     return () => {
//       if (slideTimerRef.current !== null) {
//         clearInterval(slideTimerRef.current);
//         slideTimerRef.current = null;
//       }
//     };
//   }, []);

//   return (
//     <Container maxWidth="xl" sx={{ border: "1px solid red" }}>
//       <Stack direction="row" spacing={6} sx={{ margin: "20px" }}>
//         <Box
//           sx={{
//             width: "60%",
//             // height: "200px",
//           }}
//         >
//           <Box>
//             <img
//               src={slides[slide]?.img}
//               alt={slides[slide]?.title}
//               width={"100%"}
//               style={{ borderRadius: "20px" }}
//             />
//           </Box>
//           <Stack
//             direction="row"
//             justifyContent="center"
//             alignItems="center"
//             spacing={2}
//           >
//             <Box onClick={handleSlideChange}>
//               {slides.map((item: Slide, idx: number) => (
//                 <img
//                   key={item.title}
//                   style={{
//                     border: idx === slide ? "2px solid" : "none",
//                     margin: "5px",
//                     borderRadius: "10px",
//                   }}
//                   id={idx.toString()}
//                   src={item.img}
//                   alt={item.title}
//                   width={120}
//                   height={90}
//                 />
//               ))}
//             </Box>
//           </Stack>
//         </Box>
//         <Box
//           sx={{
//             width: "40%",
//             height: "auto",
//           }}
//         >
//           <Box>
//             <Typography variant="h3" component="h3" color="gray">
//               {slides[slide]?.title}
//             </Typography>
//             <Typography component="p" color="gray">
//               {slides[slide]?.desc}
//             </Typography>
//           </Box>
//         </Box>
//       </Stack>
//     </Container>
//     // <div>
//     //   <img src={slides[slide]?.img} alt="img" />
//     //   <h1>{slides[slide]?.title}</h1>
//     //   <p>{slides[slide]?.desc}</p>
//     //   <div>
//     //     <button onClick={handlePrev}>prev</button>
//     //     <div onClick={handleSlideChange}>
//     //       {slides.map((item: Slide, idx: number) => (
//     //         <img
//     //           key={item.title}
//     //           style={{
//     //             border: idx === slide ? "1px solid" : "none",
//     //             margin: "5px"
//     //           }}
//     //           id={idx.toString()}
//     //           src={item.img}
//     //           alt=""
//     //           width="30px"
//     //         />
//     //       ))}
//     //     </div>
//     //     <button onClick={handleNext}>next</button>
//     //     <div onClick={toggleTimer}>{!isTimerStarted ? "Play" : "Pause"}</div>
//     //   </div>
//     // </div>
//   );
// };

// export default Carousel;

import { useEffect, useRef, useState } from "react";
import { Container, Grid, Box, Typography } from "@mui/material";

interface Slide {
  img: string;
  title: string;
  desc: string;
}

interface CarouselProps {
  data: Slide[];
}

const Carousel = ({ data }: CarouselProps) => {
  const [slide, setSlide] = useState<number>(0);
  const slideTimerRef = useRef(null);
  const [slides, setSlides] = useState<Slide[]>(data);
  const [isTimerStarted, setIsTimerStarted] = useState<boolean>(false);

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

  const toggleTimer = (): void => {
    if (slideTimerRef.current === null) {
      // slideTimerRef.current = setInterval(handleNext, 3000);
    } else {
      clearInterval(slideTimerRef.current);
      slideTimerRef.current = null;
    }
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
    <Container maxWidth="xl" sx={{ border: "1px solid red" }}>
      <Grid container spacing={4} sx={{ padding: "20px" }}>
        <Grid item xs={12} sm={12} md={12} lg={8}>
          <Box>
            <img
              src={slides[slide]?.img}
              alt={slides[slide]?.title}
              width={"100%"}
              height={600}
              style={{ borderRadius: "20px" }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 2,
            }}
          >
            {slides.map((item: Slide, idx: number) => (
              <img
                key={item.title}
                style={{
                  border: idx === slide ? "2px solid" : "none",
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
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={4}>
          <Box>
            <Typography variant="h3" component="h3" color="gray">
              {slides[slide]?.title}
            </Typography>
            <Typography component="p" color="gray">
              {slides[slide]?.desc}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Carousel;
