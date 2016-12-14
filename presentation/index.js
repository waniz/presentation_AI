// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  main_ai: require("../assets/main_ai.jpg"),
  behavior_tree: require("../assets/behavior_tree.png"),
  behavior_tree_2: require("../assets/behavior_tree_2.png"),
  behavior_tree_3: require("../assets/behavior_tree_3.jpg"),
  fsm: require("../assets/FSM.png"),
  theta: require("../assets/theta.jpg"),
  agent: require("../assets/agent.png"),
  pp: require("../assets/pp.png"),
  point: require("../assets/point.png"),
  grid: require("../assets/grid.png"),
  pp_map: require("../assets/pp_map.png"),
};

preloader(images);

const theme = createTheme({
  primary: "black"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>

          <Slide transition={["slide"]} bgColor="black">
            <Image src={images.main_ai.replace("/", "")} margin="0px auto 40px" height="500px"/>
            <Heading size={2} fit caps lineHeight={1} textColor="#87571F">
              Искусственный интеллект в играх
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <Text textSize="1.5em" margin="0px auto 20px" bold textColor="#87571F">Уровень силы 1</Text>
            <Text textSize="0.8em" margin="0px auto 10px" bold textColor="#87571F">Дерево поведений <a href="https://www.youtube.com/watch?v=27XFykjd8Ns">Пример бота</a></Text>
            <Text textSize="0.8em" margin="0px auto 10px" bold textColor="#87571F">Пример дерева поведений:</Text>
            <Image src={images.behavior_tree_3.replace("/", "")} margin="0px auto 20px" height="500px"/>
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <Text textSize="1.5em" margin="0px auto 20px" bold textColor="#87571F">Уровень силы 2</Text>
            <Text textSize="0.8em" margin="0px auto 10px" bold textColor="#87571F">Конечные автоматы</Text>
            <Text textSize="0.8em" margin="0px auto 10px" bold textColor="#87571F">Мой пример участия в Russian AI Cup: <a href="http://russianaicup.ru/game/view/135911">AI Cup</a></Text>
            <Text textSize="0.8em" margin="0px auto 10px" bold textColor="#87571F">Схемка - описание:</Text>
            <Image src={images.fsm.replace("/", "")} margin="0px auto 20px" height="500px"/>
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <Text textSize="1.5em" margin="0px auto 20px" bold textColor="#87571F">Уровень силы 2+</Text>
            <Text textSize="0.8em" margin="0px auto 10px" bold textColor="#87571F">Поиск пути <a href="http://qiao.github.io/PathFinding.js/visual/">пример</a></Text>
            <Text textSize="0.8em" margin="0px auto 10px" bold textColor="#87571F">-DFS</Text>
            <Text textSize="0.8em" margin="0px auto 10px" bold textColor="#87571F">-BFS</Text>
            <Text textSize="0.8em" margin="0px auto 10px" bold textColor="#87571F">-Dijkstra</Text>
            <Text textSize="0.8em" margin="0px auto 10px" bold textColor="#87571F">-A*</Text>
            <Text textSize="0.8em" margin="0px auto 10px" bold textColor="#87571F">-Theta*</Text>
              <Image src={images.theta.replace("/", "")} margin="0px auto 20px" height="300px"/>
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <Text textSize="1.5em" margin="0px auto 20px" bold textColor="#87571F">Уровень силы 3</Text>
            <Text textSize="0.8em" margin="0px auto 10px" bold textColor="#87571F">Агенты</Text>
            <Image src={images.agent.replace("/", "")} margin="0px auto 20px" height="400px"/>
            <Text textSize="0.8em" margin="0px auto 10px" bold textColor="#87571F">Цели</Text>
            <Text textSize="0.8em" margin="0px auto 10px" bold textColor="#87571F">Действия</Text>
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <Text textSize="1.5em" margin="0px auto 10px" bold textColor="#87571F">Уровень силы 3+</Text>
            <Text textSize="0.8em" margin="0px auto 10px" bold textColor="#87571F">Восприятие агентов: потенциальные поля</Text>
              <Image src={images.pp.replace("/", "")} margin="0px auto 10px" height="400px"/>
            <Text textSize="0.8em" margin="0px auto 10px" bold textColor="#87571F">построение поля:</Text>
              <Image src={images.point.replace("/", "")} margin="0px auto 10px" height="150px"/>
              <Image src={images.grid.replace("/", "")} margin="0px auto 10px" height="150px"/>
              <Image src={images.pp_map.replace("/", "")} margin="0px auto 10px" height="150px"/>
          </Slide>

        </Deck>
      </Spectacle>
    );
  }
}
