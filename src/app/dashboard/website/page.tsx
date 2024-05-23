// import React from "react";

// const Website = () => {
//   return (
//     <div>
//       <h1>Website</h1>
//     </div>
//   );
// };

// export default Website;

// src/GrapesEditor.js

"use client";
import React, { useEffect } from "react";
import grapesjs from "grapesjs";
import "grapesjs/dist/css/grapes.min.css";

const GrapesEditor = () => {
  useEffect(() => {
    const editor = grapesjs.init({
      container: "#editor",
      height: "100vh",
      fromElement: true,
      storageManager: false,
      plugins: [],
      blockManager: {
        appendTo: "#blocks",
      },
    });
  }, []);

  return (
    <div>
      <div id="blocks"></div>
      <div id="editor"></div>
    </div>
  );
};

export default GrapesEditor;
