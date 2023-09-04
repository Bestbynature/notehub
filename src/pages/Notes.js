import React, { useState, useEffect} from 'react';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/system';
import NoteCard from '../components/NoteCard';

const Notes = () => {

    const [notes, setNotes] = useState([]);

    const handleDelete = async(id) => {
        await fetch('http://localhost:8000/notes/' + id, {
            method: 'DELETE'
        })

        const newNotes = notes.filter(note => note.id !== id);
        setNotes(newNotes);
    }

    useEffect(() => {
        fetch('http://localhost:8000/notes')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setNotes(data);
            })
    }, [])

  return (
    <Container>
        <Grid container spacing={3}>
            {notes.map(note => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={note.id}>
                   <NoteCard note={note} handleDelete={handleDelete} />
                </Grid>
            ))}
        </Grid>
    </Container>
  )
}

export default Notes