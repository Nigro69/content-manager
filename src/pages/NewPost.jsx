import React from "react";
import JoditEditor from "jodit-react";
import { useState, useRef } from "react";
import { Button, Modal } from "flowbite-react";

export default function NewPost() {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [modal, setmodal] = useState(false);
  const config = {
    placeholder: "Srart Writing Article...",
  };

  const reset = () => {
    setContent("");
  };
  const onclick = () => {
    setmodal(true);
  };

  return (
    <div className="w-full h-full p-4 bg-gray-200 ">
      <JoditEditor
        id="ediitor"
        ref={editor}
        value={content}
        tabIndex={1} // tabIndex of textarea
        config={config}
        onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
        onChange={(newContent) => {}}
      />

      {modal && (
        <Modal
          size="5xl"
          show={modal}
          onClose={() => {
            setmodal(false);
          }}
        >
          <Modal.Header>Preview</Modal.Header>
          <Modal.Body>
            <div className="space-y-6 max-h-96 overflow-y-scroll">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                <div dangerouslySetInnerHTML={{ __html: content }} />
              </p>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={onclick}>Post Article</Button>
            <Button color="gray" onClick={()=>setmodal(false)}>
              continue editing
            </Button>
          </Modal.Footer>
        </Modal>
      )}

      <div className=" my-4 gap-5">
      <button
            onClick={onclick}
            className="bg-white my-4 mx-4 hover:bg-blue-500 text-blue-500 hover:text-white font-semibold py-1 px-2 rounded-full"
          >
            Preview and Next
          </button>
        <button
          onClick={reset}
          className="bg-blue-500 my-4 mx-4 hover:bg-blue-300 text-white font-semibold py-1 px-2 rounded-full"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
