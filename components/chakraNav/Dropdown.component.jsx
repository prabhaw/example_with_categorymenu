import CommonMenu from "./Categorymenu.component";
import animate from "css-animation";
import { Box } from "@chakra-ui/core";
const dropdown = (props) => {
  const animation = {
    enter(node, done) {
      let height;
      return animate(node, "rc-menu-collapse", {
        start() {
          height = node.offsetHeight;
          node.style.height = 0;
        },
        active() {
          node.style.height = `${height}px`;
        },
        end() {
          node.style.height = "";
          done();
        },
      });
    },

    appear() {
      return this.enter.apply(this, arguments);
    },

    leave(node, done) {
      return animate(node, "rc-menu-collapse", {
        start() {
          node.style.height = `${node.offsetHeight}px`;
        },
        active() {
          node.style.height = 0;
        },
        end() {
          node.style.height = "";
          done();
        },
      });
    },
  };

  const verticalMenu = <CommonMenu mode='vertical' openAnimation='zoom' />;

  const inlineMenu = (
    <CommonMenu
      mode='inline'
      // defaultOpenKeys={["1"]}
      motion={animation}
    />
  );

  return (
    <div className='container-space'>
      <Box
        w={["40%", "40%", "40%", "30%", "25%"]}
        display={["none", "none", "block"]}
      >
        {verticalMenu}
      </Box>
      {/* <div style={{ margin: 20, width: 400 }}>{inlineMenu}</div> */}
    </div>
  );
};

export default dropdown;
