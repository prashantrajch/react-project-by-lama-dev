import { Chart, Featured, List as Table, Widget } from "../../components";
import "./home.scss";

const Home = () => {
  return (
    <section className="home">
      <div className="widgets">
        <Widget type="user" />
        <Widget type="order" />
        <Widget type="earning" />
        <Widget type="balance" />
      </div>
      <div className="charts">
        <Featured />
        <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
      </div>
      <div className="listContainer">
        <div className="listTitle">Latest Transations</div>
        <Table />
      </div>
    </section>
  );
};

export default Home;
