interface Car {
    make: string;
    model: string;
  }
  
  type Bus = {
    make: string;
    model: string;
    payloadCapacity: number;
  };
  
  type Vehicle = Car | Bus;
  
  const veiculo1: Vehicle = { make: "Toyota", model: "Corolla" };
  const veiculo2: Vehicle = { make: "Mercedes", model: "Sprinter", payloadCapacity: 1000 };