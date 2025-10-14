import SpinnerLoading from "./SpinnerLoading"

const DistributionExpen = () => {
  return (
    <>
        <div className="p-4 border border-gray-300 rounded-lg">
            <h1 className="font-semibold text-xl">Distribución de Gastos</h1>

            <div className="mt-6">
                <SpinnerLoading/>
            </div>
        </div>
    </>
  )
}

export default DistributionExpen