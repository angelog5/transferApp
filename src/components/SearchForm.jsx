import "../assets/css/SearchForm.css"

export default function SearchForm() {
    return (
    <form className="search-form">
    <div className="input-group">
      <input type="text" placeholder="🔍Pickup and Return" className="pickup-return-input" />
    </div>
    <div className="date-group">
      <div className="date-input">
        <label htmlFor="pickup-date">Pickup Date</label>
        <input type="date" id="pickup-date" />
      </div>
      <div className="time-input">
        <label htmlFor="pickup-time">Pickup Time</label>
        <input type="time" id="pickup-time" />
      </div>
      <div className="date-input">
        <label htmlFor="return-date">Return Date</label>
        <input type="date" id="return-date" />
      </div>
      <div className="time-input">
        <label htmlFor="return-time">Return Time</label>
        <input type="time" id="return-time" />
      </div>
    </div>
    <button type="submit" className="search-button">Search</button>
  </form>
  )  
}
