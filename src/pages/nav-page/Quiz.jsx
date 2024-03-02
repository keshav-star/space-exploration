import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import qn from '../../assets/Questions.json'
import { useState } from 'react';

const Quiz = () => {

  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const [quesNum,setQuesNum] = useState(1);
  const [questions,setQuestions] = useState('')
  const [helperText, setHelperText] = useState('Choose wisely');

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(' ');
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event,index)
    if(value === 3){

    }
  };
  
  return (
    <div className="min-h-[100vh] flex items-center justify-center">
      <img
        src="/bg/bg3.jpg"
        loading="lazy"
        className="fixed h-[100vh] -z-10 top-0 left-0 w-[100vw] object-cover object-top"
        alt=""
      />
      <form onSubmit={handleSubmit}>
          <FormControl sx={{ m: 3 }} error={error} variant="standard">
            <FormLabel id="demo-error-radios">{qn.questions[quesNum].question}</FormLabel>
            <RadioGroup
              aria-labelledby="demo-error-radios"
              name="quiz"
              value={value}
              onChange={handleRadioChange}
            >
              {qn.questions[quesNum].options.map((option,index)=>{
                return <FormControlLabel key={option} value={index+1} control={<Radio />} label={option} />
              })}
              
            </RadioGroup>
            <FormHelperText>{helperText}</FormHelperText>
            <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
              Check Answer
            </Button>
          </FormControl>
     
    </form>
    </div>
  );
};

export default Quiz;
