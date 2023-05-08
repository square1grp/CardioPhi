import { createSlice } from '@reduxjs/toolkit'


const minHR = {
  value: ' 68 pbm',
  time: '07/10/2022 10:40 PM',
};

const maxHR = {
  value: ' 168 pbm',
  time: '07/10/2022 9:40 AM',
};

const episodeData = [
  [{
    x: [],
    y: [],
    type: 'scatter',
    line: {
      color: 'black',
    },
  }],
  [{
    x: [],
    y: [],
    type: 'scatter',
    line: {
      color: 'black',
    },
  }],
  [{
    x: [],
    y: [],
    type: 'scatter',
    line: {
      color: 'black',
    },
  }],
];

const episodeLayout = {
  xaxis: {
    showline: true,
    showgrid: false,
    showticklabels: false,
    zeroline: false,
  },
  yaxis: {
    fixedrange: true,
    showline: false,
    showgrid: false,
    showticklabels: false,
    zeroline: false,
  },

  margin: {
    b: 0,
    l: 10,
    r: 10,
    t: 0,
  },
  width: 500,
  hovermode: false,
};

const psvc = {
  beats: '254 beats',
  'hr range': '55-178 bpm',
  avg: '89 bpm',
};

const pvc = {
  beats: '254 beats',
  'hr range': '55-178 bpm',
  avg: '89 bpm',
};

const otherBeats = {
  beats: '254 beats',
  'hr range': '55-178 bpm',
  avg: '89 bpm',
};

const sinus = {
  examples: '5 examples',
  'longest duration': '1 d 20 h',
  'hr range': '55-178 bpm',
  avg: '89 bpm',
};

const afib = {
  burden: '45%',
  'longest duration': '1 d 20 h',
  'hr range': '55-178 bpm',
  avg: '89 bpm',
};
const afibEpisodesData = [
  [{
    x: [],
    y: [],
    type: 'scatter',
    line: {
      color: 'black',
    },
  }],
  [{
    x: [],
    y: [],
    type: 'scatter',
    line: {
      color: 'black',
    },
  }],
  [{
    x: [],
    y: [],
    type: 'scatter',
    line: {
      color: 'black',
    },
  }],
];

const svt = {
  episodes: '1 episode',
  'longest duration': '1 d 20 h',
  'hr range': '55-178 bpm',
  avg: '89 bpm',
};
const vt = {
  episodes: '5 episodes',
  'longest duration': '1 d 20 h',
  'hr range': '55-178 bpm',
  avg: '89 bpm',
};

const pauses = {
  episodes: '3 episodes',
  'longest duration': '1 d 20 h',
  'hr range': '55-178 bpm',
  avg: '89 bpm',
};
const avBlock = {
  type: '--%',
  'longest duration': '1 d 20 h',
  'hr range': '55-178 bpm',
  avg: '89 bpm',
};

/** 
 * initial state
 */
const initialState = {
  showHrNotification: false,

  afib: afib,
  minHR: minHR,
  maxHR: maxHR,
  psvc: psvc,
  pvc: pvc,
  otherBeats: otherBeats,
  sinus: sinus,
  svt: svt,
  vt: vt,
  pauses: pauses,
  avBlock: avBlock,
  episodeData: episodeData,
  afibEpisodesData: afibEpisodesData,
  episodeLayout: episodeLayout,

  episodeChartData: {
    minHR: {
      episodeData: minHR.value,
      chartTitle: 'Min HR',
      chartId: 'minhr',
      data: episodeData.value,
      layout: episodeLayout.value,
      checked: false,
      show: false,
      color: '#ffa29e',
    },
    maxHR: {
      episodeData: maxHR.value,
      chartTitle: 'Max HR',
      chartId: 'maxhr',
      data: episodeData.value,
      layout: episodeLayout.value,
      checked: false,
      show: false,
      color: '#9274d5',
    },
    PSVC: {
      episodeData: psvc.value,
      chartTitle: 'PSVC',
      chartId: 'psvc',
      data: episodeData.value,
      layout: episodeLayout.value,
      checked: false,
      show: false,
      color: '#fffb82',
    },
    PVC: {
      episodeData: pvc.value,
      chartTitle: 'PVC',
      chartId: 'pvc',
      data: episodeData.value,
      layout: episodeLayout.value,
      checked: false,
      show: false,
      color: '#C5E1A5',
    },
    OtherBeats: {
      episodeData: otherBeats.value,
      chartTitle: 'Other Beats',
      chartId: 'other_beats',
      data: episodeData.value,
      layout: episodeLayout.value,
      checked: false,
      show: false,
      color: '#FFAB40',
    },
    sinus: {
      episodeData: sinus.value,
      chartTitle: 'Sinus',
      chartId: 'sinus',
      data: episodeData.value,
      layout: episodeLayout.value,
      checked: false,
      show: false,
      color: '#82B1FF',
    },
    AFib: {
      episodeData: afib.value,
      chartTitle: 'AFib/Flutter',
      chartId: 'afib',
      data: afibEpisodesData.value,
      layout: episodeLayout.value,
      checked: false,
      show: false,
      color: '#FF8A65',
    },
    SVT: {
      episodeData: svt.value,
      chartTitle: 'SVT',
      chartId: 'svt',
      data: episodeData.value,
      layout: episodeLayout.value,
      checked: false,
      show: false,
      color: '#9FA8DA',
    },
    VT: {
      episodeData: vt.value,
      chartTitle: 'VT',
      chartId: 'vt',
      data: episodeData.value,
      layout: episodeLayout.value,
      checked: false,
      show: false,
      color: '#B39DDB',
    },
    pauses: {
      episodeData: pauses.value,
      chartTitle: 'Pauses',
      chartId: 'pauses',
      data: episodeData.value,
      layout: episodeLayout.value,
      checked: false,
      show: false,
      color: '#E1BEE7',
    },
    avBlock: {
      episodeData: avBlock.value,
      chartTitle: 'AV Block',
      chartId: 'av_block',
      data: episodeData.value,
      layout: episodeLayout.value,
      checked: false,
      show: false,
      color: '#FF80AB',
    },
  },

  selectedChartData: {
    episodeData: {},
    chartTitle: '',
    chartId: '',
    data: [{}],
    layout: {},
    checked: false,
    show: false,
    color: '',
  },
}

export const episodeDataSlice = createSlice({
  name: 'episodeData',
  initialState,
})

export default episodeDataSlice.reducer