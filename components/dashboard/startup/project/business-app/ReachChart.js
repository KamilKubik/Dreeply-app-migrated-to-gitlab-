import React from 'react';
import dynamic from 'next/dynamic';
// import {Bar} from 'react-chartjs-2';
const Bar = dynamic(
    () => import('react-chartjs-2'),
    { ssr: false }
  )

const ReactChart = () => {

    return (
        <div>Reach Chart:
            <Bar height={200} width={500} />
        </div>
    )
}

export default ReactChart;