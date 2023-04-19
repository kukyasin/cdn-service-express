const checkElement = setInterval(async function () {
  const elementToCheck = document.querySelector(".AdresAdSoyad");
  if (elementToCheck) {
    clearInterval(checkElement);

    data_to_post = {};
    data_to_post.sender_store = window.location.hostname;
    data_to_post.client_created_at = Date.now();

    urlAddress =
      "https://pamajans.ticimaxtest.com/api/member/GetMemberAddress?ExcludeStoreRegion=true";
    urlCart =
      "https://pamajans.ticimaxtest.com/api/cart/GetMemberCart?c=trtry0000&ProductType=0";

    await fetch(urlCart)
      .then((response) => response.json())
      .then((data) => {
        let productList = [];
        data.cart.products.forEach((product) =>
          productList.push(product.productName)
        );
        data_to_post.cart_created_at = data.cart.cartDate;
        data_to_post.products = productList;
      })
      .catch((error) => {});

    await fetch(urlAddress)
      .then((response) => response.json())
      .then((data) => {
        data_to_post.mobile_phone = data.addresses[0].telephone;
        data_to_post.full_name = data.addresses[0].firstAndLastName;
      })
      .catch((error) => {
        console.error(error);
      });

    fetch("https://cdn-microservice-pushouse.fcanmekikoglu.repl.co/cdn", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data_to_post,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
    data_to_post = {};
  }
}, 1000);
