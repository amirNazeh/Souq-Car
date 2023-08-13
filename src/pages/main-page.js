import CarSearch from "../Components/car-search/car-search";
import CarCard from "../Components/car-card/car-card";
import ExploreSection from "../Components/explore-section/explore-section";
import CarSwiper from "../Components/car-swiper/car-swiper";
import Edit from "../Components/edit/edit";
import "./main-page.css";
import strings from "../localization/localization";
import FeaturedAds from "../Components/featured-ads/featured-ads";
const MainPage = () => {
  const carBrand = [
    {
      id: 1,
      name: `${strings.audi}`,
      imgUrl: "https://souq.car/storage/car_makers/22.jpg",
    },
    {
      id: 2,
      name: `${strings.mercedesBenz}`,
      imgUrl: "https://souq.car/storage/car_makers/20.jpg",
    },
    {
      id: 3,
      name: `${strings.peugeot}`,
      imgUrl: "https://souq.car/storage/car_makers/3.jpg",
    },
    {
      id: 4,
      name: `${strings.rangeRover}`,
      imgUrl: "https://souq.car/storage/car_makers/24.jpg",
    },
    {
      id: 5,
      name: `${strings.jeep}`,
      imgUrl: "https://souq.car/storage/car_makers/32.jpg",
    },
    {
      id: 6,
      name: `${strings.porsche}`,
      imgUrl: "https://souq.car/storage/car_makers/10.jpg",
    },
    {
      id: 7,
      name: `${strings.karry}`,
      imgUrl:
        "https://souq.car/storage/car_makers/1YWpfKQu9lSfrcUHX5xlwRa6IesMmG8zNuW8hhw5.png",
    },
    {
      id: 8,
      name: `${strings.gac}`,
      imgUrl: "https://souq.car/storage/car_makers/63.jpg",
    },
    {
      id: 9,
      name: `${strings.toyota}`,
      imgUrl: "https://souq.car/storage/car_makers/16.jpg",
    },
    {
      id: 10,
      name: `${strings.kia}`,
      imgUrl: "https://souq.car/storage/car_makers/23.jpg",
    },
    {
      id: 11,
      name: `${strings.mg}`,
      imgUrl: "https://souq.car/storage/car_makers/50.jpg",
    },
    {
      id: 12,
      name: `${strings.bmw}`,
      imgUrl: "https://souq.car/storage/car_makers/17.jpg",
    },
    {
      id: 13,
      name: `${strings.hyundai}`,
      imgUrl: "https://souq.car/storage/car_makers/29.jpg",
    },
    {
      id: 14,
      name: `${strings.ford}`,
      imgUrl: "https://souq.car/storage/car_makers/27.jpg",
    },
    {
      id: 15,
      name: `${strings.volvo}`,
      imgUrl: "https://souq.car/storage/car_makers/34.jpg",
    },
  ];
  const carTypes = [
    {
      id: 1,
      name: `${strings.sedan}`,
      imgUrl:
        "https://souq.car/storage/car_bodies/KhIZBFI6HuROkDGKh3Rw6pkZcvOoyg2o7pyCG5Bf.png",
    },
    {
      id: 2,
      name: `${strings.quarterTransfer}`,
      imgUrl:
        "https://souq.car/storage/car_bodies/wyZLd2q9IbZsMRzamaymkViz7aZrJat3rhxB8TYr.png",
    },
    {
      id: 3,
      name: `${strings.convertible}`,
      imgUrl:
        "https://souq.car/storage/car_bodies/PVXc0rflnzlUrtkJPeUqeVjeVaPvKDM1e8GrILVB.png",
    },
    {
      id: 4,
      name: `${strings.hatchback}`,
      imgUrl:
        "	https://souq.car/storage/car_bodies/KhIZBFI6HuROkDGKh3Rw6pkZcvOoyg2o7pyCG5Bf.png",
    },
    {
      id: 5,
      name: `${strings.coupe}`,
      imgUrl:
        "	https://souq.car/storage/car_bodies/9Bf8qujWRIk3xmEx8fydhXu55GDaQCry12KohHUp.png",
    },
    {
      id: 6,
      name: `${strings.crossover}`,
      imgUrl:
        "https://souq.car/storage/car_bodies/YGC92Ool7dhvaBW0nFjujKaNpVxPFU25lGsDkdCo.png",
    },
    {
      id: 7,
      name: `${strings.bus}`,
      imgUrl:
        "	https://souq.car/storage/car_bodies/0drZ3AMQqda2XdvXmS5RCMY1SbIKErVycCpiArZF.png",
    },
    {
      id: 8,
      name: `${strings.miniVan}`,
      imgUrl:
        "https://souq.car/storage/car_bodies/VgtZsF6LR7qitVsLNZS8trE655Xo4qXDq2VYLf1T.png",
    },
    {
      id: 9,
      name: `${strings.pickup}`,
      imgUrl:
        "https://souq.car/storage/car_bodies/yMTZOivrvlK46ZrSN1uyaIVY9oV7uyFvoAnDJk6C.png",
    },
    {
      id: 10,
      name: `${strings.stationWagon}`,
      imgUrl:
        "	https://souq.car/storage/car_bodies/OjgIf5HiJzIpk1I3FIfNPjLDPz9HFVPsfSIYc5r8.png",
    },
  ];

  return (
    <>
      <div className="mainDiv p-3">
        {/* <Edit/> */}
        <CarSearch />
        <CarSwiper car={carBrand} titleName={strings.searchByCarBrands} />
        <ExploreSection />
  
        <FeaturedAds />
        <CarSwiper car={carTypes} titleName={strings.searchByCarBodyTypes} />
        <CarCard />
      </div>
    </>
  );
};
export default MainPage;
