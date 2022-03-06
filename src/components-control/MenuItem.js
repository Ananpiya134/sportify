import styled from "styled-components";
import { Select, MenuItem } from "@mui/material";

const MenuList = styled(Select)``;

export default function MenuItemDrop(props) {
  //props.classes = { list: [], root: "" };
  console.log(props);
  return (
    <MenuList
      MenuProps={{ classes: { list: props.classes.list } }}
      className={props.classes.root}
      labelId="activity-select-label"
      id="activity-label"
      label="activity"
      value={props.aid}
      sx={{ height: "50px" }}
      onChange={props.hc}
      // className="activity-select"
      style={{ backgroundColor: "#323232", color: "	white" }}
    >
      <MenuItem
        value=""
        disabled
        style={{
          backgroundColor: "#323232",
          color: "	white",
        }}
      >
        Select
      </MenuItem>
      {props.al &&
        props.al.map((item) => {
          return (
            <MenuItem
              value={item.id}
              style={{ backgroundColor: "#323232", color: "	white" }}
            >
              {item.name}
            </MenuItem>
          );
        })}
    </MenuList>
  );
}
