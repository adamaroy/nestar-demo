import React from "react";
import { Stack, Box, Typography, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const TopAgentCard = () => {
  return (
    <Stack className="top-agent-card">
      <Box
        className="agent-img"
        style={{
          backgroundImage: "url('/img/profile/agent.png')",
        }}
      ></Box>
      <Typography className="agent-name">John Doe</Typography>
      <Box className="agent-details">
        <p className="agent-role">Real Estate Agent</p>
        <p className="agent-location">Seoul, South Korea</p>
      </Box>
      <Box className="social-icons">
        <IconButton color="default">
          <ArrowBackIosNewIcon />
        </IconButton>
        <Typography className="agent-cnt">Followers: 500</Typography>
      </Box>
    </Stack>
  );
};

export default TopAgentCard;
