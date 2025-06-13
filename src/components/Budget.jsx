import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useAppContext } from "../context/AppContext";
import DeleteBudgetModal from "./DeleteBudgetModal";

const Budget = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createBudget, budget, spends } = useAppContext();
  const [idBudget, setIdBudget] = useState(null)
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  const onSubmit = (data) => {
    console.log(data);
  };

  const spendsLength = spends.length

  return (
    <>
      <div className="p-4 border border-gray-300 rounded-lg">
        <h1 className="font-semibold text-xl">Presupuesto General</h1>

        {budget.length > 0 ? (
          <div>
            {budget.map((budget, index) => (
                <div key={index}>
                    <p className="text-sm text-gray-500">{budget.budget_description}</p>
                    <div className="grid grid-cols-2">
                        <div className="bg-blue-100 p-1 m-2 rounded-lg">
                            <h1 className="text-center font-semibold text-blue-600">Presupuesto</h1>
                            <h2 className="text-center text-xl font-bold text-blue-700">$ {budget.budget_total}</h2>
                        </div>
                        <div className="bg-green-100 p-1 m-2 rounded-lg">
                            <h1 className="text-center font-semibold text-green-600">Disponible</h1>
                            <h2 className="text-center text-xl font-bold text-green-700">$ {budget.budget_total}</h2>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-gray-500">Total de gastos: </p>
                        <p className="text-gray-900 font-semibold">{spendsLength}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-gray-500">Promedio por gasto: </p>
                        <p className="text-gray-900 font-semibold">{spendsLength}</p>
                    </div>
                    <button 
                      className="flex items-center justify-center mt-2 text-center border border-gray-300 py-2 w-full rounded-md hover:bg-gray-200"
                      onClick={openModal}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mx-1 size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                      </svg>
                      Eliminar Presupuesto
                    </button>
                    <DeleteBudgetModal visible={openModal} onClose={closeModal} isOpen={isOpen} setIsOpen={setIsOpen}/>
                </div>
            ))}
          </div>
        ) : (
          <div className="mt-6">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col space-y-3"
            >
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
                    message: "El presupuesto es obligatorio",
                  },
                  min: {
                    value: 0,
                    message: "El presupuesto no puede ser menor a 0",
                  },
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
                    message: "La descripción es obligatoria",
                  },
                })}
              />
              {errors.presupuesto?.type === "required" && (
                <p className="text-sm text-red-600 text-center">
                  {errors.presupuesto.message}
                </p>
              )}
              {errors.description?.type === "required" && (
                <p className="text-sm text-red-600 text-center">
                  {errors.presupuesto.message}
                </p>
              )}
              <button className="bg-gray-900 text-gray-200 rounded-lg py-2 hover:bg-gray-800">
                Establecer Presupuesto
              </button>
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default Budget;
