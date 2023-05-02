import React from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";

interface Props {
  slides: {
    img: string;
    title: string;
    desc: string;
  }[];
  toggleTimer: (isTimerStarted: boolean) => void;
  isTimerStarted: boolean;
  slide: number;
}

const SlideDetails: React.FC<Props> = ({
  slides,
  toggleTimer,
  isTimerStarted,
  slide,
}) => {
  return (
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
  );
};

export default SlideDetails;
