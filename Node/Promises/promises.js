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
    }, 2000);
  });
};

const colocarQueso = (ingredient) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`${ingredient} con queso.`);
      resolve(ingredient);
    }, 3000);
  });
};

const hornear = (ingredient) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`${ingredient} horneado.`);
      resolve(ingredient);
    }, 4000);
  });
};

const servir = (ingredient) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Mojete servido`);
      resolve(ingredient);
    }, 5000);
  });
};

const cookMojetations = () => {
  // Partir el pan
  // Colocar frijoles
  // Colocar queso
  // Hornear
  // Servir
  const ingredient = "Pan";

  partirPan(ingredient)
    .then(colocarFrijoles)
    .then(colocarQueso)
    .then(hornear)
    .then(servir)
    .catch((error) => {
      console.log("Error: ", error);
    })
    .finally(() => {
      console.log("Todo fine");
    });
};

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
    }, 2000);
  });
};

const servirChilaquiles = (ingredient) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Chilaquiles servidos`);
      resolve(ingredient);
    }, 3000);
  });
};
const cookChilakilations = () => {
  const ingredient = "Tortilla";
  //Freir tortilla
  //Colocar salsa
  //Servir
  freir(ingredient)
    .then(colocarSalsa)
    .then(servirChilaquiles)
    .catch((error) => {
      console.log("Error: ", error);
    })
    .finally(() => {
      console.log("Todo fine");
    });
};

//const order1 = cookMojetations();
//console.log(order1);

const order2 = cookChilakilations()
console.log(order2)