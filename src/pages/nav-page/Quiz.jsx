import { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import qn from "../../assets/Questions.json";
import Stack from "@mui/material/Stack";

const Quiz = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [quesNum, setQuesNum] = useState(0);
  const [questions, setQuestions] = useState("");
  const [helperText, setHelperText] = useState("Choose wisely");

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(" ");
    setError(false);
  };

  const handleNext = () => {
    if (quesNum === 4) return;
    setQuesNum((prev) => prev + 1);
    setHelperText(" ");
    setError(false);
  };

  const handlePrev = () => {
    if (quesNum === 0) return;
    setQuesNum((prev) => prev - 1);
    setHelperText(" ");
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (parseInt(value) === qn.questions[quesNum].correctOptionIndex) {
      setHelperText("You got it! 🎉");
      setError(false);
    } else if (value === "") {
      setHelperText("Please select an option.");
      setError(true);
    } else {
      setHelperText("Sorry, wrong answer! ❌");
      setError(true);
    }
  };

  return (
    <div className="min-h-[90vh] flex flex-col items-center justify-center ">
      <img
        src="/images/quiz-bg.jpg"
        loading="lazy"
        className="fixed h-[100vh] -z-10 top-0 left-0 w-[100vw] object-cover object-top"
        alt=""
      />
      <form onSubmit={handleSubmit}>
        <FormControl
          sx={{
            m: 3,
            bgcolor: "rgba(162, 139, 107, 0.6)",
            p: 3,
            borderRadius: "5px",
            minHeight: "50vh",
            minWidth: "40vw",
          }}
          error={error}
          variant="standard"
        >
          <Stack direction="row" spacing={2} sx={{ marginBottom: 4 }}>
            <FormLabel
              id="demo-radio-buttons-group-label"
              sx={{ fontSize: "1.4rem", color: "white !important" }}
            >
              {quesNum + 1}
            </FormLabel>
            <FormLabel
              id="demo-radio-buttons-group-label"
              sx={{ fontSize: "1.4rem", color: "white !important" }}
            >
              {qn.questions[quesNum].question}
            </FormLabel>
          </Stack>
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
                  value={index}
                  control={<Radio />}
                  label={option}
                />
              );
            })}
          </RadioGroup>
          <FormHelperText sx={{ fontSize: 15, color: "orange" }}>
            {helperText}
          </FormHelperText>
          <Button
            sx={{
              mt: 1,
              mr: 1,
              bgcolor: "#A28B6B",
              "&:hover": {
                bgcolor: "rgba(162, 139, 107, 0.6)",
              },
            }}
            type="submit"
            variant="contained"
          >
            Check Answer
          </Button>
        </FormControl>
        <Stack direction="row" spacing={2} sx={{ width: "100%",justifyContent:"space-around" }}>
          <Button
            variant="contained"
            sx={{
              cursor: quesNum === 0 ? 'not-allowed' : 'pointer',
              bgcolor: "#908263",
              "&:hover": {
                bgcolor: "rgba(162, 139, 107, 0.6)",
              },
            }}
            onClick={handlePrev}
          >
            Prev
          </Button>
          <Button
            variant="contained"
            sx={{
              cursor: quesNum === 4 ? 'not-allowed' : 'pointer',
              bgcolor: "#908263",
              "&:hover": {
                bgcolor: "rgba(162, 139, 107, 0.6)",
              },
            }}
            onClick={handleNext}
          >
            Next
          </Button>
        </Stack>
      </form>
    </div>
  );
};

export default Quiz;
