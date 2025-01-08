import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import {
  Box,
  Button,
  Container,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import Filter from "@/libs/components/property/Filter";
import { NextPage } from "next";
import { useState } from "react";
import PropertyCard from "@/libs/components/property/PropertyCard";
import useDeviceDetect from "@/libs/components/hooks/useDeviceDetect";

const PropertyList: NextPage = () => {
  const device = useDeviceDetect();
  const [properties, setProperties] = useState<number[]>([1, 2, 3, 4, 5, 6]);

  if (device == "mobile") {
    return <Stack>PROPERTY LIST MOBILE</Stack>;
  } else {
    return (
      <div id={"property-list-page"} style={{ position: "relative" }}>
        <Stack className={"container"}>
          <Box className={"right"}>
            <span>Sort by</span>
            <div>
              <Button endIcon={<KeyboardArrowDownRoundedIcon />}></Button>
            </div>
          </Box>
          <Stack className={"property-page"}>
            <Stack className={"filter-config"}>
              <Filter />
            </Stack>
            <Stack className={"main-config"} mb={"76px"}>
              <Stack className={"list-config"}>
                {properties.map((property, index) => {
                  return <PropertyCard />;
                })}
              </Stack>
              <Stack className={"pagination-config"}>
                <Stack className="pagination-box">
                  <Pagination
                    page={1}
                    count={5}
                    shape="circular"
                    color="primary"
                  />
                </Stack>
                <Stack className="total-result">
                  <Typography>Total 5 properties available</Typography>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </div>
    );
  }
};

export default withLayoutBasic(PropertyList);