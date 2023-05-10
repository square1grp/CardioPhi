import Header from "../../components/Header";
import EcgChart from "components/Charts/EcgChart";
import HeartRateChart from "components/Charts/HeartRateChart";
import TimeStats from "components/Charts/TimeStats";

const Home = () => {
  return (
    <div className={"h-screen relative"}>
      <Header />
      <div className="py-1 px-3 bg-main">
        <EcgChart />
        <HeartRateChart />
        <TimeStats />
      </div>
    </div>
  );
};

export default Home;
