import React from 'react'
import Budget from '../components/Budget'
import Spends from '../components/Spends'
import DistributionExpen from '../components/DistributionExpen'
import SpendingHistory from '../components/SpendingHistory'

const Home = () => {
    const click = () => {
        console.log("Diste click")
    }

  return (
    <>
        <div className="flex justify-between py-6 px-10">
            <h1 className="font-semibold text-2xl">Administrador de Gastos</h1>
            <button
                className="bg-gray-900 text-gray-200 px-4 py-2 rounded-full hover:bg-slate-800"
                onClick={click}
            >
                Agregar gasto
            </button>
        </div>
        <div className="flex flex-col">
            <div className="grid grid-cols-3 gap-3 mx-4">
                <Budget/>
                <DistributionExpen/>
                <Spends/>
            </div>
            <div className='mx-4'>
                <SpendingHistory/>
            </div>
        </div>
    </>
  )
}

export default Home