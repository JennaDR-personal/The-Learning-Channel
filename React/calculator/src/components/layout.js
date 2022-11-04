import React from 'react'
import './layout.css';
import logo from '../assets/img/logo.png';
import Output from './output';



const Layout = (props) => 
{
    const handleClick = () => {};
    
    return (
        <div className='frame'>
            <div className='calculator'>
                <br></br>
                <Output />
                <img src={logo} height='50px' alt='react-logo'/>
                <div className="keys">
                    <input type='button' value={'C'} className='button clear' onClick={handleClick}></input>
                    <input type='button' value={'DEL'} className='button clear' onClick={handleClick}></input>
                    <input type='button' value={'%'} className='button operator' onClick={handleClick}></input>
                    <input type='button' value={'/'} className='button operator' onClick={handleClick}></input>

                    <input type='button' value={'7'} className='button' onClick={handleClick}></input>
                    <input type='button' value={'8'} className='button' onClick={handleClick}></input>
                    <input type='button' value={'9'} className='button' onClick={handleClick}></input>
                    <input type='button' value={'*'} className='button operator' onClick={handleClick}></input>

                    <input type='button' value={'4'} className='button' onClick={handleClick}></input>
                    <input type='button' value={'5'} className='button' onClick={handleClick}></input>
                    <input type='button' value={'6'} className='button' onClick={handleClick}></input>
                    <input type='button' value={'-'} className='button operator' onClick={handleClick}></input>
                    
                    <input type='button' value={'1'} className='button' onClick={handleClick}></input>
                    <input type='button' value={'2'} className='button' onClick={handleClick}></input>
                    <input type='button' value={'3'} className='button' onClick={handleClick}></input>
                    <input type='button' value={'+'} className='button operator' onClick={handleClick}></input>

                    <input type='button' value={'0'} className='button' onClick={handleClick}></input>
                    <input type='button' value={'.'} className='button' onClick={handleClick}></input>
                    <input type='button' value={'='} className='button equal-sign' onClick={handleClick}></input>

                </div>
            </div>

        </div>
    )
}

export default Layout;