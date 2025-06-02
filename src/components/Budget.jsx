import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useAppContext } from "../context/AppContext";

const Budget = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { createBudget, budget } = useAppContext();
  console.log(budget);

  const onSubmit = (data) => {
    createBudget(data);
  };

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
                    <div>
                        <p className="text-gray-500">Total de gastos: </p>
                    </div>
                    <button className="mt-2 text-center border border-gray-300 py-2 w-full rounded-md hover:bg-gray-200">Eliminar Presupuesto</button>
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
