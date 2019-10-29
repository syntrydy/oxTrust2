import React from "react";
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';

const OxTitle = () => {
  return (
    <div style={{marginLeft:"-20px"}}>  
      <Button style={{float:"left", marginRight:'5px'}}
        variant="contained" color="secondary" startIcon={<Icon>add</Icon>}>
        Group
      </Button>
      <Button style={{float:"left", marginRight:'5px'}}
        variant="contained" color="secondary" startIcon={<Icon>add</Icon>}>
        User
      </Button>
      <Button style={{float:"left",marginRight:'5px'}}
        variant="contained" color="secondary" startIcon={<Icon>list</Icon>}>
        Users
      </Button>
    </div>
  );
};

export default OxTitle;
