import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
// import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton 
// { IconButtonProps } 
from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';


const NoteCard = ({note, handleDelete}) => {

    

  return (
    <Card elevation={5}>
        <CardHeader
            avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                R
            </Avatar>
            }
            action={
            <IconButton
            onClick={()=> handleDelete(note.id)}
            >
                <DeleteOutlineOutlinedIcon />
            </IconButton>
            }
            title={note.title}
            subheader={note.category}
        />
        <CardContent>
        <Typography variant="body2" color="text.secondary">
          {note.details}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default NoteCard