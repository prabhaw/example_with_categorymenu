import Menu, { SubMenu, Item as MenuItem, Divider } from "rc-menu";

function handleClick(info) {
  console.log(`clicked ${info.key}`);
  console.log(info);
}

// const reactContainer = document.getElementById("__react-content");

function onOpenChange(value) {
  console.log("onOpenChange>>>>>>", value);
  value.forEach((element) => {
    console.log(element[0]);
  });
}

class CommonMenu extends React.Component {
  state = {
    overflowedIndicator: undefined,
  };
  toggleChildren = () => {
    this.setState({
      children: this.state.children === children1 ? children2 : children1,
    });
  };
  toggleOverflowedIndicator = () => {
    this.setState({
      overflowedIndicator:
        this.state.overflowedIndicator === undefined
          ? customizeIndicator
          : undefined,
    });
  };
  render() {
    const { triggerSubMenuAction } = this.props;
    const { overflowedIndicator } = this.state;
    return (
      <>
        <Menu
          onClick={handleClick}
          triggerSubMenuAction={triggerSubMenuAction}
          onOpenChange={onOpenChange}
          mode={this.props.mode}
          motion={this.props.openAnimation}
          // defaultOpenKeys={this.props.defaultOpenKeys}
          overflowedIndicator={overflowedIndicator}
          className='category-v-menu'
          style={{
            borderTop: "0",
            borderBottom: "0",
            boxShadow: "none",
            borderRadius: "0",
          }}
        >
          <SubMenu
            title={
              <span className='menu-wrapper'>
                Electronic and electronic accries
              </span>
            }
            key='electronic'
            popupOffset={[10, 15]}
          >
            <MenuItem key='4-1'>inner inner</MenuItem>

            <SubMenu
              key='computer'
              title={<span className='submenu-title-wrapper'>computer</span>}
            >
              <SubMenu
                title={
                  <span className='submenu-title-wrapper'>
                    gamming computer
                  </span>
                }
                key='gamming computer'
              >
                <MenuItem key='one computer'>one Computer</MenuItem>
                <MenuItem key='4-2-0-2'>inner inner2</MenuItem>
              </SubMenu>
              <MenuItem key='4-2-1'>inn</MenuItem>
              <SubMenu
                title={
                  <span className='submenu-title-wrapper'>sub menu 4</span>
                }
                key='4-2-2'
              >
                <MenuItem key='4-2-2-1'>inner inner</MenuItem>
                <MenuItem key='4-2-2-2'>inner inner2</MenuItem>
              </SubMenu>
              <SubMenu
                title={
                  <span className='submenu-title-wrapper'>sub menu 3</span>
                }
                key='4-2-3'
              >
                <MenuItem key='4-2-3-1'>inner inner</MenuItem>
                <MenuItem key='4-2-3-2'>inner inner2</MenuItem>
              </SubMenu>
            </SubMenu>
          </SubMenu>
          <MenuItem key='4-2-3-2'>inner inner2</MenuItem>
        </Menu>
        <style jsx>{`
          .menu-wrapper {
            /* Don't forget this one */
            
          }
        `}</style>
      </>
    );
  }
}

export default CommonMenu;
