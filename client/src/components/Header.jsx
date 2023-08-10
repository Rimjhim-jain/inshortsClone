import {AppBar,Toolbar,styled} from '@mui/material';
import {Menu} from '@mui/icons-material';

const StyledHeader = styled(AppBar)`
    background-color: #fff;
    height:70px;
    
`
const MenuIcon = styled(Menu)`
    color:#000;
`

const Image = styled('img')({
    height: '55px',
    margin: 'auto',
    paddingRight:70
})

const Header = () => {

    const url= require('./logo_inshorts.png');

    return(
        <StyledHeader position="static">
            <Toolbar>
                <MenuIcon/>
                <Image src={url} alt='logo'/>
            </Toolbar>
        </StyledHeader>
    )
}

export default Header;