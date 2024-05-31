import "../assets/css/car.css";

const carData = {
  name: "White Tesla",
  price: "100$/Day",
  image:
    "https://service.tesla.com/docs/Public/diy/images/GUID-BEE67A59-6DD7-460C-9C49-0DD47E707A02-online-en-US.png",
};

export default function Car({
  name,
  price,
  image,
  id,
  isWish,
  handleWishlist,
}) {
  return (
    <div className="car-container">
      <div className="content-container">
        <h1 className="car-name">{name}</h1>
        <p className="car-price">{price}</p>
      </div>
      <div className="image-container">
        <img src={image} alt={`${name}`} className="car-image" />
      </div>
      <button className="car-wishlist" type="button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke={isWish(id) ? "#ff0000" : "currentColor"}
          onClick={() => {
            handleWishlist(id);
          }}
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </svg>
      </button>
    </div>
  );
}
