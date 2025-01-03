import React from "react";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Box, Divider, Stack, Typography } from "@mui/material";

const TopAgentCard = () => {
  return (
    <Stack className={"top-agent-card"}>
      <div>
        <img src="/img/profile/girl.svg" alt="" />
      </div>
      <strong>Martin</strong>
      <span>Agent</span>
    </Stack>
  );
};
export default TopAgentCard;