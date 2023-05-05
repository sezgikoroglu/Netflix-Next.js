"use client"
import React from 'react'
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button } from '@mui/base';
import Link from 'next/link';
const ITEM_HEIGHT = 48;

const Sub = ({genres}) => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
    
  return (
    
        <div className=" flex gap-14 items-center  ">
            <div className=" text-3xl font-bold">Movies</div>
            <div>
      <Button className='bg-black border-solid border-2 pl-3 py-1 pr-12 font-medium  text-white border-white'
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        Genres
      </Button>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {genres.map((genre) => (
          <MenuItem key={genre.name} selected={genre === 'Pyxis'} onClick={handleClose}>
            <Link href={`/movies/${genre.id}`}>{genre.name}</Link>
          </MenuItem>
        ))}
      </Menu>
    </div>
        </div>
        
   
  )
}

export default Sub