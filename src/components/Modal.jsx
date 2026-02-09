import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
      {children}
      <form method="dialog" className="mt-8 text-right">
        <button className="bg-stone-700 text-stone-400 px-4 py-2 rounded-md text-nowrap text-xs md:text-base hover:bg-stone-600 hover:text-stone-100">
          {buttonCaption}
        </button>
      </form>
    </dialog>,
    document.getElementById("modal-root"),
  );
});

export default Modal;
