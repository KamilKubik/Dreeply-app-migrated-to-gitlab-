import { saveAs } from 'file-saver';

import {
  Font,
  pdf,
  Page,
  Text,
  View,
  Image,
  Document,
  StyleSheet,
  PDFViewer,
  PDFDownloadLink,
} from '@react-pdf/renderer';

const MyDocument1 = ({ data }) => {
  Font.register({ src: '/fonts/poppins.ttf', family: 'Poppins' });
  Font.register({ src: '/fonts/comfortaa.ttf', family: 'Comfortaa' });

  return (
    <Document>
        dasddas
    </Document>
  );
};

export default MyDocument1;