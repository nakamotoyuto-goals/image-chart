import "./App.css";
// import faker from "faker"
// import ImageCharts from "image-charts";

function App() {
  // const labels = ["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"];
  // const data = {

  //   datasets: [
  //     {
  //       type: "line",
  //       label: "Dataset 1",
  //       borderColor: "#D0E2F2",
  //       borderWidth: 2,
  //       fill: false,
  //       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
  //     },
  //     {
  //       type: "line",
  //       label: "Dataset 1.1",
  //       borderColor: "#2E7ED8",
  //       borderWidth: 2,
  //       fill: false,
  //       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
  //     },
  //     {
  //       type: "line",
  //       label: "Dataset 1.2",
  //       borderColor: "#FC5E62",
  //       borderWidth: 2,
  //       fill: false,
  //       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
  //     },
  //     {
  //       type: "line",
  //       label: "Dataset 1.3",
  //       borderColor: "#E6CF57",
  //       borderWidth: 2,
  //       fill: false,
  //       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
  //     },
  //     {
  //       type: "line",
  //       label: "Dataset 1.4",
  //       borderColor: "#E49246",
  //       borderWidth: 2,
  //       fill: false,
  //       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
  //     },
  //     {
  //       type: "line",
  //       label: "Dataset 1.5",
  //       borderColor: "#3C752A",
  //       borderWidth: 2,
  //       fill: false,
  //       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
  //     },
  //     {
  //       type: "bar",
  //       label: "Dataset 2",
  //       backgroundColor: "rgb(75, 192, 192)",
  //       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
  //       borderColor: "white",
  //       borderWidth: 2,
  //     },
  //     {
  //       type: "bar",
  //       label: "Dataset 3",
  //       backgroundColor: "rgb(53, 162, 235)",
  //       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
  //     },
  //   ],
  // };
  // const line_chart = ImageCharts().chart({labels: labels,data: data})
  // line_chart.toURL();
  // const str = JSON.stringify(data.datasets)
  // const strlabel = JSON.stringify(labels)
  // const base64 = btoa(`type:"line", data: {labels:${strlabel}, dataset:${str}{}`)
  // const base = `https://image-charts.com/chart.js/2.8.0?encoding=base64&bkg=white&c=${base64}`
  // const url = `https://image-charts.com/chart.js/2.8.0?bkg=white&c={"data":{"labels":["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"], datasets: [{type: "line",label: "Dataset 1",borderColor: "rgb(53, 162, 235)",borderWidth: 2,fill: false,data: [10]}]}}`
  return (
    [...Array(30)].map((num) => {
      return <img src={'https://image-charts.com/chart.js/2.8.0?width=300&height=200&bkg=white&c={"type":"bar","data":{"labels":["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"],"datasets":[{"backgroundColor":"rgba(54,162,235,0.5)","borderColor":"rgb(54,162,235)","borderWidth":1,"data":[73,41,29,61,-65,59,38]}]},"options":{"legend":{"display":false}}}'} alt=""/>
    })
  );
}

export default App;
