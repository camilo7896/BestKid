import Productslist from "../data/data.json";


export default function Cardviewproduct() {
    /**
 * ? Option likes pending for integrate in the card
 */

    return (
        <>
        {/*Data.json mapping on card*/}
            {Productslist.products.map((itemProduct) => {
                return (
                    <div key={itemProduct.id}>
                        <div className="m-2 border-2 border-gray-300  rounded-lg w-72">
                          {/* price */}
                            <div className="flex justify-end m-5 text-green-600">
                            <strong>$ {itemProduct.price}</strong>
                            </div>
                            {/* image */}
                            <div className="flex justify-center mx-auto">
                                <img src={itemProduct.image} />
                            </div>
                            {/* Title the product */}
                            <div className="m-5 flex justify-center">
                                <p className="text-lg font-semibold text-green-600">{itemProduct.name}</p>
                            </div>
                            {/* Description the product */}
                            <div className="m-5 flex justify-center">
                                <p className="font-fontGeneral">{itemProduct.description}</p>
                            </div>
                            {/* button view produtc*/}
                            <div className="flex justify-center m-5">
                                <button className="text-white bg-orange-600 rounded-lg pl-6 pr-6 p-1  active:bg-green-600 ...">Ver producto</button>
                            </div>
                        </div>
                    </div>
                )
            })}



        </>
    )
}
