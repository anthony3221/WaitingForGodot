import firstImg from "./first.jpg";
import underTree from "./tree.jpg";
import twoMen from "./twoMen.jpg";
import manDancing from "./manDancing.png";
import boy from "./boy.jpg";
import goHome from "./goHome.jpg";
import questionMark from "./questionMark.jpg";
import twoMenAway from "./twoMenAway.jpg";
import end from "./end.jpg";

const storySteps = [
  {
    label: "Waiting For Godot",
    imgPath: firstImg
  },
  {
    label: "Under the tree...",
    imgPath: underTree,
    content:
      "Your name is Vladimir, you met with Estragon. Both of you are waiting for a man named Godot"
  },
  {
    label: "After a while..",
    imgPath: twoMen,
    content:
      "Two men are approaching. Their names are Pozzo and Lucky. Pozzo is going to the market to sell his slave Lucky"
  },
  {
    label: "then...",
    imgPath: manDancing,
    content: "Lucky starts to dance. After a while they left."
  },
  {
    label: "a while later...",
    imgPath: boy,
    content:
      "A boy approaches. He says Godot sends him to you both that he is not coming tonight, but he will be here tomorrow for sure"
  },
  {
    label: "after discussing... ",
    imgPath: goHome,
    content: "you decide to go home and come back tomorrow night with Estragon."
  },
  {
    label: "The next night... ",
    imgPath: questionMark,
    content: "Do you still want to go meet Godot?"
  },
  {
    label: "Leaving home ... ",
    imgPath: underTree,
    content: "you depart back to the tree, waiting for Godot with Estragon... "
  },
  {
    label: "after a while... ",
    imgPath: twoMen,
    content:
      "Two men are approaching. It's Pozzo and Lucky again! Wait.. you notice Pozzo becomes blind and Lucky is being weird. They forget that they met you yesterday! "
  },
  {
    label: "then... ",
    imgPath: twoMenAway,
    content: "they left..."
  },
  {
    label: "after a while... ",
    imgPath: boy,
    content:
      "A boy approaches. He says Godot is also not coming tonight. He says he has never meet you before..."
  },
  {
    label: "End ",
    imgPath: end,
    content: "The End"
  }
];

export default storySteps;
