// Клиентский компонент: ClientProductWrapper.jsx
"use client";

import {Suspense, Usable} from "react";
import dynamic from "next/dynamic";
import {ProductInterface} from "@/type/type";

// Динамически импортируем серверный компонент с данными
const ProductBlock = dynamic(() => import("@/components/ProductBlock/ProductBlock"));

export default function ProductWrapper({product}: {product: Usable<ProductInterface[]>}) {
    return (
        <Suspense fallback={<div>Загрузка...</div>}>
            <ProductBlock product={product} />
        </Suspense>
    );
}
