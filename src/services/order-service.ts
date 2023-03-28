import { AxiosRequestConfig } from "axios";
import { OrderDTO } from "../model/order";
import { requestBackend } from "../utils/request";

export function findByIdRequests(id: number){
    
    const config : AxiosRequestConfig ={
        url: `/orders/${id}`,
        withCredentials: true
    }
    return requestBackend(config);
}

export function placeOrder(cart: OrderDTO){
    const config: AxiosRequestConfig={
        url: "/orders",
        method: "POST",
        withCredentials: true,
        data: cart
    }
    return requestBackend(config);
}