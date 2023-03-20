import { OrderDTO } from "../model/order";

export function save(cart: OrderDTO){
    const str = JSON.stringify(cart);
    localStorage.setItem("com.kortega90.dscommerce/Cart", str)
}

export function get() : OrderDTO{
    const str = localStorage.getItem("com.kortega90.dscommerce/Cart") || '{"items " = []}';
    return JSON.parse(str);
}