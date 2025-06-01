import React from 'react'

const Spends = () => {
  return (
    <>
        <div className="p-4 border border-gray-300 rounded-lg">
            <h1 className="font-semibold text-xl">Resumen de Gastos</h1>

            <div className="mt-6">
              <div className="flex justify-between">
                <p className="text-lg font-semibold">Total</p>
                <span className="text-xl font-bold">$2985.00</span>
              </div>
              <div class="h-px bg-gray-400 my-2"></div>
            </div>
        </div>
    </>
  )
}

export default Spends