var AliExpressSpider = require("aliexpress");

AliExpressSpider.BestSelling.get().then(
  products => {
    console.log(products);
  },
  function(error) {
    console.log(error);
  }
);
