export interface Inventory {
    id?: number;
    product_id:number;
    quantity:number;
    movement_type:"IN"|"OUT";
    reason:string;
    created_by:string;
}