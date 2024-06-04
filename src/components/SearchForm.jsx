import { useRef, useState } from "react";
import "../assets/css/SearchForm.css";
import useSWR from "swr";
import { BASEURL, fetcher } from "../utils";

export default function SearchForm() {
  const pickupReturnRef = useRef();
  const pickupDateRef = useRef();
  const pickupTimeRef = useRef();
  const returnDateRef = useRef();
  const returnTimeRef = useRef();
  const pickupRef = useRef();
  const returnRef = useRef();
  const [selectId, setSelectId] = useState(0);

  const { data, error, isLoading } = useSWR(BASEURL + "/locations", fetcher);

  const isValidForm = (form) => {
    for (const key in form) {
      if (form[key] === "") return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = {
      pickupReturn: pickupReturnRef.current.value,
      pickupDate: pickupDateRef.current.value,
      pickupTime: pickupTimeRef.current.value,
      returnDate: returnDateRef.current.value,
      returnTime: returnTimeRef.current.value,
    };
    if (!isValidForm(form)) alert("Non sono accettati campi vuoti");
    console.log(form);
  };

  const handleChange = (e) => {
    const id = e.target.value;
    setSelectId(id);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="input-group">
        <select id="pickupselect" ref={pickupRef} onChange={handleChange}>
          <option>select option</option>
          {!isLoading &&
            !error &&
            data &&
            data.map(({ id, name }) => (
              <option value={id} disabled={id == selectId}>
                {name}
              </option>
            ))}
        </select>
        <select id="returnselect" ref={returnRef} onChange={handleChange}>
          <option>select option</option>
          {!isLoading &&
            !error &&
            data &&
            data.map(({ id, name }) => (
              <option value={id} disabled={id == selectId}>
                {name}
              </option>
            ))}
        </select>
      </div>
      <div className="date-group">
        <div className="date-input">
          <label htmlFor="pickup-date">Pickup Date</label>
          <input type="date" id="pickup-date" ref={pickupDateRef} />
        </div>
        <div className="time-input">
          <label htmlFor="pickup-time">Pickup Time</label>
          <input type="time" id="pickup-time" ref={pickupTimeRef} />
        </div>
        <div className="date-input">
          <label htmlFor="return-date">Return Date</label>
          <input type="date" id="return-date" ref={returnDateRef} />
        </div>
        <div className="time-input">
          <label htmlFor="return-time">Return Time</label>
          <input type="time" id="return-time" ref={returnTimeRef} />
        </div>
      </div>
      <button type="submit" className="btn btn-primary">
        Search
      </button>
    </form>
  );
}
