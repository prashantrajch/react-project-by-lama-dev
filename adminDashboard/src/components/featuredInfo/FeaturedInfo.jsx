import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import "./featuredInfo.css";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <div className="featuredTitle">Revanue</div>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,415</span>
          <span className="featuredMoneyRate">
            -11.4 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <div className="featuredSub">compared to last month</div>
      </div>
      <div className="featuredItem">
        <div className="featuredTitle">Sales</div>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$4,415</span>
          <span className="featuredMoneyRate">
            -1.4 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <div className="featuredSub">compared to last month</div>
      </div>
      <div className="featuredItem">
        <div className="featuredTitle">Cost</div>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,415</span>
          <span className="featuredMoneyRate">
            2.4 <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <div className="featuredSub">compared to last month</div>
      </div>
    </div>
  );
}
