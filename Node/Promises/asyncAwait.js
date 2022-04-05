

const cookMojetations = async (ingredient) => {
  // Partir el pan
  // Colocar frijoles
  // Colocar queso
  // Hornear
  // Servir
  //const ingredient = "Pan";

  /*partirPan(ingredient)
    .then(colocarFrijoles)
    .then(colocarQueso)
    .then(hornear)
    .then(servir)
    .catch((error) => {
      console.log("Error: ", error);
    })
    .finally(() => {
      console.log("Todo fine");
    });*/
  const partirPan = (ingredient) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`${ingredient} partido.`);
        resolve(ingredient);
      }, 1000);
    });
  };

  const colocarFrijoles = (ingredient) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`${ingredient} con frijoles.`);
        resolve(ingredient);
      }, 1500);
    });
  };

  const colocarQueso = (ingredient) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`${ingredient} con queso.`);
        resolve(ingredient);
      }, 2000);
    });
  };

  const hornear = (ingredient) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`${ingredient} horneado.`);
        resolve(ingredient);
      }, 2500);
    });
  };

  const servir = (ingredient) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`Mojete servido`);
        resolve("Mojete");
      }, 3000);
    });
  };
    try {
      const partir = await partirPan(ingredient);
      const frijoles = await colocarFrijoles(partir);
      const queso = await colocarQueso(frijoles);
      const hornearPan = await hornear(queso);
      return await servir(hornearPan)
    } catch (error) {
      console.log(`Error: ${error}`)
    }
};

const cookChilakilations = async (ingredient) => {
  const freir = (ingredient) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`${ingredient} frita`);
        resolve(ingredient);
      }, 1000);
    });
  };
  const colocarSalsa = (ingredient) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`${ingredient} bañada`);
        resolve(ingredient);
      }, 1500);
    });
  };
  const servirChilaquiles = (ingredient) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Chilaquiles servidos")
        resolve("Chilaquiles");
      }, 2000);
    });
  };

  try{
      const freirTortilla = await freir(ingredient);
      const salsa = await colocarSalsa(freirTortilla);
      return await servirChilaquiles(salsa)
  }
  catch (error) {
    console.log("Error: ", error)
  }
};

const order = async () => {
  const order1 = await cookChilakilations("Tortilla");
  const order2 = await cookMojetations("Pan")

  console.log("Orden 1:", order1);
  console.log("Orden 2:", order2);
};

order();

