import { useState } from 'react'
import { Button } from '@headlessui/react'
import Budget from '../components/Budget'
import Spends from '../components/Spends'
import DistributionExpen from '../components/DistributionExpen'
import SpendingHistory from '../components/SpendingHistory'
import ModalSpend from '../components/ModalSpend'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true)
    const closeModal = () => setIsOpen(false)

  return (
    <>
        <div className="flex justify-between py-6 px-10">
            <h1 className="font-semibold text-2xl">Administrador de Gastos</h1>
            <button
                className="bg-gray-900 text-gray-200 px-5 py-2 rounded-lg hover:bg-slate-800"
                onClick={openModal}
            >
                Agregar gasto
            </button>
             
            <ModalSpend visible={openModal} onClose={closeModal} isOpen={isOpen} setIsOpen={setIsOpen}/>
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