import { client } from "../../sanity/lib/client";

      export interface IProduct {
        _id: string;
        name: string | null;      // Name might be null
        size: string | null;      // Size might be null
        quantity: number | null;  // Quantity might be null
        price: number;
        imageUrl: string;
      }
      
      
    
      export const getAllProducts = async () => {
    try{
        const queryAllproducts = '*[_type == "products"]{_id, name, size, quantity, price, "imageUrl": image.asset->url}';
        const products = await client.fetch(queryAllproducts);
        return products;
    
    
    }
    catch (error)
    {
        console.log(error);
        
    }
}