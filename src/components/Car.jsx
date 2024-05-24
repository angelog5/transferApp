import "../assets/css/car.css";

const carData = {
  model: "White Tesla",
  price: "100$/Day",
  image:
    "https://service.tesla.com/docs/Public/diy/images/GUID-BEE67A59-6DD7-460C-9C49-0DD47E707A02-online-en-US.png",
};

export function Car({ model, price, image }) {
  return (
    <div className="car-container">
      <div className="content-container">
        <h1 className="car-model">{model}</h1>
        <p className="car-price">{price}</p>
      </div>
      <div className="image-container">
        <img src={image} alt={`${model}`} className="car-image" />
      </div>
    </div>
  );
}
