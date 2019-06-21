import React, { Component } from 'react';
import ReactDom from 'react-dom';
import './App.css';

var todoItems = [];

class TodoList extends Component {
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
            )
        });
        return React.createElement("ul", { className: "list-group" }, " ", items, " ");
    }
}


class TodoListItem extends Component{
    constructor(props){
        super(props);
        this.onClickDone=this.onClickDone.bind(this);
        this.onClickDone = this.onClickDone.bind(this);
    }
    onClickDone(){
        var index = parseInt(this.props.index);
        this.props.removeItem(index);
    }
    onClickDone() {
        var index = parseInt(this.props.index);
        this.props.markTodoDone(index);
      }
    render(){
        var todoClass= this.props.item.done ? "done" : "undone";
        return(
            React.createElement("li" , {className:"list-group-item height"},
            React.createElement("span",{
                className:"glyphicon glyphicon-ok icon ",
                "aria-hidden": "true",
                onClick: this.onClickDone
            }),
            React.createElement("span",{
                className:"glyphicon glyphicon-remove icon ",
                "aria-hidden": "true",
                onClick: this.onClickClose
            }),
            React.createElement("div", { className: todoClass },
        )
        )
    }
}