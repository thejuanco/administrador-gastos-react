import { useState } from "react";
import { useAppContext } from "../context/AppContext"

const SpendingHistory = () => {
    const [search, setSearch] = useState("")
    const {spends} = useAppContext()

    //Formatear fechas
    function formattedData(date) {
      const newDate = new Date(date);

      return newDate.toLocaleDateString("es-ES", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
    }

    //Devuelve los gastos filtrados
    const filteredSpends = spends.filter(spend => {
      return spend.description.toLowerCase().includes(search.toLowerCase())
    })

  return (
    <>
      <div className="border border-gray-300 rounded-md h-min mt-4 p-4">
        <h1 className="font-semibold text-xl">Historial de Gastos</h1>
        <form>
            <input
                type="text"
                placeholder="Buscar gastos..."
                className="w-full p-2 border border-gray-300 rounded-md my-2"
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
        </form>

        {filteredSpends.length > 0 ? (
          <div>
            {filteredSpends.map((spend, index) => (
              <div key={index} className="py-2 mx-2">
                <h2 className="font-semibold">{spend.description}</h2>
                <div className="flex justify-between">
                  <p className="text-gray-400 text-sm">
                    {formattedData(spend.createdAt)}
                  </p>
                  <p className="font-semibold text-gray-700 text-lg">
                    $ {spend.amount}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center font-semibold text-lg pt-8">
            No se encontraron gastos
          </p>
        )}
      </div>
    </>
  )
}

export default SpendingHistory