import React from 'react'

const Budget = () => {
  return (
    <>
        <div className="p-4 border border-gray-300 rounded-lg">
            <h1 className="font-semibold text-xl">Presupuesto General</h1>

            <div className="mt-6">
                <form className="flex flex-col space-y-3">
                <label className="font-semibold">Establece tu presupuesto</label>
                <input
                    id="presupuesto"
                    name="presupuesto"
                    type="number"
                    placeholder="Ej: 1000"
                    className="w-full p-2 rounded-lg border border-gray-200"
                />
                <button className="bg-gray-900 text-gray-200 rounded-lg py-2 hover:bg-gray-800">
                    Establecer Presupuesto
                </button>
                </form>
            </div>
        </div>
    </>
  )
}

export default Budget