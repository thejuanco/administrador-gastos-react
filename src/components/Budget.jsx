import {useState} from 'react'
import { useForm } from 'react-hook-form'
import { useAppContext } from '../context/AppContext'

const Budget = () => {
    const { 
        register,
        handleSubmit,
        watch,
        formState: {errors}
    } = useForm()

    const { createBudget }  = useAppContext()

    const onSubmit = (data) => {
        createBudget(data)
    } 

  return (
    <>
        <div className="p-4 border border-gray-300 rounded-lg">
            <h1 className="font-semibold text-xl">Presupuesto General</h1>

            <div className="mt-6">
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-3">
                <label className="font-semibold">Establece tu presupuesto</label>
                <input
                    id="budget_total"
                    name="budget_total"
                    type="number"
                    placeholder="Ej: 1000"
                    className="w-full p-2 rounded-lg border border-gray-200"
                    {...register("budget_total", { 
                        required: {
                            value: true,
                            message: "El presupuesto es obligatorio"
                        }, 
                        min: {
                            value: 0,
                            message: "El presupuesto no puede ser menor a 0"
                        }
                    })}
                />
                <label className="font-semibold">Descripción</label>
                <input
                    id="budget_description"
                    name="budget_description"
                    type="text"
                    placeholder="Quincena"
                    className="w-full p-2 rounded-lg border border-gray-200"
                    {...register("budget_description", { 
                        required: {
                            value: true,
                            message: "La descripción es obligatoria"
                        }
                    })}
                />
                {errors.presupuesto?.type === "required" && (
                    <p className="text-sm text-red-600 text-center">{errors.presupuesto.message}</p>
                )}
                {errors.description?.type === "required" && (
                    <p className="text-sm text-red-600 text-center">{errors.presupuesto.message}</p>
                )}
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