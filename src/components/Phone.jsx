import React, { useState } from "react";

const CopyToClipboard = () => {
  const [textToCopy] = useState("This is the text to be copied!");

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy).then(() => {
      alert("Text copied to clipboard!");
    }).catch(err => {
      console.error("Failed to copy: ", err);
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <p className="text-lg font-semibold mb-4">{textToCopy}</p>
      <button
        onClick={handleCopy}
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition"
      >
        Copy to Clipboard
      </button>
    </div>
  );
};

export default CopyToClipboard;
