import React from 'react';

export const Coin = ({ name, image, symbol, price, volumen, priceChange, marketCap }) => {
    return (
        <li className="flex flex-col w-80 h-96 mx-4 text-gray-600 bg-white my-4 rounded-3xl shadow-lg items-center justify-center">
                <img className="w-32 rounded-full mb-4" src={image} alt="crypto" />
                <h1 className="text-3xl font-bold text-gray-800" >{name} <span className="text-sm text-grey-700">({symbol})</span></h1>
                <p className="text-lg font-bold text-gray-800">Price: $ <span className="text-sm font-normal">{price}</span></p>
                <p className="text-lg font-bold text-center text-gray-800">Volumen: <span className="text-sm font-normal">{volumen.toLocaleString()}</span></p>
                {
                    priceChange < 0
                        ? (<p className="bg-red-900 text-white rounded-xl px-3 ">Price Change: <span className="text-sm font-normal">{priceChange.toFixed(2)}%</span></p>)
                        : (<p className="bg-green-900 text-white rounded-xl px-3">Price Change: <span className="text-sm font-normal">{priceChange.toFixed(2)}%</span></p>)
                }
                <p className="text-gray-800 font-bold text-lg">Mkt Cap: $ <span className="text-sm font-normal">{marketCap.toLocaleString()}</span></p>
        </li>

    )
}
