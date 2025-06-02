import { useAppContext } from "../context/AppContext"

const SpendingHistory = () => {
    const {spends} = useAppContext()
    console.log(spends)
    
  return (
    <>
      <div className="border border-gray-300 rounded-md h-96 mt-4 p-4">
        <h1 className="font-semibold text-xl">Presupuesto General</h1>
      </div>
    </>
  )
}

export default SpendingHistory