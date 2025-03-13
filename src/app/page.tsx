
import {Suspense} from "react";
import ProductWrapper from "@/wrapper/ProductWrapper";
async function getProducts() {
    return await fetch('https://api.moscow.mba/products', {
    method: 'GET',
  }).then(res => res.json())
}
export default async function Page() {
    const products = getProducts();
    return (
        <Suspense fallback="Загрузка">
            <ProductWrapper product={products} />
        </Suspense>
    );
}
