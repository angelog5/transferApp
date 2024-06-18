import { useSelector } from "react-redux";
import Booking from "./Booking";
import BookingSummary from "./BookingSummary";
import Navbar from "./Navbar";

export default function AppContent() {
  const { page } = useSelector((state) => state.global);

  return (
    <div>
      {page === "booking" && <Booking />}
      {page === "bookingSummary" && <BookingSummary carName={"Audi R8"} />}
      <Navbar />
    </div>
  );
}
