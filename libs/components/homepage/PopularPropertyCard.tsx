import React from "react";
import { Divider, IconButton, Typography, Stack, Box } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const PopularPropertyCard = () => {
  return (
    <Stack className="popular-card-box">
      <Box
        className="card-img"
        style={{
          backgroundImage: "url('/img/banner/types/apartment.webp')",
        }}
      ></Box>
      <div className="status">
        <img src="/img/icons/electricity.svg" alt="" />
        <span>Top</span>
      </div>
      <div className="price">$520000</div>
      <Box className="info">
        <strong className="title">Busan City Hall Apartments</strong>
        <p className="desc">Good wills</p>
        <Box className="options">
          <div>
            <img src="/img/icons/bed.svg" alt="" />
            <span>3 bed</span>
          </div>
          <div>
            <img src="/img/icons/room.svg" alt="" />
            <span>7 rooms</span>
          </div>
          <div>
            <img src="/img/icons/expand.svg" alt="" />
            <span>220 m²</span>
          </div>
        </Box>
        <Divider sx={{ mt: "15px", mb: "17px" }} />
        <Box className="bott">
          <p>Rent</p>
          <Box className="view-like-box">
            <IconButton color="default">
              <RemoveRedEyeIcon />
            </IconButton>
            <Typography className="view-cnt">50</Typography>
            <IconButton color="default">
              <FavoriteIcon style={{ color: "red" }} />
            </IconButton>
            <Typography className="view-cnt">250</Typography>
          </Box>
        </Box>
      </Box>
    </Stack>
  );
};

export default PopularPropertyCard;
