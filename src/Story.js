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
    marginLeft: "45%",
    marginRight: "45%",
    marginTop: "20px"
  },
  button: {
    marginLeft: "45%",
    marginTop: "20px",
    marginRight: "45%"
  },
  content: {
    marginLeft: "10%",
    marginRight: "10%",
    marginTop: "15px",
    fontSize: 22,
    fontFamily: "Quicksand"
  }
});

const charPoses = {
  exit: { opacity: 0, y: 20 },
  enter: {
    opacity: 1,
    y: 0,
    delay: ({ charIndex }) => charIndex * 30
  }
};

class Story extends React.Component {
  state = {
    currentStep: 0,
    showChoice: false,
    selectedYes: false,
    nextDisabled: false
  };

  _handleNext = () => {
    this.setState({
      currentStep: this.state.currentStep + 1
    });

    if (this.state.currentStep === 5) {
      this.setState({ showChoice: true, nextDisabled: true });
    } else if (this.state.currentStep === steps.length - 3) {
      this.setState({ currentStep: steps.length - 1, nextDisabled: true });
    } else {
      this.setState({ showChoice: false });
    }
  };

  _onRestart = () => {
    this.setState({
      currentStep: 0,
      showChoice: false,
      selectedYes: false,
      nextDisabled: false
    });
  };

  _onSelectYes = () => {
    this.setState({
      selectedYes: false,
      currentStep: this.state.currentStep + 1,
      showChoice: false,
      nextDisabled: false
    });
  };

  _onSelectNo = () => {
    this.setState({
      selectedYes: true,
      currentStep: steps.length - 2,
      showChoice: false,
      nextDisabled: true
    });
  };

  _renderChoiceBtn = () => {
    const { classes } = this.props;

    if (this.state.showChoice) {
      return (
        <div>
          <p style={{ marginLeft: "30%", width: 500, textAlign: "center", fontFamily: 'Quicksand' }}>
            Do you still want to go back waiting for Godot?
          </p>
          <div className={classes.button}>
            <Button
              variant="contained"
              color="primary"
              style={{ marginRight: "10px", marginBottom: "10px" }}
              onClick={this._onSelectYes}
            >
              Yes
            </Button>
            <Button
              variant="contained"
              color="secondary"
              style={{ marginRight: "10px", marginBottom: "10px" }}
              onClick={this._onSelectNo}
            >
              No
            </Button>
          </div>
        </div>
      );
    } else {
      return <div />;
    }
  };

  render() {
    const { classes, theme } = this.props;
    const { currentStep } = this.state;
    const maxSteps = steps.length;

    return (
      <div className={classes.root}>
        <Paper square elevation={0} className={classes.header}>
          <Typography style={{ fontSize: 26, fontFamily: "Quicksand" }}>
            {steps[currentStep].label}
          </Typography>
        </Paper>
        <img
          className={classes.img}
          src={steps[currentStep].imgPath}
          alt={steps[currentStep].label}
        />
        <Typography className={classes.content}>
          {steps[currentStep].content}
        </Typography>

        {this._renderChoiceBtn()}
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={currentStep}
          className={classes.mobileStepper}
          nextButton={
            <Button
              size="small"
              onClick={this._handleNext}
              disabled={currentStep === maxSteps - 1 || this.state.nextDisabled}
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
