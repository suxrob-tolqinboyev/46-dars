let products = [
  {
    id: 1,
    name: "Samsung Galaxy S24 Ultra",
    category: "Telefonlar",
    price: 1499.99,
    stock: 100,
  },
  {
    id: 6,
    name: "Samsung Galaxy S24",
    category: "Telefonlar",
    price: 1499.99,
    stock: 100,
  },
  {
    id: 2,
    name: "Apple iPhone 16 Pro Max",
    category: "Telefonlar",
    price: 1399.99,
    stock: 200,
  },
  {
    id: 3,
    name: "BWM X7",
    category: "Mashinalar",
    price: 120000.99,
    stock: 300,
  },
  {
    id: 4,
    name: "Mersedes Benz S600",
    category: "Mashinalar",
    price: 40900.99,
    stock: 400,
  },
  {
    id: 5,
    name: "HP Pavilion 15",
    category: "Kompyuterlar",
    price: 500,
    stock: 500,
  },
];

function getProductById(id) {
  for (let item of products) {
    if (item.id === id) {
      return item;
    }
  }

  return "topilmadi";
}

function addProduct(name, category, price, stock) {
  const t = { id: products.length + 1, name, category, price, stock };

  products.push(t);
}

function deleteProduct(id) {
  products = products.filter((item) => item.id != id);
}

// console.log(products);

function searchProduct(keyword) {
  return products.filter((item) =>
    item.name.toLowerCase().includes(keyword.toLowerCase())
  );
}

// 1.Get
const res = getProductById(1);

console.log("1. ", res);

// 2. Add
addProduct("Lenovo", "Kompyuterlar", 500, 50);

console.log("2. ", products); // { id: 6, name: "Lenovo", ...}

//   // 3. Delete
deleteProduct();

console.log("3. ", products); // 5 - yo'q

// 4. Search
const res3 = searchProduct("sam");

console.log("4. ", res3);

//      UYGA VAZIFA
function menu() {
  const variant = +prompt(` 
  1.Hammasini ko'rsat.
  2.Aydi bilan ko'rsat.
  3.Izlash. 
  4.O'chirish.`);

  switch (variant) {
    case 1: {
      let str = "";

      for (let item of products) {
        str +=
          item.name +
          " " +
          item.category +
          " " +
          item.price +
          " " +
          item.stock +
          "\n";
      }

      alert(str);
      menu ();
    }

    case 2: {
      const id = parseInt(prompt("Qidirilayotgan ID ni kiriting: "));
      const product = getProductById(id);

      if (product) {
        const str =
          product.name +
          " " +
          product.price +
          " " +
          product.category +
          " " +
          product.stock;
        alert(str);
      } else {
        alert("Kiritilgan ID mavjud emas.");
      }
      menu ();
      break;
    }

    case 3: {
      const keyword = prompt("Qidirilayotgan mahsulot nomi");
      console.log(keyword);

      const res = searchProduct(keyword);

      let str = "";
      if (res.length > 0) {
        for (let item of res) {
          str += item.name + " " + item.price + "\n";
        }
      } else {
        str = "topilmadi";
      }
      alert(str);
      menu ();
      break;
    }
    case 4: {
      const id = +prompt("IDni kiriting: ");
      const product = getProductById(id);
      if (product) {
        deleteProduct(id);
        alert("Mahsulot o'chirildi: " + product.name);
      } else {
        alert("Bunday ID topilmadi.");
      }
      break;
    }
    default: {
      alert("Noto'g'ri tanlov !");
      menu ();
      break;
    }
  }
}

menu ();