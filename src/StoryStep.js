import firstImg from "./first.jpg";
import underTree from "./tree.jpg";
import twoMen from "./twoMen.jpg";
import manDancing from "./manDancing.png";
import boy from "./boy.jpg";
import goHome from "./goHome.jpg";
import questionMark from "./questionMark.jpg";
import twoMenAway from "./twoMenAway.jpg";
import end from "./end.jpg";
import success from "./success.jpeg";
import failure from "./failure.jpg";

const storySteps = [
  {
    label: "Waiting For Godot",
    imgPath: firstImg,
    content: "Welcome to the 'Waiting for Godot' game! Click next to start"
  },
  {
    label: "Under the tree...",
    imgPath: underTree,
    content:
      "Your name is Vladimir, you met with Estragon. Both of you are waiting for a man named Godot."
  },
  {
    label: "After a while..",
    imgPath: twoMen,
    content:
      "Two men are approaching. Their names are Pozzo and Lucky. Pozzo is going to the market to sell his slave Lucky."
  },
  {
    label: "Then...",
    imgPath: manDancing,
    content: "Suddenly, Lucky starts to dance. After that, they left."
  },
  {
    label: "A while later...",
    imgPath: boy,
    content:
      "A boy approaches. He says Godot sends him to you both that he is not coming tonight, but he will be here tomorrow for sure."
  },
  {
    label: "After discussing... ",
    imgPath: goHome,
    content: "You decide to go home and consider coming back tomorrow night with Estragon."
  },
  {
    label: "The next night... ",
    imgPath: questionMark,
    content: ""
  },
  {
    label: "The next night ... ",
    imgPath: underTree,
    content: "You depart back to the tree , waiting for Godot with Estragon... "
  },
  {
    label: "After a while... ",
    imgPath: twoMen,
    content:
      "Two men are approaching. It's Pozzo and Lucky again! Wait.. you notice Pozzo becomes blind and Lucky is being weird."
  },
  {
    label: "However ... ",
    imgPath: twoMenAway,
    content: "They forget that they met you yesterday! Then, they left..."
  },
  {
    label: "After a while... ",
    imgPath: boy,
    content:
      "The boy from yesterday approaches again! He says Godot is also not coming tonight. He also says he has never meet you before!!!"
  },
  {
    label: "End ",
    imgPath: end,
    content: "The End"
  },
  {
    label: "Yay! ",
    imgPath: success,
    content:
      "Congrats!! You decide to quit waiting, and actively do something! "
  },
  {
    label: "Aww... ",
    imgPath: failure,
    content:
      "Waiting for something to happen is not a good attitude. Go explore the world and achieve something!"
  }
];

export default storySteps;
