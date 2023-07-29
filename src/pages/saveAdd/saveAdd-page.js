import CarCart from "../../Components/car-cart/car-cart";

import ViewNav from "../../Components/view_nav/view_nav";
import { useEffect, useContext } from "react";
import { saveAddContext } from "../../Contexts/saveAdd";
import { useState } from "react";
import'../buy-cars/buy-cars.css'
function SaveAddPage(props) {
  const { saveAdd, setSaveAdd } = useContext(saveAddContext);
  const [value, setValue] = useState();

  // useEffect(()=>{
  //   setfavoritesList(favorites)
  // },[favorites])

  const order = (value) => {
    switch (value) {
      case "2":
        saveAdd.sort(function (a, b) {
          return b.price - a.price;
        });

        setValue(value);
        break;
      case "3":
        saveAdd.sort(function (a, b) {
          return a.price - b.price;
        });

        setValue(value);

        break;
      default:
      // code block
    }
  };

  return (
    <>
      <div className="row  px-3 theme1">
        <div className="mt-3 ">
          <ViewNav order={order} />

          {saveAdd&&saveAdd.map((car) => (
            <CarCart key={car.id} car={car} />
          ))}
        </div>
      </div>
    </>
  );
}

export default SaveAddPage;
