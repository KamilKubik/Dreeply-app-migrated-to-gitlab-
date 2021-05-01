// import React, { useRef, useCallback, useMemo, useState, useEffect } from 'react';
// import dynamic from 'next/dynamic';
// // const { Bar } = dynamic(() => import('react-chartjs-2'), { ssr: true });
// // import { Bubble } from 'react-chartjs-2';
// import {
//   BarChart,
//   Bar,
//   ResponsiveContainer,
//   Cell,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
// } from 'recharts';
// // import { Bar } from 'react-chartjs-2';
// import { saveAs } from 'file-saver';
// import MyDocument1 from './PDFChart';
// import {
//   pdf,
//   Image,
//   Page,
//   Text,
//   View,
//   Document,
//   StyleSheet,
//   BlobProvider,
//   PDFDownloadLink,
// } from '@react-pdf/renderer';
// import { useRechartToPng } from 'recharts-to-png';
// import FileSaver from 'file-saver';

// const MyDocument = ({ png }) => {
//   return useMemo(
//     () => (
//     <Document>
//     <Page size='A4'>
//       <View>
//         <Text>Section #1</Text>
//       </View>
//       <View>
//         <Image src={png} />
//       </View>
//     </Page>
//   </Document>
//     ), [png]
//   )
// };

// const saveSvgAsPng = require('save-svg-as-png');

// const ChartComponent = ({ ref }) => {
//   const chartRef = useRef();
//   const [year, setYear] = useState();

//   const data = [
//     {
//       name: '2016',
//       revenue: 1000,
//       costs: 500,
//       users: 100,
//     },
//     {
//       name: '2017',
//       revenue: 2000,
//       costs: 1000,
//       users: 200,
//     },
//     {
//       name: '2018',
//       revenue: 3000,
//       costs: 1500,
//       users: 300,
//     },
//     {
//       name: '2019',
//       revenue: 4000,
//       costs: 2000,
//       users: 400,
//     },
//     {
//       name: year,
//       revenue: 10000,
//       costs: 5000,
//       users: 1000,
//     },
//   ];

//   const [pngImage, setPngImage] = useState();
//   const [refImage, setRefImage] = useState();
//   // useCallback(async () => {
//   //   const [png, ref] = useRechartToPng({ canvas: refImage, allowTaint: true });
//   //   console.log(png);
//   //   setPngImage(png);
//   //   console.log(pngImage);
//   //   setRefImage(ref);
//   // })

//   // const [png, ref] = useRechartToPng({ canvas: refImage, allowTaint: true });
//   // setPngImage(png);
//   // console.log(pngImage);
//   // setRefImage(ref);
//   // const [png, ref] = useRechartToPng({ canvas: ref, allowTaint: true });

//   // const fn = useCallback(async () => {
//   //   // FileSaver.saveAs(pngImage, "myChart.png");
//   //   console.log(png);
//   // }, []);

//   const [open, setOpen] = useState(false);

//   // useEffect(() => {
//   //   setOpen(false);
//   //   setOpen(true);
//   //   return () => setOpen(false);
//   // });

//   return (
//     <>
//     {/* {png && <img src={png} />} */}
//       <BarChart ref={ref} data={data} height={150} width={500}>
//         <CartesianGrid strokeDasharray='3 3' />
//         <XAxis dataKey='name' fontSize='14' />
//         <YAxis fontSize='14' />
//         <Tooltip />
//         <Bar dataKey='revenue' fill='#6C63FF' />
//         <Bar dataKey='costs' fill='#6C63FF' />
//         <Bar dataKey='users' fill='#6C63FF' />
//       </BarChart>
//     {/* <button onClick={fn}>Save to png</button> */}
//     {/* {open && <PDFDownloadLink document={<MyDocument png={png} />} fileName='somename.pdf'>
//         {({ blob, url, loading, error }) =>
//           loading ? 'Loading document...' : 'Download now!'
//         }
//       </PDFDownloadLink>}
//       <input placeholder='place the year' onChange={(e) => setYear(e.target.value)} /> */}
//       <input placeholder='place the year' onChange={(e) => setYear(e.target.value)} />
//     </>
//   );
// };

// export default ChartComponent;

// // {png && <img src={png} />}
// /* <PDFDownloadLink document={<MyDocument />} fileName='somename.pdf'>
//         {({ blob, url, loading, error }) =>
//           loading ? 'Loading document...' : 'Download now!'
//         }
//       </PDFDownloadLink> */

// /* <button onClick={handleDownload}>Save to png</button> */
