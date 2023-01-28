export interface IProductItem {
    id: number,
    name: string,
    detail: string
}

export interface IProductResponse {
    data: Array<IProductItem>,
    current_page: number,
    total: number,
    last_page: number
}

export interface IProductState {
    list: Array<IProductItem>,
    current_page: number,
    total: number,
    count_page: number
}

export interface IProductSearch {
    page: number|string|null
}

export enum ProductActionTypes {
    GET_PRODUCTS = "GET_PRODUCTS_ACTION"
}

export interface GetProductAction {
    type: ProductActionTypes.GET_PRODUCTS,
    payload: IProductState
}

export interface IAddProduct {
    name?: string,
    detail?: string;
}

export type ProductActions = | GetProductAction
