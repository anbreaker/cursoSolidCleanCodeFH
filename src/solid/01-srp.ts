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
    loadProduct(id: number) {
      // Performs a process to obtain the product and return it to the customer.
      console.log('Product: ', { id, name: 'OLED Tv' });
    }

    notifyClients() {
      console.log('Sending mail to customers');
    }
  }

  class CartBlock {
    private itemsInCart: Object[] = [];

    onAddToCart(productId: number) {
      console.log('Add to cart ', productId);
    }
  }

  const productBloc = new ProductBloc();
  const cartBlock = new CartBlock();

  productBloc.loadProduct(10);
  productBloc.saveProduct({ id: 10, name: 'OLED TV' });
  productBloc.notifyClients();
  cartBlock.onAddToCart(10);
})();
