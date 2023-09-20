import { useLoaderData } from "react-router-dom";
import ProductsCard from "./ProductsCard";

 

const Products = () => {
    const {products} = useLoaderData()

    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
            {
                products?.map(product => <ProductsCard
                    key={product.id}
                    product={product}
                ></ProductsCard>)
             }
        </div>
    );
};

export default Products;