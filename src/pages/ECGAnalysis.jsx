import { Header, EcgChart, HeartRateChart, TimeStats } from "components";

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
