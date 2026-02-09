import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ onAdd, onCancel }) {
  const dialog = useRef();
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const titleVal = title.current.value;
    const descriptionVal = description.current.value;
    const dueDateVal = dueDate.current.value;

    if (!titleVal || !descriptionVal || !dueDateVal) {
      dialog.current.open();
      return;
    }
    onAdd({ title: titleVal, description: descriptionVal, dueDate: dueDateVal });
  }

  return (
    <>
      <Modal ref={dialog} buttonCaption="Close">
        <h2 className="font-bold text-xl text-stone-500 my-4">Invalid Input</h2>
        <p className="mb-4 text-stone-400">Please make sure you provide a valid value for every inputfield.</p>
      </Modal>
      <div className="flex flex-col pt-16 pl-12 w-full max-w-xl">
        <div className="flex gap-2 items-center justify-end">
          <button className="text-stone-800 hover:text-stone-900" onClick={onCancel}>
            Cancel
          </button>
          <button onClick={handleSave} className="bg-stone-800 text-stone-50 hover:bg-stone-950 rounded-md px-6 py-2">
            Save
          </button>
        </div>
        <div>
          <Input ref={title} textarea={false} label="title" />
          <Input ref={description} textarea={true} label="description" />
          <Input ref={dueDate} textarea={false} label="date" />
        </div>
      </div>
    </>
  );
}
