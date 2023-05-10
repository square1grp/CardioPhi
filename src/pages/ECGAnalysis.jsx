import { ECGChart, Header } from "components";

const ECGAnalysis = () => {
  return (
    <div className="min-h-full flex flex-col justify-center">
      <Header />

      <ECGChart />
    </div>
  );
};

export default ECGAnalysis;
