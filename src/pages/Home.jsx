import React from 'react'
import Budget from '../components/Budget'

const Home = () => {
    const click = () => {
        console.log("Diste click")
    }

  return (
    <>
        <div className="flex justify-between py-6 px-10 bg-gray-100">
            <h1 className="font-semibold text-2xl">Administrador de Gastos</h1>
            <button
                className="bg-gray-900 text-gray-200 px-4 py-2 rounded-full hover:bg-slate-800"
                onClick={click}
            >
                Agregar gasto
            </button>
        </div>
    </>
  )
}

export default Home