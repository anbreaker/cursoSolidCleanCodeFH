(() => {
  interface Product {
    id: number;
    name: string;
  }

  class ProductServices {
    getProduct(id: number) {
      console.log('Product: ', { id, name: 'OLED Tv' });
    }

    saveProduct(product: Product) {
      console.log('Saving to database', product);
    }
  }

  class Mailer {
    private masterEmail: string = 'anbreaker@gmail.com';

    sendEmail(emailList: string[], template: 'to-clients' | 'to-admin') {
      console.log('Sending email to: ', template);
    }
  }

  // Usually, this is a class to control the view that is displayed to the user.
  // Remember that we can have many views that do this same job.
  class ProductBloc {
    private productServices: ProductServices;
    private mailer: Mailer;

    constructor(productServices: ProductServices, mailer: Mailer) {
      this.productServices = productServices;
      this.mailer = mailer;
    }

    loadProduct(id: number) {
      this.productServices.getProduct(id);
    }

    saveProduct(product: Product) {
      this.productServices.saveProduct(product);
    }

    notifyClients() {
      this.mailer.sendEmail(['anbreaker@gmail.com'], 'to-clients');
    }
  }

  class CartBlock {
    private itemsInCart: Object[] = [];

    onAddToCart(productId: number) {
      console.log('Add to cart ', productId);
    }
  }

  const productServices = new ProductServices();
  const mailer = new Mailer();

  const productBloc = new ProductBloc(productServices, mailer);
  const cartBlock = new CartBlock();

  productBloc.loadProduct(10);
  productBloc.saveProduct({ id: 10, name: 'OLED TV' });
  productBloc.notifyClients();
  cartBlock.onAddToCart(10);
})();
