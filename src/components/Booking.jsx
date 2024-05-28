import Car from "./Car";
import "../assets/css/Booking.css";
import SearchForm from "./SearchForm";
import useWishlist from "../hooks/useWishlist";

export default function Booking() {
  const cars = [
    {
      id: 1,
      model: "White Tesla",
      price: "100$/Day",
      image:
        "https://service.tesla.com/docs/Public/diy/images/GUID-BEE67A59-6DD7-460C-9C49-0DD47E707A02-online-en-US.png",
    },
    {
      id: 2,
      model: "Black Tesla",
      price: "120$/Day",
      image:
        "https://service.tesla.com/docs/Public/diy/images/GUID-BEE67A59-6DD7-460C-9C49-0DD47E707A02-online-en-US.png",
    },
    {
      id: 3,
      model: "Orange Tesla",
      price: "150$/Day",
      image:
        "https://service.tesla.com/docs/Public/diy/images/GUID-BEE67A59-6DD7-460C-9C49-0DD47E707A02-online-en-US.png",
    },
  ];

  const { isWish, handleWishlist } = useWishlist();

  return (
    <div>
      <div className="searchForm">
        <SearchForm />
      </div>
      <div className="cars-container">
        {cars.map(({ id, model, price, image }) => (
          <Car
            key={id}
            model={model}
            price={price}
            image={image}
            id={id}
            isWish={isWish}
            handleWishlist={handleWishlist}
          />
        ))}
      </div>
    </div>
  );
}
