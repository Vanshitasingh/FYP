import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
import  { useState, useEffect } from "react";

// @mui
import { useTheme } from '@mui/material/styles';
import {  Grid, Container, Typography , Button} from '@mui/material';
import Modal from "react-bootstrap/Modal";
// components
import Iconify from '../components/iconify';
// sections
import {
  AppTasks,
  AppNewsUpdate,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppWidgetSummary,
  AppCurrentSubject,
  AppConversionRates,
} from '../sections/@dashboard/app';

// ----------------------------------------------------------------------


const info = async()=>{
  const res = await fetch("http://localhost:5000/data");
  const body = await res.json();
  return body.message;
}



// const MyPage = () => {
  

//   return (
//     <div>
//       <div id="output"></div>
//       <button type="button" onClick={handleShow}>Show Real Time Log</button>
      
//     </div>
//   );
// }

// function ModalLog({ show, onHide }) {
//   return (
//     <>
//       <Modal show={show} onHide={onHide}/>
//       <div>
//       <iframe 
//                 src="http://localhost:5000/data">
//         </iframe>
//       </div>
//     </>
//   );
// }

function ModalLog({ show, onHide }) {
  const [logs, setLogs] = useState("");

  useEffect(() => {
    // asynchronous function to fetch logs
    const fetchLogs = async () => {
      try {
        const logResponse = await fetch(
          "http://localhost:5000/data"
        );
        const body = await logResponse.json();
        // console.log(body.title);
        setLogs(body.title);
      } catch {
        console.log("error");
      }
    };

    // setup interval to fetch logs
    const intervalTimer = setInterval(fetchLogs, 5000);

    // function to clean up effect when component unmounts
    return () => clearInterval(intervalTimer);
  }, []);
  return (
    
  
    <>
   
        <Modal  style={{display:"flex",justifyContent:"center",alignItems:"center" ,height:"250px" ,width:"250px" ,position:"absolute", zIndex:1200}} show={show} onHide={onHide}>
          <Modal.Header>
            <Modal.Title>Real Time Log</Modal.Title>
          </Modal.Header>
          <iframe title='Frame'
            src="http://localhost:5000/data"
            style={{background: "green",color:"yellow" ,border: "none", height:"100vh", width:"100vw" }}/>
          <Modal.Body> {logs} </Modal.Body>
          <Modal.Footer>
            <Button variant="contained" size="small" onClick={onHide}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
       
      </>
  );
}
  

export default function DashboardAppPage() {
  const theme = useTheme();
  // const [data, setdata] = useState( "loading..." );
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const [data, setdata] = useState( []);

// useEffect(()=>{
//   const item = ()=>{
//     fetch("/data").then((res) =>
//               res.json().then((data) => {
//                   // Setting a data from api
//                   setdata(data.message);
//                   console.log("Succes", data.message)
//               })
//           );
//   }
//   const interval = setInterval(item,2000);
//   return () => clearInterval(interval);

// },[])
 

// const onClickHandler=async()=>{
  
//   const text = await info();
//   // const interval = setInterval(text, 1000);
//   // clearInterval(interval);
//   setdata(...text)
//   console.log("Clicked")
// }
 
 

  return (
    <>
      <Helmet>
        <title> Dashboard | Minimal UI </title>
      </Helmet>

      <Container maxWidth="xl"  style={{position:'fixed'}}>
      <Button variant="contained" size="large" onClick={handleShow} sx={{ mb: 5 }}> 
              Scan System
      </Button> 
         
      
      {/* <Typography variant="h4" sx={{ mb: 5 }}>
      <iframe title="MyFrame" 
                style={{ border:"none" ,backgroundColor: "transparent", width: "100%", height: "100%"}} 
                src="http://localhost:5000/data" />


     
      </Typography> */}

      <Typography variant="h4" sx={{ mb: 5 }}> hi</Typography>
      <ModalLog  show={show} onHide={handleClose} />

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="CPU" total={714000} icon={'ant-design:android-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="GPU" total={1352831} color="info" icon={'ant-design:apple-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Memory Used" total={1723315} color="warning" icon={'ant-design:windows-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Disk" total={234} color="error" icon={'ant-design:bug-filled'} />
          </Grid>
         

          <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits
              title="Website Visits"
              subheader="(+43%) than last year"
              chartLabels={[
                '01/01/2003',
                '02/01/2003',
                '03/01/2003',
                '04/01/2003',
                '05/01/2003',
                '06/01/2003',
                '07/01/2003',
                '08/01/2003',
                '09/01/2003',
                '10/01/2003',
                '11/01/2003',
              ]}
              chartData={[
                {
                  name: 'Team A',
                  type: 'column',
                  fill: 'solid',
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
                {
                  name: 'Team B',
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
                {
                  name: 'Team C',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title="Current Visits"
              chartData={[
                { label: 'America', value: 4344 },
                { label: 'Asia', value: 5435 },
                { label: 'Europe', value: 1443 },
                { label: 'Africa', value: 4443 },
              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.info.main,
                theme.palette.warning.main,
                theme.palette.error.main,
              ]}
            />
          </Grid>


          <Grid item xs={12} md={6} lg={8}>
            <AppNewsUpdate
              title="News Update"
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: faker.name.jobTitle(),
                description: faker.name.jobTitle(),
                image: `/assets/images/covers/cover_${index + 1}.jpg`,
                postedAt: faker.date.recent(),
              }))}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppOrderTimeline
              title="Order Timeline"
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: [
                  '1983, orders, $4220',
                  '12 Invoices have been paid',
                  'Order #37745 from September',
                  'New order placed #XF-2356',
                  'New order placed #XF-2346',
                ][index],
                type: `order${index + 1}`,
                time: faker.date.past(),
              }))}
            />
          </Grid>

         
        </Grid>
      </Container>
    </>
  );
}