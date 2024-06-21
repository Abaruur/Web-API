fetch("https://hplussport.com/api/products?order=name")
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonData) {
    // console.log(jsonData)
    // var name = jsonData[0].name;
    // console.log(name);

    // var products = document.createElement('li');
    // products.innerHTML = jsonData[0].name;
    // document.body.appendChild(products);

    for (items in jsonData) {
      var productName = jsonData[items].name;

      // get all the product names
      var productName = jsonData[items].name;

      // create HTML Element to display all these products( in a list)
      // first create a new variable called product
      var products = document.createElement("li");
      // add this API data to our list item elements
      products.innerHTML = productName;
      // then add to our page
      document.body.appendChild(products);

      // add product images
      var productImg = jsonData[items].image;
      var image = document.createElement("img");

      //instead of using the innerHTML,set the source attribute for this image to be equal to
      // to the image URL that we got from the API response
      image.setAttribute("src", productImg);
      // add to the web page
      document.body.appendChild(image);
    }
  });
