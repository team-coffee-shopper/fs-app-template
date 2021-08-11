export function makeCart(wine) {
    localStorage.setItem('cart', JSON.stringify(wine))
  }

  export function getCart(){
    if (localStorage.getItem('cart')) {
        return JSON.parse(localStorage.getItem('cart'))
      } else {
        makeCart([])
        return []
      }
  }

  export function addWineToCart(wine, qty){
    let newCart = getCart()
    for (let i = 0; i < newCart.length; i++) {
      if (newCart[i].id === wine.id) {
        newCart[i].qty += qty
        setShoppingCart(newCart)
        return newCart
      }
    }
    newCart.push(product)
    setShoppingCart(newCart)
    return newCart
  }