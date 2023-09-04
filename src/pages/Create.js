import React, { useState } from 'react';
import {
    Typography,
    Button,
    Container
} from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [details, setDetails] = useState('');
    const [titleError, setTitleError] = useState(false);
    const [detailsError, setDetailsError] = useState(false);
    const [category, setCategory] = useState('todos');

    const handleSubmit = (e) => {
        e.preventDefault();
        setTitleError(false);
        setDetailsError(false);

        if (title === '') setTitleError(true);

        if (details === '') setDetailsError(true);

        if (title && details) {
            fetch('http://localhost:8000/notes', {
                method: 'POST',
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({ title, details, category })
            }).then(() => navigate('/'))
        }
    };  

    return (
        <Container>
            <Typography
                variant="h6"
                component="h2"
                gutterBottom
                color="textSecondary"
            >
                Create a New Note
            </Typography>

            <form noValidate autoComplete="off"
                onSubmit={handleSubmit}
            >

                <TextField
                    onChange={(e) => setTitle(e.target.value)}
                    label="Note Title"
                    variant='outlined'
                    color='secondary'
                    fullWidth
                    required
                    className='field'
                    error={titleError}
                />
                <br />
                <TextField
                    onChange={(e) => setDetails(e.target.value)}
                    label="details"
                    variant='outlined'
                    color='secondary'
                    multiline
                    rows={4}
                    fullWidth
                    required
                    className='field'
                    error={detailsError}
                />
                <FormControl required
                    className='field'
                >
                    <FormLabel>Note Category</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        value={category}
                        name="radio-buttons-group"
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <FormControlLabel value="todos" control={<Radio />} label="Todos" />
                        <FormControlLabel value="money" control={<Radio />} label="Money" />
                        <FormControlLabel value="work" control={<Radio />} label="Work" />
                        <FormControlLabel value="reminders" control={<Radio />} label="Reminders" />
                    </RadioGroup>
                </FormControl>

                <Button
                    type="submit"
                    color="secondary"
                    variant="contained"
                    endIcon={<KeyboardArrowRightIcon />}
                >
                    Submit
                </Button>

            </form>
        </Container>
    );
};

export default Create;