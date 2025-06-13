import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
  Description,
} from "@headlessui/react";
import { Fragment } from "react";

const DeleteBudgetModal = ({ isOpen, setIsOpen }) => {
  return (
    <>
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
              <DialogPanel className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl space-y-4">
                <DialogTitle className="font-bold mb-2 text-lg">
                  Eliminar presupuesto
                </DialogTitle>
                <Description>
                  Estas a punto de eliminar este presupuesto permanentemente,
                  ¿Deseas continuar?
                </Description>
                <div className="flex justify-end gap-2 mt-6">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="px-5 py-2 border border-gray-300 text-gray-800 rounded-full hover:bg-gray-100"
                  >
                    Cerrar
                  </button>
                  <button
                    className="px-5 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-800"
                    onClick={() => setIsOpen(false)}
                  >
                    Eliminar
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default DeleteBudgetModal;
