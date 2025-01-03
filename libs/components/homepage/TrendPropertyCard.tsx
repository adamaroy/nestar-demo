import React from "react";
import { Box, Typography } from "@mui/material";

const TrendPropertyCard = () => {
  return (
    <Box className="trend-card-box">
      <Box
        className="card-img"
        style={{
          backgroundImage: "url('/img/banner/types/apartment.webp')",
        }}
      >
        <div className="status">
          <img src="/img/icons/electricity.svg" alt="" />
          <span>Top</span>
        </div>
        <div className="price">$420000</div>
      </Box>
      <Box className="info">
        <strong className="title">Run Will Buildings</strong>
        <p className="desc">Seoul Gangnam Apartments</p>
        <div className="options">
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
            <span>220 m2</span>
          </div>
        </div>
        <Box mt="15px" mb="17px" className="bott">
          <p>Rent</p>
          <div className="view-like-box">
            <span className="view-cnt">120 views</span>
            <span className="view-cnt">50 likes</span>
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default TrendPropertyCard;
