import { useAppContext } from "../context/AppContext"

const SpendingHistory = () => {
    const {spends} = useAppContext()
    // console.log(spends.length)

  return (
    <>
      <div className="border border-gray-300 rounded-md h-96 mt-4 p-4">
        <h1 className="font-semibold text-xl">Historial de Gastos</h1>
        <form>
            <input
                type="text"
                placeholder="Buscar gastos..."
                className="w-full p-2 border border-gray-300 rounded-md my-2"
            />
        </form>

        {spends.length > 0 ? (
            <div>
                {spends.map((spend, index) => (
                    <div key={index} className="py-2 mx-2">
                        <h2 className="font-semibold">{spend.description}</h2>
                        <div className="flex justify-between">
                            <p className="text-gray-400 text-sm">{spend.createdAt}</p>
                            <p className="font-semibold text-gray-700 text-lg">$ {spend.amount}</p>
                        </div>
                    </div>
                ))}
            </div>
        ) : (
            <p className="text-center font-semibold text-lg pt-8">Aun no hay gastos</p>
        )}
      </div>
    </>
  )
}

export default SpendingHistory