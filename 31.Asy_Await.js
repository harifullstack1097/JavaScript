// Promises for each food/drink order
function makePizzaOrder() {
  return new Promise((resolve) => {
    console.log("Pizza order placed — waiting 5 seconds");
    setTimeout(() => {
      resolve("Pizza is ready");
    }, 5000);
  });
}

function makeJuiceOrder() {
  return new Promise((resolve) => {
    console.log("Juice order placed — waiting 3 seconds");
    setTimeout(() => {
      resolve("Juice is ready");
    }, 3000);
  });
}

function makeBurgerOrder() {
  return new Promise((resolve) => {
    console.log("Burger order placed — waiting 4 seconds");
    setTimeout(() => {
      resolve("Burger is ready");
    }, 4000);
  });
}

function makeFriesOrder() {
  return new Promise((resolve) => {
    console.log("Fries order placed — waiting 2 seconds");
    setTimeout(() => {
      resolve("Fries are ready");
    }, 2000);
  });
}

async function displayOrderProgress() {
  try {
    console.log("Welcome to Fast Food Restaurant");

    const pizzaStatus = await makePizzaOrder();
    console.log(pizzaStatus);

    const juiceStatus = await makeJuiceOrder();
    console.log(juiceStatus);

    const burgerStatus = await makeBurgerOrder();
    console.log(burgerStatus);

    const friesStatus = await makeFriesOrder();
    console.log(friesStatus);

    console.log("All orders are ready. Enjoy your food!");
  } catch (err) {
    console.error("Something went wrong in the ordering process:", err);
  }
}

displayOrderProgress();


