import React, { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../components/ui/button/Loader';
import { useGetSingleShopQuery } from '../redux/features/shop/shopSlice';

const SingleStore = () => {
    const { id } = useParams();
    const { data, isLoading } = useGetSingleShopQuery(id as string);
    const priceArr  = useMemo(()=>data?.price.toString().split("."),[data]);
    const fPrice = priceArr?.[0];
    const sPrice = priceArr?.[1];
    return (
        <>
            <div className="min-w-screen md:h-[calc(100vh-100px)]  bg-gradient-to-b from-gray-900 via-gray-800 dark:via-gray-500  flex items-center p-10 lg:p-10 overflow-hidden relative">
                <div className="w-full h-full max-w-6xl rounded bg-white shadow-xl p-5 lg:p-10 mx-auto text-gray-800 relative md:text-left">
                    {isLoading && <div className=' flex'>
                        <Loader className="w-52 h-52 m-auto " /></div>}
                    {data && <div className="md:flex items-center h-full">
                        <div className="w-full md:w-1/3 px-1 h-full mb-10 md:mb-0">
                            <div className="relative h-full object-contain">
                                <img
                                    src={data?.image}
                                    className="m-auto relative z-10 h-full"
                                    alt=""
                                />
                                <div className="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0" />
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 px-10">
                            <div className="mb-10">
                                <h1 className="font-bold uppercase text-2xl mb-5">
                                    {data?.title}
                                </h1>
                                <p className="text-sm">
                                    {data?.description}
                                    <a
                                        href="#"
                                        className="opacity-50 text-gray-900 hover:opacity-100 inline-block text-xs leading-none border-b border-gray-900"
                                    >
                                        MORE <i className="mdi mdi-arrow-right" />
                                    </a>
                                </p>
                            </div>
                            <div>
                                <div className="inline-block align-bottom mr-5">
                                    <span className="text-2xl leading-none align-baseline">$</span>
                                    <span className="font-bold text-5xl leading-none align-baseline">
                                        {fPrice}
                                    </span>
                                    <span className="text-2xl leading-none align-baseline">{sPrice && "."+sPrice}</span>
                                </div>
                                <div className="inline-block align-bottom">
                                    <button className="bg-yellow-300 opacity-75 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold">
                                        <i className="mdi mdi-cart -ml-2 mr-2" /> BUY NOW
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>}
                </div>
            </div>
        </>
    )
}

export default SingleStore