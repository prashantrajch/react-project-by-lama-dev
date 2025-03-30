import { userData } from "../../../dummyData";
import { Chart, FeaturedInfo, WidgetLg, WidgetSm } from "../../components";
import "./home.css";
export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userData}
        title={"User Analytics"}
        grid
        dataKey={"Active User"}
      />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
