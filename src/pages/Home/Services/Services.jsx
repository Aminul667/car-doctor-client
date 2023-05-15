import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://car-doctor-server-six-ruddy.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="mt-4">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-orange-600">our Services</h2>
        <h2 className="text-5xl">Our Service Area</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which do not look even slightly
          believable.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {
            services.map(service => <ServiceCard
                key={service._id}
                service={service}
            ></ServiceCard>)
        }
      </div>
    </div>
  );
};

export default Services;
