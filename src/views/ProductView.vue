<template>
  <div class="container">

    <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item" v-for="(item, index) in groupMenu" :key="index">
              <a class="nav-link" href="#" @click="getCategories(item.id, item.title)">{{item.title}}</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <h3 class="active_group">{{this.activeTitleGroup}}</h3>

    <div class="row">
      <div class="col-md-2">
        <nav class="sidebar-sticky navbar-expand-md">
            <ul class="navbar-nav mr-auto flex-column">
              <li class="nav-item" v-for="(item, index) in categoryMenu" :key="index">
                <a href="#" class="nav-link" @click="getCategoryProducts(item.id, item.title)">{{item.title}}</a>
              </li>
            </ul>
        </nav>
      </div>
      <div class="col-md-8 product">
        <h5 class="product__caption">{{ this.titleCategory }}</h5>
        <div class="row">
          <div class="col-md-4 card" v-for="(product, index) in products" :key="index">
            <img class="card product__image" :src="product.url" alt="">
            <a href="#" class="btn btn-primary" @click="addToCart(product)">В корзину</a>
            <p class="product__price">{{product.price}} грн.</p>
            <p class="product__title">{{product.title}}</p>
          </div>
        </div>
      </div>

      <div class="col-md-2 cart">
        <h5 class="cart__caption">
          <a href="#" @click="getCartProducts()">Корзина</a>
        </h5>

        <table class="table">
          <thead>
            <tr>
              <th>Товар</th>
              <th>Кол</th>
              <th>Цена</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(product, index) in cartProducts" :key="index">
              <td style="font-size: 12px">
                {{product.title}}
              </td>
              <td>
                {{product.qty}}
                <span class="badge rounded-pill bg-primary">+</span>
                <span class="badge bg-danger">-</span>
              </td>
              <td>
                {{product.price}}
              </td>
            </tr>
          </tbody>
        </table>

        <h5 class="cart__total">Итого {{totalPrice}} грн.</h5>

        <div class="d-grid" v-if="cartProducts.length > 0">
          <input class="form-control" type="text" v-model="name" placeholder="name">
          <input class="form-control" type="email" v-model="email" placeholder="email">
          <input @click.prevent="storeOrder()" type="submit" class="btn btn-primary" value="Подтвердить">
          <button @click="clearCart()" class="btn btn-danger" type="button">Очистить корзину</button>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "ProductView",
  created() {
    this.getGroups();
    this.getCartProducts();
  },
  data() {
    return {
      groupMenu: [],
      categoryMenu: [],
      baseUrl: 'http://bot/api',
      activeGroup: 0,
      products: [],
      titleCategory: '',
      activeTitleGroup: '',
      cartProducts: [],
      name: '',
      email: '',
    }
  },
  methods: {
    storeOrder() {
      this.axios.post(this.baseUrl + '/orders', {
        'products': this.cartProducts,
        'name': this.name,
        'email': this.email,
        'total_price': this.totalPrice
      })
    },
    getGroups() {
      this.axios.get(`${this.baseUrl}/groups`)
          .then(res => {
            this.groupMenu = res.data;
            this.activeGroup = this.groupMenu[0]['id'];
            this.getCategories(this.activeGroup, this.groupMenu[0]['title']);
            this.getRandomProducts();
          })
    },
    getCategories(groupId, groupTitle) {
      this.axios.get(`${this.baseUrl}/categories/${groupId}`)
          .then(res => {
            this.categoryMenu = res.data[0]
          })
      this.activeTitleGroup = groupTitle
    },
    getRandomProducts() {
      this.axios.get(`${this.baseUrl}/random-products`)
          .then(res => {
            this.products = res.data[0]
          })
      this.titleCategory = 'Randomize Products'
    },
    getCategoryProducts(categoryId, categoryTitle) {
      this.axios.get(`${this.baseUrl}/category-products/${categoryId}`)
          .then(res => {
            this.products = res.data[0]
          })
      this.titleCategory = categoryTitle
    },
    addToCart(product) {

      let qty = 1;
      let cart = localStorage.getItem('cart');

      let newProduct = [
        {
          'id': product.id,
          'image_url': product.url,
          'title': product.title,
          'price': product.price,
          'qty': qty
        }
      ]

      if (!cart) {
        localStorage.setItem('cart', JSON.stringify(newProduct))
      } else {
        cart = JSON.parse(cart);

        cart.forEach(productInCart => {
          if (productInCart.id === product.id) {
            productInCart.qty = Number(productInCart.qty) + Number(qty)
            newProduct = null
          }
        })
        Array.prototype.push.apply(cart, newProduct)
        localStorage.setItem('cart', JSON.stringify(cart))
        this.getCartProducts()
      }
    },
    getCartProducts() {
      let cart = localStorage.getItem('cart');
      if (cart) {
        this.cartProducts = JSON.parse(localStorage.getItem('cart'));
      } else {
        this.cartProducts = [];
      }
    },
    clearCart() {
      this.cartProducts = this.cartProducts.splice(0, this.cartProducts.length);
      localStorage.removeItem('cart');
    }
  },
  computed: {
    totalPrice() {
      let total = 0;

      this.cartProducts.forEach(product => {
        total += product.price * product.qty;
      })

      return total;
    }
  }
}
</script>

<style scoped>

</style>