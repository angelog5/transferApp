import Booking from "./Booking";
import BookingSummary from "./BookingSummary";
import Navbar from "./Navbar";

export default function AppContent({ page, setPage }) {
  return (
    <div>
      {page === "booking" && <Booking />}
      {page === "bookingSummary" && <BookingSummary carName={"Audi R8"} />}
      <Navbar page={page} setPage={setPage} />
    </div>
  );
}
