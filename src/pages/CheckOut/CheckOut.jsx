import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { authContext } from "../../providers/AuthProvider";

const CheckOut = () => {
  const service = useLoaderData();

  const { title, _id, price, img } = service;
  const { user } = useContext(authContext);

  const handleBookService = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;
    const booking = {
      customerName: name,
      email,
      img,
      date,
      service: title,
      service_id: _id,
      price: price,
    };

    console.log(booking);

    fetch('https://car-doctor-server-six-ruddy.vercel.app/bookings', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(booking)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.insertedId){
            alert('service booked successfully')
        }
    })
  };

  return (
    <div>
      <h1 className="text-center text-3xl">Book Service: {title}</h1>
      <div className="card-body">
        <form onSubmit={handleBookService}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                defaultValue={user?.displayName}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input type="date" name="date" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                defaultValue={user?.email}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Due Amount</span>
              </label>
              <input
                type="text"
                defaultValue={"$ " + price}
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <input
              type="submit"
              value="Order Confirm"
              className="btn btn-primary btn-block"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
