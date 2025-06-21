import React from 'react'
import { useAppContext } from '../context/AppContext'

const Spends = () => {
  const {spends, setSpends} = useAppContext()
  console.log(spends)

  const result = spends.reduce((accumulator, currentValue) =>{
    const totalSpends = currentValue.amount
    return accumulator + totalSpends
  }, 0)

  return (
    <>
        <div className="p-4 border border-gray-300 rounded-lg">
            <h1 className="font-semibold text-xl">Resumen de Gastos</h1>

            <div className="mt-6">
              <div className="flex justify-between">
                <p className="text-lg font-semibold">Total</p>
                <span className="text-xl font-bold">$ {result}</span>
              </div>
              <div className="h-px bg-gray-400 my-2"></div>
              {spends.map((item, index) => (
                <div key={index} className="mt-1 flex justify-end px-2">
                  <p>$ {item.amount}</p>
                </div>
              ))}
            </div>
        </div>
    </>
  )
}

export default Spends