import { Typography,Button,Box,useMediaQuery, Grid } from "@mui/material";
import { useTheme } from "@mui/system";
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerShopButton,
  BannerTitle,
} from "./BannerStyle";
import {
    FormControl,
    InputAdornment,
    TextField,
    createStyles,
    makeStyles
  } from "@material-ui/core";
  import { useState ,useEffect } from "react";
  import IconButton from "@material-ui/core/IconButton";
  import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import '../App.css'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

const options = [
  'babyee',
  'januuu',
  'hariiii',
  'tarak',
  'ramarao',
  'venkat',
  'ram',
  'rishi',
  'mani',
  'sita',
  'babyee',
  'januuu',
  'hariiii',
  'tarak',
  'ramarao',
  'venkat',
  'ram',
  'rishi',
  'mani',
  'sita'
];

export default function InnerPageBanner() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = 
  useState();
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    console.log("////////////",event.target)
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    console.log("@@@@@@@@@@@@",index)
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));


  const useStyles = makeStyles(() => {
    return createStyles({
      search: {
        margin: "0"
      }
    });
  });

  
  return (
  <>
    <BannerContainer sx={{marginTop:'5px',borderTop:'1px solid rgba(0, 0, 0, 0.12)',borderBottom:'1px solid rgba(0, 0, 0, 0.12)'}} >
      <BannerContent>
      <Breadcrumbs>
        <Link underline="hover" color="inherit" href="/">
          MUI
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          Core
        </Link>
        <Link
          underline="hover"
          color="text.primary"
          href="/material-ui/react-breadcrumbs/"
        >
          Breadcrumbs
        </Link>
      </Breadcrumbs>
        
        <BannerTitle sx={{
  fontFamily:"Merriweather,Merriweather-fallback-TimesNewRoman,times,serif",marginTop:'3%',mb:'1%'
        }}>Discover everything you need to plan your big day
</BannerTitle>

        <Grid  component="nav"
        aria-label="Device settings"
        sx={{ bgcolor: 'background.paper',display:'flex'}}>
{matches ? (<>
<Button sx={{color:'#fff',
backgroundColor:'red',
transition:'all .15s',
backgroundPosition:'center',
display:'flex',
alignItems:'center',
justifyContent:'center',
padding:'.69rem 1rem',
fontWeight:'600',
width:'300px',
marginBottom:'0',
borderRadius:'.5rem',
border:'1px solid transparent'}}><SearchIcon/>Search vendors</Button>
</>) :(
  <>
        <TextField
  variant="outlined"
  placeholder='Search for'
  button
  id="lock-button"
  aria-haspopup="listbox"
  aria-controls="lock-menu"
  aria-label="when device is locked"
  value={options[selectedIndex]}
  aria-expanded={open ? 'true' : undefined}
  onClick={handleClickListItem}
  InputProps={{
    startAdornment: (
      <InputAdornment>
        <IconButton>
          <SearchIcon />
        </IconButton>
      </InputAdornment>
    )
  }}
/>
<Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'lock-button',
          role: 'listbox',
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
             <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={12}>
        <Grid item xs={4}>
        </Grid>
        <Grid item xs={4}>
            {option}
        </Grid>
        <Grid item xs={4}>
        </Grid>

      </Grid>
    </Box>

          </MenuItem>
        ))}
      </Menu>

<TextField
  variant="outlined"
  placeholder='in (E.g.Delhi)' 
/>
<Button variant="contained" color='error' sx={{textTransform:'none'}}>
      Find
    </Button>
    </>)}
</Grid>


      </BannerContent>
        {/* <div className='banner'></div> */}
      <BannerImage src="https://www.weddingwire.in/assets/img/directory/headings/bg_directory-hero-banquetes.jpg" className='banner' />
      {/* <div className='homeHeading_content'>

      </div> */}
    </BannerContainer>
    </>
  );
}