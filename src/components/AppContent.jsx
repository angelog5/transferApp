import Booking from "./Booking";
import Navbar from "./Navbar";

export default function AppContent({ page, setPage }) {
  return (
    <div>
      {page === "booking" && <Booking />}
      <Navbar page={page} setPage={setPage} />
    </div>
  );
}
