// Chasis -> vestidura, ensamblado
// Carrocería -> ensamblar puetas, colocar vidrios, lijar, pintar -> Colocar en el chasis
// Preparar para venta -> inflar llantas, colocar llantas, colocar gasolina, colocar aceite
// Mandar a la agencia -> Lavar, -> Se sube a la madrina -> Se inicia el viaje
// Recibir en la agencia -> Recepción del carro, colocar en la exhibición

// Identificar que puede ser asíncrono y que tiene que ser síncrono
// En la agencia se reciban 20 carros distintos

const carro1 = {
  chasis: {
    vestidura: false,
    ensamblada: false,
  },
  carroceria: {
    puertas: false,
    ventanas: 0,
    lijada: false,
    color: "",
    llantas: 0,
  },
  gasolina: false,
  aceite: false,
  limpio: false,
  locacion: "Fabrica",
  inventariado: false,
  exhibido: false,
};

const construirChasis = async (carro) => {
  const vestidura = (carro) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!carro.chasis.vestidura) {
          carro.chasis.vestidura = true;
          resolve(carro);
        } else {
          reject("Error vestidura");
        }
      }, 1000);
    });
  };
  const ensamblada = (carro) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!carro.chasis.ensamblada) {
          carro.chasis.ensamblada = true;
          resolve(carro);
        } else {
          reject("Error Ensamblada");
        }
      }, 2000);
    });
  };

  try {
    const ponerVestidura = await vestidura(carro);
    return await ensamblada(ponerVestidura);
  } catch (error) {
    console.log("Error: ", error);
  }
};

const construirCarroceria = async (carro) => {
  const colocarPuertas = (carro) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!carro.carroceria.puertas) {
          carro.carroceria.puertas = true;
          resolve(carro);
        } else {
          reject("Error al colocar puertas");
        }
      }, 1000);
    });
  };
  const colocarVentanas = (carro) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (carro.carroceria.ventanas == 0) {
          carro.carroceria.ventanas = 4;
          resolve(carro);
        } else {
          reject("Error al colocar ventanas");
        }
      }, 2000);
    });
  };
  const lijarCarroceria = (carro) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!carro.carroceria.lijada) {
          carro.carroceria.lijada = true;
          resolve(carro);
        } else {
          reject("Erro en la lijada de la carroceria");
        }
      }, 3000);
    });
  };
  const colorCarroceria = (carro) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (carro.carroceria.color == "") {
          carro.carroceria.color = "Rojo";
          resolve(carro);
        } else {
          reject("Error en la asignacion de color en la carroceria");
        }
      });
    });
  };
  const colocarLlantas = (carro) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (carro.carroceria.llantas == 0) {
          carro.carroceria.llantas = 4;
          resolve(carro);
        } else {
          reject("Error en la colocacion de las llantas");
        }
      });
    });
  };

  try {
    const puertas = await colocarPuertas(carro);
    const ventanas = await colocarVentanas(puertas);
    const lijar = await lijarCarroceria(ventanas);
    const color = await colorCarroceria(lijar);
    return await colocarLlantas(color);
  } catch (error) {
    console.log("Error: ", error);
  }
};

const gasolina = (carro) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(!carro.gasolina){
        carro.gasolina = true;
        resolve(carro);
      } else {
        reject("El carro aun no tiene gasolina");
      }
    });
  });
};

const aceite = (carro) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(!carro.aceite){
        carro.aceite = true;
        resolve(carro);
      } else {
        reject("El carro aun no tiene aceite");
      }
    });
  });
};

const limpio = (carro) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(!carro.limpio){
        carro.limpio = true;
        resolve(carro);
      } else {
        reject("El carro aun no tiene limpio");
      }
    });
  });
};

const ubicacion = (carro) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(carro.locacion == 'Fabrica'){
        carro.locacion = 'Tienda';
        resolve(carro);
      } else {
        reject("El carro aun no esta en tienda");
      }
    });
  });
};

const inventario = (carro) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(!carro.inventariado){
        carro.inventariado = true;
        resolve(carro);
      } else {
        reject("El carro aun no esta en inventario");
      }
    });
  });
};

const exhibido = (carro) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(!carro.exhibido){
        carro.exhibido = true;
        resolve(carro);
      } else {
        reject("El carro aun no esta exhibido");
      }
    });
  });
};

const construirVehiculo = async () => {
  construirChasis(carro1)
    .then(construirCarroceria)
    .then(gasolina)
    .then(aceite)
    .then(limpio)
    .then(ubicacion)
    .then(inventario)
    .then(exhibido)
    .finally(() => {
      console.log("Vehiculo 1:\n", carro1);
    });
};

construirVehiculo();
