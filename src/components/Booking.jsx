import Car from "./Car";
import "../assets/css/Booking.css";
import SearchForm from "./SearchForm";
import useWishlist from "../hooks/useWishlist";
import { BASEURL, fetcher } from "../utils";
import useSWR from "swr";
import { useEffect, useRef, useState } from "react";

export default function Booking() {
  const { data, error, isLoading, mutate } = useSWR(BASEURL + "/cars", fetcher);

  const [filteredData, setFilteredData] = useState([]);

  const idRef = useRef();
  const nameRef = useRef();
  const searchRef = useRef();

  const handleSearch = () => {
    const search = searchRef.current.value;
    const filteredArray = data.filter(({ name }) => {
      const lowerName = name.toLowerCase();
      return lowerName.includes(search.toLowerCase());
    });
    setFilteredData(filteredArray);
  };

  useEffect(() => {
    if (data) setFilteredData(data);
  }, []);

  const changeNameById = async (id, name) => {
    return await fetch(BASEURL + "/cars/" + id, {
      method: "PATCH",
      body: JSON.stringify({ name }),
    }).then((r) => r.json());
  };

  const handleMutate = async (e) => {
    e.preventDefault();
    // come prendo id e nome dal form?
    const idValue = idRef.current.value;
    const nameValue = nameRef.current.value;

    await changeNameById(idValue, nameValue);
    const newData = data.map((car) => {
      if (car.id == idValue) car.name = nameValue;
      return car;
    });
    mutate(newData);
  };

  const { isWish, handleWishlist } = useWishlist();

  return (
    <div>
      <div className="searchForm">
        <SearchForm />
      </div>
      <form onSubmit={handleMutate}>
        <input type="text" placeholder="Inserisci ID" ref={idRef} />
        <input type="text" placeholder="Inserisci nome" ref={nameRef} />
        <button type="submit">Modifica auto</button>
      </form>
      <form>
        <input
          type="text"
          placeholder="Cerca tra le auto..."
          ref={searchRef}
          onChange={handleSearch}
        />
      </form>
      <div className="cars-container">
        {isLoading && <span>Carico le auto...</span>}
        {error && <span>Errore durante il caricamento delle auto</span>}
        {filteredData &&
          filteredData.map(({ id, name, price, image }) => (
            <Car
              key={id}
              name={name}
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
