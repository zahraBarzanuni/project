
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';


// آرایه ک لیست ذخیره میشه
var todoItems = [];

// ************میفرسته به todolidtitem***********
class TodoList extends React.Component {
  render() {
    var items = this.props.items.map((item, index) => {
      return (
        React.createElement(TodoListItem, {
          key: index,
        //   // مقدار ورودی 
          item: item,
          index: index,
        //   // برای کارکردن دکمه حذف
          removeItem: this.props.removeItem,
        //   // برای کارکردن چک باکس
          markTodoDone: this.props.markTodoDone 
        })
        );

    });
//  ساختن ul
    return React.createElement("ul", { className: "list-group" }, " ", items, " ");
  }}

// ***********liمیسازه************
class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.onClickClose = this.onClickClose.bind(this);
    this.onClickDone = this.onClickDone.bind(this);
  }
  // دستور حذف
  onClickClose() {
    var index = parseInt(this.props.index);
    this.props.removeItem(index);
  }
  // دستور چک
  onClickDone() {
    var index = parseInt(this.props.index);
    this.props.markTodoDone(index);
  }
  render() {
    var todoClass = this.props.item.done ? "done" : "undone";
    return (
      // خود li
      React.createElement("li", { className: "list-group-item height" },
      // span برای چک
      React.createElement("span", {
        className: "glyphicon glyphicon-ok icon ",
        "aria-hidden": "true",
        onClick: this.onClickDone }),

        // دکمه حذف
        React.createElement("span", {
          className: "glyphicon glyphicon-remove icon",
          "aria-hidden": "true",
          onClick: this.onClickClose  }),
      
        // برای خط زدن روی ورودی
      React.createElement("div", { className: todoClass },
     
      this.props.item.value,
      // دکمه حذف ولی بالاتر استفاده کردم ی چیزی دیگ 
      // React.createElement("button", { type: "button", className: "close", onClick: this.onClickClose }, "\xD7")
    )));
  }}

// ************کل فرم***********
class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    this.refs.itemName.focus();
  }
  onSubmit(event) {
    event.preventDefault();
    var newItemValue = this.refs.itemName.value;

    if (newItemValue) {
      this.props.addItem({ newItemValue });
      this.refs.form.reset();
    }
  }
  render() {
    return (
      React.createElement("div",{className:" ss"},
      React.createElement("form", { ref: "form", onSubmit: this.onSubmit, className: "form-inline" },
      React.createElement("input", {
        type: "text",
        ref: "itemName",
        className: "form-control",
        placeholder: "تودو جدید به لیست اضافه کنید..." }),

      React.createElement("button", { type: "submit", className: "btn btn-success button" }, "اضافه کردن"))));




  }}

// **********هدر*************
class TodoHeader extends React.Component {
  render() {
    return React.createElement("h1", null, "Todo list");
  }}

// *********همه چی رو میخوره**************
class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.markTodoDone = this.markTodoDone.bind(this);
    this.state = { todoItems: todoItems };
  }
  addItem(todoItem) {
    todoItems.unshift({
      index: todoItems.length + 1,
      value: todoItem.newItemValue,
      done: false });

    this.setState({ todoItems: todoItems });
  }
  removeItem(itemIndex) {
    todoItems.splice(itemIndex, 1);
    this.setState({ todoItems: todoItems });
  }
  markTodoDone(itemIndex) {
    var todo = todoItems[itemIndex];
    todoItems.splice(itemIndex, 1);
    todo.done = !todo.done;
    todo.done ? todoItems.push(todo) : todoItems.unshift(todo);
    this.setState({ todoItems: todoItems });
  }
  render() {
    return (
    
      React.createElement("div", { id: "main",className:"container" },
      React.createElement(TodoHeader, null),
      React.createElement(TodoForm, { addItem: this.addItem }),
      React.createElement(TodoList, {
        items: this.props.initItems,
        removeItem: this.removeItem,
        markTodoDone: this.markTodoDone 
    }
    ),

        
      )

    );
      



  }}

// ***********************
ReactDOM.render(
React.createElement(TodoApp, { initItems: todoItems }),
document.getElementById("app"));