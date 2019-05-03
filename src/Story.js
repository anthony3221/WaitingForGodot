import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import storySteps from "./StoryStep";
import success from "./success.jpeg";
import failure from "./failure.jpg";

const steps = storySteps;

const styles = theme => ({
  root: {
    width: "100%",
    flexGrow: 1
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 50,
    width: "100%",
    paddingLeft: theme.spacing.unit * 4,
    backgroundColor: theme.palette.background.default
  },
  img: {
    height: 300,
    maxWidth: 500,
    overflow: "hidden",
    display: "center",
    width: "100%",
    marginLeft: "35%",
    marginRight: "45%",
    marginTop: "20px"
  },
  mobileStepper: {
    marginTop: "80px"
  },
  restartBtn: {
    marginLeft: "50%",
    marginRight: "30%",
    marginTop: "20px"
  }
});

const winStep = {
  label: "Yay! ",
  imgPath: success,
  content: "Congrats!! You decide to quit waiting, and actively do something! "
};
const loseStep = {
  label: "Aww... ",
  imgPath: failure,
  content:
    "Waiting for something to happen is not a good attitude. Go explore the world and achieve something!"
};

class Story extends React.Component {
  state = {
    currentStep: 0
  };

  handleNext = () => {
    this.setState(prevState => ({
      currentStep: prevState.currentStep + 1
    }));
  };

  _onRestart = () => {
    this.setState({
      currentStep: 0
    });
  };

  render() {
    const { classes, theme } = this.props;
    const { currentStep } = this.state;
    const maxSteps = steps.length;

    return (
      <div className={classes.root}>
        <Paper square elevation={0} className={classes.header}>
          <Typography>{steps[currentStep].label}</Typography>
        </Paper>
        <img
          className={classes.img}
          src={steps[currentStep].imgPath}
          alt={steps[currentStep].label}
        />
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={currentStep}
          className={classes.mobileStepper}
          nextButton={
            <Button
              size="small"
              onClick={this.handleNext}
              disabled={currentStep === maxSteps - 1}
            >
              Next
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.restartBtn}
          onClick={this._onRestart}
        >
          Restart
        </Button>
      </div>
    );
  }
}

Story.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Story);
