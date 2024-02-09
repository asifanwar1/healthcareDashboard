import React, {useState} from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import {StackedBarChart} from '../../components/dashboardComponents/ChartData'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useDarkMode } from '../../context/DarkModeContext';
import { BloodPressureChartIcon, BloodPressureIcon, BloodSugarChartIcon, BloodSugarIcon, HeartRateChartIcon, HeartRateIcon, } from '../../assets/icons';
import RightSideBar from '../../components/dashboardComponents/RightSideBar';



const Home = () => {

    const { darkMode } = useDarkMode();

    const [users, setUsers] = useState([
        {category: 'Blood Sugar', count: 80, status: 'normal', unit: 'mg / dL', icon: <BloodSugarIcon/>, chart: <BloodSugarChartIcon/>, colorCode:'#F8DEBD'},
        {category: 'Heart Rate', count: 98, status: 'normal', unit: 'bpm', icon: <HeartRateIcon/>, chart: <HeartRateChartIcon/>, colorCode:'#FBF0F3'},
        {category: 'Blood Pressure', count: 102, status: 'normal', unit: ' / 72 mmhg', icon: <BloodPressureIcon/>, chart: <BloodPressureChartIcon/>, colorCode:'#D0FBFF'},
    ])

    const [geoStats, setGeoStats] = useState([
        {country: 'Russia',  percentage: 94},
        {country: 'China',  percentage: 10},
        {country: 'Ukraine',  percentage: 5},
        {country: 'USA',  percentage: 15},
        {country: 'Mongolia',  percentage: 3},
        {country: 'Other',  percentage: 5},
    ])


  return (
    <>

        <Grid container direction={{md:'row', xs:'column'}} sx={{  gap: 3, ml:{xs:'21%', md:'8%'},  color: darkMode ? '#CACACA' : '#4F4F4F',}}>
           
           
            <Grid item md={6} xs={9}>


            <Grid container>
            <Grid item md={12}>
           <Box sx={{display:'flex', gap:'5px', marginTop:{xs:'10px', md:'5px'}, color: darkMode ? '#DFEBE9' : '#4F4F4F ',}}>
                <Box sx={{display:'flex', flexDirection:'column'}}>
                <Typography variant="h5" >
                    Health Overview
                </Typography>
                <Typography variant="body2" >
                    August 12, 2023
                </Typography>
                </Box>
                <Box sx={{display:{xs:'none', md:'flex'}, marginLeft:'auto', color: darkMode ? '#DFEBE9' : '#4F4F4F ',}}>
                  <Stack direction="row" spacing={1}>
                    <Button sx={{backgroundColor:'#FFF', borderRadius:'12px', padding:'10px 14px', color:'black'}}>
                      <SearchOutlinedIcon />
                    </Button>
                    <Button sx={{backgroundColor:'#FFF', borderRadius:'12px', padding:'10px 14px', color:'black'}}>
                      <NotificationsIcon />
                    </Button>
                  </Stack>
                </Box>
                </Box>
           </Grid>
           </Grid>

            <br></br>


            <Grid container sx={{gap:'45px'}}>
           
           {users.map((element, index) =>(
       
           <Grid item md={3.3} xs={8} key={index}> 
               <Box sx={{backgroundColor: '#FDFDFF', border: '1px solid #EFF3F9', borderRadius:'13px', padding:'15px', width:'100%',}}>
                   <Box sx={{display:'flex', gap:'10px'}}>
                       <Box>{element.icon}</Box>
                       <Typography variant='body1' sx={{alignSelf:'center'}}>{element.category}</Typography>
                   </Box>
                   <Box sx={{display:'flex', flexDirection:'column'}}>
                       <Typography sx={{fontSize:'32px'}}>
                           {element.count} <span style={{fontSize:'12px', color:'#818181'}}>{element.unit}</span>
                       </Typography>
                       <Box sx={{backgroundColor:element.colorCode, width:'60px', textAlign:'center', borderRadius:'4px'}}>
                           <Typography variant='body2'>{element.status}</Typography>
                       </Box>
                   </Box>
                   <Box sx={{textAlign:'center'}}>{element.chart}</Box>
               </Box>
           </Grid>

           ))}

       </Grid>
            <br></br>
       <Grid container>
            <Grid item md={12} xs={12}> 
                <Box sx={{backgroundColor: darkMode ? '#282C31' : '#FDFDFF', border: darkMode ? '1px solid #4D4D4D' : '1px solid #EFF3F9', borderRadius:'13px', padding:'15px',}}>
                    <Box  sx={{display:'flex', flexDirection:{xs:'column', md:'row'}}}>
                        <Typography variant='h5' >Activity Growth</Typography>
                        <Box sx={{display:'flex', marginLeft:{xs:'0', md:'auto'}, border: '1px solid #E1E1E1', borderRadius:'12px', padding:'14px 20px'}}>
                            <Typography >Jan 2021</Typography>
                            <KeyboardArrowDownOutlinedIcon />
                    </Box>
                    </Box>
                    <Box sx={{width:'100%'}}>
                        <StackedBarChart/>
                    </Box>
                </Box>
                <br></br>
                <Box sx={{display: 'flex', flexDirection:{xs:'column', md:'row'}, backgroundColor: darkMode ? '#282C31' : '#FDFDFF', border: darkMode ? '1px solid #4D4D4D' : '1px solid #EFF3F9', borderRadius:'13px', padding:'25px', textAlign:'center',}}>
                            <Typography variant='h6'>Upcoming Appointment</Typography>
                        <Box sx={{width:'8rem', backgroundColor:'#D0FBFF', borderRadius:'4px', textAlign:'center', alignSelf:'center', padding:'2px', margin:'auto'}}>
                            <Typography variant='body2'>August 14, 2021</Typography>
                        </Box>
                            <Typography variant='body2' sx={{marginLeft:{xs:'0', md:'auto'}}}>Consultation with Dr. James</Typography>
                </Box>
            </Grid>


            </Grid>

            </Grid>

                
                
                {/* Second Layer */}


            <Grid item md={4} xs={9} sx={{borderRadius:'30px', backgroundColor:'#303030', }}>
                <RightSideBar/>
            </Grid>
            
            




            


        </Grid>
        <br></br>

               
                

        
        <br></br>


    </>
  )
}

export default Home