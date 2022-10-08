import { getStoredCart } from "../../utilities/fakedb";

export const ProductsAndCartLoaders = async () => {
    // get products
    const productsData = await fetch('products.json');
    const products = await productsData.json();

    // get cart
    const saveCart = getStoredCart();
    const initialCart = [];
    // console.log('saved cart', saveCart);
    for(const id in saveCart){
        // console.log(id);
        const addedProduct = products.find(product => product.id === id);
        // console.log(id, addedProduct);
        if(addedProduct){
            const quantity = saveCart[id];
            addedProduct.quantity = quantity;
            initialCart.push(addedProduct);
        }
    }
    return {products: products, initialCart: initialCart};
}