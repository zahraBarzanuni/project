import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
  import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import clsx from 'clsx';
import CloseIcon from '@material-ui/icons/Close';

  import PropTypes from 'prop-types';
  import CheckCircleIcon from '@material-ui/icons/CheckCircle';
  import ErrorIcon from '@material-ui/icons/Error';
  import InfoIcon from '@material-ui/icons/Info';
  import { amber, green } from '@material-ui/core/colors';

  import WarningIcon from '@material-ui/icons/Warning';
const variantIcon = {
    success: CheckCircleIcon,
    warning: WarningIcon,
    error: ErrorIcon,
    info: InfoIcon,
  };
  
  const useStyles1 = makeStyles(theme => ({
    success: {
      backgroundColor: green[600],
    },
    error: {
      backgroundColor: theme.palette.error.dark,
    },
    info: {
      backgroundColor: theme.palette.primary.dark,
    },
    warning: {
      backgroundColor: amber[700],
    },
    icon: {
      fontSize: 20,
    },
    iconVariant: {
      opacity: 0.9,
      marginRight: theme.spacing(1),
    },
    message: {
      display: 'flex',
      alignItems: 'center',
    },
  }));
  
  function MySnackbarContentWrapper(props) {
    const classes = useStyles1();
    const { className, message, onClose, variant, ...other } = props;
    const Icon = variantIcon[variant];
  
    return (
      <SnackbarContent
        className={clsx(classes[variant], className)}
        aria-describedby="client-snackbar"
        message={
          <span id="client-snackbar" className={classes.message}>
            <Icon className={clsx(classes.icon, classes.iconVariant)} />
            {message}
          </span>
        }
        action={[
          <IconButton key="close" aria-label="Close" color="inherit" onClick={onClose}>
            <CloseIcon className={classes.icon} />
          </IconButton>,
        ]}
        {...other}
      />
    );
  }
  
  MySnackbarContentWrapper.propTypes = {
    className: PropTypes.string,
    message: PropTypes.node,
    onClose: PropTypes.func,
    variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired,
  };
  
  const useStyles2 = makeStyles(theme => ({
    margin: {
      margin: theme.spacing(1),
    },
  }));
  
  function CustomizedSnackbars() {
    const classes = useStyles2();
    const [open, setOpen] = React.useState(false);
  
    function handleClick() {
      setOpen(true);
    }
  
    function handleClose(event, reason) {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    }
  
    return (
      <div>
     
        <Fab color="primary" aria-label="Add" className={classes.fab} onClick={handleClick}>
          <AddIcon />
        </Fab>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'canter',
          }}
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <MySnackbarContentWrapper
            onClose={handleClose}
            variant="success"
           message="aa"
          />
    
        </Snackbar>
   
      </div>
    );
  }


//   ***************************************
// ***************************************************
// ******************************************************

import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';


export default class App extends Component {

  valuefield(e) {
    console.log(e.target.value) 
      }
  
 render(){
  return (
    
    <div className="App">
 
    <EnterTOdo />
   
    </div>
  );
}
}
// *************************************************************************
class EnterTOdo extends Component{
  constructor(props){
    super(props);
    this.state={
      text:'',
    }
    this.handleChange = this.handleChange.bind(this);
    this.Clickadd = this.Clickadd.bind(this);
  }
  handleChange(event){
    this.setState({text:event.target.value});
    console.log(this.state.text);
    
   };
     Clickadd(){
 alert("this value textfield :"+ this.state.text);
 this.Click1add();

 }
 Click1add(){

const tagp= <p>hihi</p> ;
alert(tagp)
 } 
  render(){ 
    return(       
<form  className="container"  noValidate autoComplete="off">
    <TextField className="textField" onChange={this.handleChange} 
        id="outlined-dense"
        label="Dense"
        margin="dense"
        variant="outlined"
      />
      <Button onClick={this.Clickadd} className="block"  >add</Button>

<CheckboxList className={this.props.tagp ? 'block' : 'hidden'} onClick={this.Click1add} sho={ this.state.text} />

    </form>
    )
  }
}
// *************************************************************************
class CheckboxList extends Component {
  render(){ 
  return (
  <div className="root">
    <List  id="CheckboxList" >
      {[0].map(value => {
        const labelId = `checkbox-list-label-${value}`;

        return (
        <ListItem  key={value} role={undefined} dense button onChange={this.handleToggle} >
        <ListItemIcon >
          <Checkbox
            edge="start"
            // checked={checked.indexOf(value) !== -1}
            // tabIndex={-1}
            color="primary"
            disableRipple
            inputProps={{ 'aria-labelledby': labelId }}
          />
        </ListItemIcon>
        <ListItemText id={labelId} primary={this.props.sho} />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="Comments">
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    );
  })}
</List>

 
</div>
);
}
 }
//  *****************************
export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Name', field: 'name' },
      { title: 'Surname', field: 'surname' },
      { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
      {
        title: 'Birth Place',
        field: 'birthCity',
        lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
      },
    ],
    data: [
      { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
      {
        name: 'Zerya Betül',
        surname: 'Baran',
        birthYear: 2017,
        birthCity: 34,
      },
    ],
  });

  return (
    <MaterialTable
      title="Editable Example"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.push(newData);
              setState({ ...state, data });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data[data.indexOf(oldData)] = newData;
              setState({ ...state, data });
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.splice(data.indexOf(oldData), 1);
              setState({ ...state, data });
            }, 600);
          }),
      }}
    />
  );
}