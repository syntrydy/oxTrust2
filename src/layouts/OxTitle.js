import React from "react";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";

const OxTitle = (props) => {
  return (
    <div style={{ marginLeft: "-20px" }}>
      {props.items.map((btn, key) => (
        <Button key={key}
        style={{ float: "left", marginRight: "5px" }}
        variant="contained"
        color="secondary"
        onClick={btn.handle}
        startIcon={<Icon>{btn.icon}</Icon>}
      >{btn.text}</Button>
      ))}
    </div>
  );
};
export default OxTitle;
