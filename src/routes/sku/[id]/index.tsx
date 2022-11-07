import { component$, Resource, useStore } from '@builder.io/qwik';
import { RequestHandler, useLocation } from '@builder.io/qwik-city';
import { useEndpoint } from "../../../qwik-city/runtime/src/library/_use-endpoint"

export interface ProductDetails {
    title: string;
    description: string;
    price: string;
    timeStamp: string;
}

export const onGet: RequestHandler<ProductDetails> = async (event) => {
    //pretend database fetch

    const url = new URL(event.request.url);
    const paramsObj: { [key: string]: string } = {}
    url.searchParams.forEach((value, key) => {
        paramsObj[key] = value;
    })
    return {
        title: "Serenity",
        description: "A moment of solace in today's crazy world",
        price: "Priceless",
        timeStamp: (new Date()).toLocaleTimeString()
    }
}


export default component$(() => {
    const productEndpoint = useEndpoint<typeof onGet>();
    const location = useLocation();

    return <div>
        <h1>SKU</h1>
        <p>Pathname: {location.pathname}</p>
        <p>Sku Id: {location.params.id}</p>

        <hr />
        <Resource value={productEndpoint.resource} onResolved={(data) => <ProductDisplay data={data} />} />
        <button onClick$={() => {
            productEndpoint.refresh();
        }}>
            Refetch
        </button>
    </div>
});


export const ProductDisplay = component$(({ data }: { data: ProductDetails }) => {
    const productData = useStore(data);
    console.log(productData.timeStamp)
    return <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
            <h1>{productData.title}</h1>
            <h3>{productData.description}</h3>
            <p>Last updated at {productData.timeStamp}</p>

        </div>

        <p>{productData.price}</p>
    </div>
})
