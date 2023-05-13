import { useSelector } from "react-redux";
import {
  Header,
  EcgChart,
  HeartRateChart,
  TimeStats,
  EpisodeChart,
} from "components";
import { styled } from "@mui/material/styles";

import Drawer from "@mui/material/Drawer";

const drawerWidth = 470;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    }),
  })
);

const ECGAnalysis = () => {
  const selectedChartData = useSelector(
    (state) => state.episodeData.selectedChartData
  );

  return (
    <div className={"h-screen flex"}>
      <Main open={selectedChartData.show}>
        <div className="flex-1 relative">
          <Header />

          <div className="py-1 px-3 bg-main">
            <EcgChart />
            <HeartRateChart />
            <TimeStats />
          </div>
        </div>
      </Main>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={selectedChartData.show}
      >
        {selectedChartData.show && <EpisodeChart />}
      </Drawer>
    </div>
  );
};

export default ECGAnalysis;
