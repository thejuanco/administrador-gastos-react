import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  Transition
} from "@headlessui/react";
import { Fragment } from "react";
import { useForm } from "react-hook-form";
import { useAppContext } from "../context/AppContext"

const ModalSpend = ({ isOpen, setIsOpen }) => {
  const {createSpend, budget} = useAppContext()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    try {
      //Agregando al objeto el id del presupuesto
      const budget_Id = budget[0].id
      data = Object.assign({budget_Id}, data)
      //Guardar los datos
      createSpend(data)
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        onClose={() => setIsOpen(false)}
      >
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
        </TransitionChild>

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <DialogPanel className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
              <DialogTitle className="text-lg font-semibold text-gray-900 mb-2">
                Agregar Gasto
              </DialogTitle>
              <div className="mt-4">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col space-y-3"
                  id="formSpend"
                >
                  <label>Nombre del gasto</label>
                  <input
                    type="text"
                    id="description"
                    className="w-full p-2 rounded-lg border border-gray-200"
                    placeholder="Comida"
                    {...register("description")}
                  />
                  <label>Monto del gastos</label>
                  <input
                    type="number"
                    id="amount"
                    className="w-full p-2 rounded-lg border border-gray-200"
                    placeholder="Ej. 1000"
                    {...register("amount")}
                  />
                </form>
                <div className="flex justify-end gap-2 mt-6">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="px-5 py-2 border border-gray-300 text-gray-800 rounded-full hover:bg-gray-100"
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="px-5 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-800"
                    type="submit"
                    form="formSpend"
                  >
                    Guardar
                  </button>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ModalSpend;
