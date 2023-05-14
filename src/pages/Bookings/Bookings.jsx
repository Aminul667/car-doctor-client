import { useContext, useEffect, useState } from "react";
import { authContext } from "../../providers/AuthProvider";

const Bookings = () => {
  const { user } = useContext(authContext);
  const [bookings, setBookings] = useState([]);
  console.log(user);

  const url = `http://localhost:5000/bookings?email=${user.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div>
      <h2>Bookings</h2>
    </div>
  );
};

export default Bookings;
