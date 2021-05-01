// import React, { useEffect, useMemo, useRef, useState } from 'react';

// const TestPage = ({ setDataFromInput, particularSection }) => {
//   const [data, setData] = useState([]);
//   const [editorer, setEditorer] = useState();

//   const richInit = () => {
//     const EditorJS = require('@editorjs/editorjs');
//     const Header = require('@editorjs/header');
//     // const Delimiter = require("@editorjs/delimiter");
//     const List = require("@editorjs/list");
//     // const InlineCode = require("@editorjs/inline-code");
//     const Table = require("@editorjs/table");
//     const Quote = require("@editorjs/quote");
//     const Image = require("@editorjs/image");
//     // const Code = require("@editorjs/code");
//     // const Marker = require("@editorjs/marker");
//     // const Checklist = require("@editorjs/checklist");

//     const editor = new EditorJS({
//       holder: 'editorjs',
//       logLevel: 'ERROR',
//       tools: {
//         header: {
//           class: Header,
//           // inlineToolbar : true,
//           // levels: [1, 2, 3, 4, 5, 6],
//           // defaultLevel: 4
//         },
//         // embed: {
//         //   class: Embed,
//         //   config: {
//         //     services: {
//         //       youtube: true,
//         //       coub: true,
//         //     },
//         //   },
//         // },
//         list: {
//           class: List,
//           // inlineToolbar: [
//           //   'link',
//           //   'bold'
//           // ]
//         },
//         // inlineCode: InlineCode,
//         // code: Code,
//         table: Table,
//         quote: Quote,
//         image: Image,
//         // marker: Marker,
//         // checkList: Checklist,
//         // delimiter: Delimiter,
//       },
//       autofocus: true,
//       data: data,
//       onChange: () => {
//         editor.save().then((outputData) => {
//           console.log(particularSection);
//           // particularSection.inputs.push(outputData);
//           setDataFromInput(outputData);
//           console.log(particularSection);
//         })
//       },
//     });
//     setEditorer(editor);
//   };

//   const onSaveData = async () => {
//     let data = await editorer.saver.save();
//     setDataFromInput(data);

//     console.log('DATA - ', data);
//   };

//   useEffect(() => {
//     richInit();
//   }, []);

//   return (
//     <div>
//       TEST:
//       <button onClick={(e) => onSaveData(e)}>Save</button>
//       <div id={'editorjs'}></div>
//     </div>
//   );
// };

// export default TestPage;
