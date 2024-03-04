import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import qn from "../../assets/Questions.json";
import { useState } from "react";

const Quiz = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [quesNum, setQuesNum] = useState(1);
  const [questions, setQuestions] = useState("");
  const [helperText, setHelperText] = useState("Choose wisely");

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(" ");
    setError(false);
  };

  const handleNext = ()=>{
    setQuesNum((prev) => prev + 1)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (parseInt(value) === qn.questions[quesNum].correctOptionIndex) {
      setHelperText("You got it!");
      setError(false);
    } else if (value === "") {
      setHelperText("Please select an option.");
      setError(true);
    } else {
      setHelperText("Sorry, wrong answer!");
      setError(true);
    }
  };

  return (
    <div className="min-h-[100vh] flex flex-col items-center justify-center">
      <img
        src="/bg/bg3.jpg"
        loading="lazy"
        className="fixed h-[100vh] -z-10 top-0 left-0 w-[100vw] object-cover object-top"
        alt=""
      />
      <form onSubmit={handleSubmit}>
        <FormControl
          sx={{ m: 3, bgcolor: "#A28B6B", p: 3 }}
          error={error}
          variant="standard"
        >
          <FormLabel id="demo-error-radios" sx={{ fontSize: "1.4rem" }}>
            {qn.questions[quesNum].question}
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-error-radios"
            name="quiz"
            value={value}
            onChange={handleRadioChange}
          >
            {qn.questions[quesNum].options.map((option, index) => {
              return (
                <FormControlLabel
                  key={option}
                  value={index + 1}
                  control={<Radio />}
                  label={option}
                />
              );
            })}
          </RadioGroup>
          <FormHelperText>{helperText}</FormHelperText>
          <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
            Check Answer
          </Button>
        </FormControl>
      </form>
      <Button sx={{bgcolor:blur}} onClick={handleNext}>NExt</Button>
    </div>
  );
};

export default Quiz;
