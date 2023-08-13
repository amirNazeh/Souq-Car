import React from 'react';
import Filter from "../Components/filter/filter";
import ViewNav from "../Components/view_nav/view_nav";
import SliderItems from "../Components/slider/slider";
import strings from "../localization/localization";
const RescueWinch = () => {
    const car =[];
    return (
<>
<div className="row px-3 theme1 ">
        <div
          className="m-0"
          style={{
            borderRadius: "10px",
            color: "white",
            height: "90px",
            width: "100%",
            position: "relative",
            backgroundImage: 'url("https://souq.car/imgs/sub-header.jpg")',
          }}
        >
          <h1> {strings.rescueWinch}</h1>
        </div>
        <SliderItems cars={car} />
        <Filter />
        <div className="col-sm-12 col-lg-9">
          <ViewNav />

        </div>
      </div>
</>
    );
}

export default RescueWinch;
