import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BsFillPencilFill } from 'react-icons/bs';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import Plotly from 'plotly.js-dist-min';

import { Row, Col } from 'react-bootstrap';
import { fetchEcgSummary } from 'store/ecgSlice';

/**
 * Ecg Chart Component
 * @returns
 */
const EcgChart = (props) => {

  const dispatch = useDispatch();

  const plotRef = useRef(null);

  const intervalId = useRef();
  const liveGraph = useSelector((state) => state.ecg.liveGraph);
  const store = useSelector((state) => state.ecg);
  const [play, setPlay] = useState(false);

  const {ticktext, tickvals} = store;
  const [showDetections, setDetections] = useState(false);
  const liveDetections = useRef([]);

  const [data, setData] = useState([{
    x: [],
    y: [],
    type: 'scattergl',
    line: {
      color: 'black',
    },
  }]);

  const chartLayout = {
    xaxis: {
      showline: false,
      showgrid: false,
      showticklabels: true,
      tickmode: 'array',
      range: [0, 3600],
      tickvals,
      ticktext,
      minor: {
        dtick: 72,
        tick0: 0,
        showgrid: true,
      },

    },
    yaxis: {
      fixedrange: true,
      showline: true,
      showgrid: true,
      showticklabels: true,
      zeroline: false,
      gridcolor: '#555',
      title: {
        text: 'Millivolts<br>(mV)',
      },
    },
    margin: {
      b: 25,
      t: 0,
    },
    shapes: null,
    autosize: true,

    hovermode: false,
  };

  const detections = useRef({
    shapes: liveDetections.current,
  });
  const noDetections = useRef({
    shapes: [],
  });

  useEffect(() => {
    dispatch(fetchEcgSummary());
  }, [dispatch]);

  useEffect(() => {
    const config = {
      displaylogo: false,
      displaymodebar: true,
      modeBarButtonsToRemove: ['autoscale', 'pan', 'toimage'],
      responsive: true,
    };

    Plotly.newPlot(plotRef.current, data, chartLayout, config);

    return () => {
      Plotly.purge(plotRef.current);
    };
  }, [data]);

  useEffect(() => {
    if (play) {
      intervalId.current = setInterval(() => {
        const xaxisRange = plotRef.current.layout.xaxis.range;
        Plotly.relayout(plotRef.current,
          {
            'xaxis.range': [xaxisRange[0] + 45, xaxisRange[1] + 45],
          });
      }, 125);
    } else {
      clearInterval(intervalId.current);
    }
  }, [play]);

  useEffect(() => {
    if (showDetections) {
      Plotly.relayout(plotRef.current, detections.current);
    } else {
      Plotly.relayout(plotRef.current, noDetections.current);
    }
  }, [showDetections]);

  useEffect(() => {
    let x = [], y = [];
    liveGraph.raw_signal.forEach((value, index) => {
      x.push(index);
      y.push(value);
    });

    setData([{...data[0], x: x, y:y}]);

    liveGraph.detections.forEach((arr) => {
      liveDetections.current.push({
        type: 'rect',
        xref: 'x',
        yref: 'paper',
        x0: arr[0][0],
        y0: 0,
        x1: arr[0][1],
        y1: 1,
        fillcolor: '#55CEFF',
        opacity: arr[1] > 0.55 ? 0.8 : arr[1],
        line: {
          width: 0,
        },
      });
    });
  }, [liveGraph]);

  const handlePlay = () => setPlay (!play)

  return (
    <div className={'w-full py-1 px-4'}>
      <Row className='py-1'>
        <Col className='flex items-center'>
          Start: 07/08/2022 10:40 PM<BsFillPencilFill className={'text-sm mx-2'}/>
        </Col>
        <Col className='flex items-center'>
          End: 07/09/2022 12:40 PM<BsFillPencilFill className={'text-sm mx-2'}/>
        </Col>
        <Col className='flex items-center'>
          Total Monitoring Time: 20h 52min
        </Col>
        <Col className='flex items-center'>
          Total Time Analyzed: 20h 52min
        </Col>
      </Row>
      <div className='flex-1 mb-8 h-[22vh]'>
        <div className='flex justify-between bg-main px-3 py-1 text-white'>
          <div>ECG</div>
          <div>Min HR: { Math.round(liveGraph.hr.min) }</div>
          <div>
            Max HR: { Math.round(liveGraph.hr.max) }
          </div>
          <div className={'flex items-center'}>
            <input type='checkbox' checked={showDetections} onChange={() => setDetections(!showDetections)} className='mr-1'/>
            Interpretation
          </div>
          <div> Atrial Fibrilation/Flutter</div>

          <div className={'flex items-center cursor-pointer'} onClick={handlePlay}>
            {!play ?
                <BsFillPlayFill className={'text-2xl text-white hover:text-gray-300'}/>
                :
                <BsPauseFill className={'text-2xl text-white hover:text-gray-300'}/>
            }
            Live
          </div>
        </div>
        <div ref={plotRef} className={'w-full h-full outline outline-1 outline-[#D9D9D9]'} />
      </div>
    </div>
  );
};

export default EcgChart;
