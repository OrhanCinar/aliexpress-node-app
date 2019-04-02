var AliExpressSpider = require("aliexpress");

AliExpressSpider.BestSelling.get().then(
  products => {
    console.log(products);
  },
  function(error) {
    console.log(error);
  }
);

AliExpressSpider.Detail()
  .get()
  .then(
    product => {
      console.log(product);
    },
    function(error) {
      console.log(error);
    }
  );
