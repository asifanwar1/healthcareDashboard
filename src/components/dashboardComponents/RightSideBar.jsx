import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { HeightScaleIcon, WeightScaleIcon } from '../../assets/icons';
import { FigureImage } from '../../assets/images'



const RightSideBar = () => {
  return (
    <>
        <Grid container direction="column" sx={{padding:'25px'}}>
            <Grid item md={12}>
                    <Box sx={{display:'flex', flexDirection:{xs:'column', md:'row'}, color:'#FFF'}}>
                        <Typography variant='h5'>BMI Calculator</Typography>
                        <Box sx={{display:'flex', marginLeft:{xs:'0', md:'auto'}, border: '1px solid #E1E1E1', borderRadius:'12px', padding:'14px 20px', width:'6rem'}}>
                            <Typography >Jan 2021</Typography>
                            <KeyboardArrowDownOutlinedIcon />
                        </Box>
                    </Box>
            </Grid>
            <br></br>
            <Grid item md={12} >
                <Box sx={{display:'flex', gap:'10px', flexDirection:{xs:'column', md:'row'},}}>
                    <Box sx={{display:'flex', flexDirection:'column', gap:'14px'}}>
                    <Box sx={{backgroundColor:'#F8DEBD', borderRadius:'12px', padding:'15px', width:'187px', height:'82px'}}>
                        <Box sx={{textAlign:'right'}}>
                            <HeightScaleIcon />
                        </Box>
                        <Box sx={{display:'flex'}}>
                            <Typography variant='body1'>Height</Typography>
                            <Typography variant='body1' sx={{marginLeft:'auto'}}>170 cm</Typography>
                        </Box>
                    </Box>

                    <Box sx={{backgroundColor:'#D0FBFF', borderRadius:'12px', padding:'15px', width:'187px', height:'82px'}}>
                        <Box sx={{textAlign:'right'}}>
                            <WeightScaleIcon />
                        </Box>
                        <Box sx={{display:'flex'}}>
                            <Typography variant='body1'>Weight</Typography>
                            <Typography variant='body1' sx={{marginLeft:'auto'}}>72 kg</Typography>
                        </Box>
                    </Box>
                    </Box>


                    <Box sx={{display:'flex', flexDirection:'column', backgroundColor:'#4A4949', borderRadius:'12px', padding:'15px', color:'#FFF',}}>
                        <Typography variant='body1'>Body Mass Index (BMI)</Typography>
                        <br></br>
                        <Box sx={{display:'flex',}}>
                            <Typography variant='h6'>24.9</Typography>
                            <Box sx={{backgroundColor:'#D0FBFF', borderRadius:'5px', padding:'6px 10px', marginLeft:'auto'}}>
                                <Typography variant='body2' sx={{color:'black'}}>You're Healthy</Typography>
                            </Box>    
                        </Box>
                        <br></br>
                        <Box >
                            <Box sx={{background:'linear-gradient(90deg, #B5D4F1 0%, #81E5DB 37.77%, #E8D284 70.4%, #E2798E 100%)', margin:'auto', width:'240px', height:'14px', borderRadius:'21px'}}></Box>
                            <Box sx={{display:'flex', gap:'25px', fontSize:'12px', width:'100%', justifyContent:'center'}}>
                                <Typography sx={{textAlign:'center'}}>15</Typography>
                                <Typography >18.5</Typography>
                                <Typography >25</Typography>
                                <Typography >30</Typography>
                                <Typography >40</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Grid>

            <br></br>

            <Grid item md={12}>
                <br></br>
                <Divider sx={{backgroundColor:'#4F4E4E'}}/>
                <br></br>
            </Grid>

            <br></br>

            <Grid item md={12}>
                <Box sx={{display:'flex', gap:'20px'}}>
                    <Box sx={{display:'flex', flexDirection:'column', gap:'20px'}}>
                        <Box sx={{color:'#FFF'}}>
                            <Typography variant='h6'>Body Measurements</Typography>
                            <br></br>
                            <Typography variant='body1'>Last Checked 2 Days Ago</Typography>
                            <br></br>
                            <Box sx={{backgroundColor:'#5E5E5E', borderRadius:'8px', padding:'10px', width:'12rem'}}>
                                <Typography variant='body2'>Inverted Triangle Body Shape</Typography>
                            </Box>
                        </Box>
                        <br></br>
                        <Box sx={{backgroundColor:'#FFF', borderRadius:'12px', padding:'24px 32px', textAlign:'center', width:'5rem'}}>
                            <Typography variant='body1'>Chest (in)</Typography>
                            <Box sx={{display:'flex'}}>
                                <Typography variant='h6'>44.5</Typography>
                                <ArrowUpwardIcon/>
                            </Box>
                        </Box>
                        <Box sx={{backgroundColor:'#FFF', borderRadius:'12px', padding:'24px 32px', textAlign:'center', width:'5rem'}}>
                            <Typography variant='body1'>Chest (in)</Typography>
                            <Box sx={{display:'flex'}}>
                                <Typography variant='h6'>44.5</Typography>
                                <ArrowUpwardIcon/>
                            </Box>
                        </Box>
                        <Box sx={{backgroundColor:'#FFF', borderRadius:'12px', padding:'24px 32px', textAlign:'center', width:'5rem'}}>
                            <Typography variant='body1'>Chest (in)</Typography>
                            <Box sx={{display:'flex'}}>
                                <Typography variant='h6'>44.5</Typography>
                                <ArrowUpwardIcon/>
                            </Box>
                        </Box>
                    </Box>
                    <Box>
                        <img src={FigureImage} alt='bodyFigure'/>
                    </Box>
                </Box>
            </Grid>
        </Grid>

    </>
  )
}

export default RightSideBar