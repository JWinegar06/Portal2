let productArray = [];

function addProduct() {
  
  let input = document.getElementById("product").value.trim(); 

  if (input === "") {
    alert("Please enter a product name.");
    return false;
  }

  let productDiv = document.createElement("div");

  let output = document.getElementById("output");

  let newProduct = { name: input };
  productArray.push(newProduct);
  console.log(productArray); 

  document.getElementById("product").value = "";

  output.style.display = "block";

  output.innerHTML = "";

  for (let i = 0; i < productArray.length; i++) {
    let itemDiv = document.createElement("div");
    itemDiv.textContent = `${productArray[i].name}`;
    output.appendChild(itemDiv);
  }

  return false;
}