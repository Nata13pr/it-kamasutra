import { Component } from "react";
import shortid from "shortid";
import "./App.css";
import ColorPicker from "./ColorPicker";
// import Counter from './Counter';
import DropDown from "./DropDown";
import Filter from "./Filter/Filter";
import Form from "./Form/Form";
import Modal from "./Modal/Modal";
import TodoEditor from "./TodoEditor/TodoEditor";
import TodoList from "./TodoList";

// const colorPicker=[
//   {label:'red',color:'#F44336'},
//   {label:'green',color:'#4CAF50'},
//   {label:'blue',color:'##7FFF00'},
//   {label:'grey',color:'#2196F3'},
//   {label:'pink',color:'#607D88'},
//   {label:'indigo',color:'#6077'},
//   {label:'amazur',color:'#2199'},
// ]

class App extends Component {
  state = {
    todos: [
      // { id: "id-1", text: "Learn react", completed: false },
      // { id: "id-2", text: "Learn react Router", completed: false },
      // { id: "id-3", text: "Survive Redux", completed: false },
    ],
    name: "",
    tag: "",
    filter: "",
    showModal:false,
  };



  componentDidMount(){
    console.log('componentDidMount');

    const todos =localStorage.getItem('todos');
    const parsedTodos=JSON.parse(todos);

    if(parsedTodos){
      this.setState({todos:parsedTodos})

    }
  }

  componentDidUpdate(prevProps,prevState){
    console.log('componentDidUpdate');
    if(this.state.todos!==prevState.todos){
      console.log("Обновилось");

      localStorage.setItem('todos',JSON.stringify(this.state.todos))
    }
  }
  toggleModal=()=>{
    this.setState(({showModal})=>({
      showModal:!showModal,
    }))
  }

  deleteTodos = (todoId) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== todoId),
    }));
  };

  addTodo = (text) => {
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };

    this.setState((prevState) => ({
      todos: [todo, ...prevState.todos],
    }));
  };

  formSubmitHandler = (data) => {
    console.log(data);
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };
  onToggleCompleted = (todoId) => {
    // this.setState(prevState=>({
    //   todos:prevState.todos.map(todo=>{
    //     if(todo.id===todoId){
    //       console.log('Found');
    //       return {
    //         ...todo,
    //         completed:!todo.completed,
    //       }
    //     }
    //     return todo;
    //   })
    // }))

    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) =>
        todo.id === todoId
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      ),
    }));
  };

  getVisibleTodos=()=>{
    const {filter,todos}=this.state;

    const normalizedFiler=filter.toLowerCase();

    return todos.filter(todo=>
      todo.text.toLowerCase().includes(normalizedFiler),
      )
  }

  calculateCompletedTodos =()=>{
    const {todos}=this.state;

    return todos.reduce(
      (total,todo)=>(todo.completed ?total +1 :total),0
    )
  }


  render() {
    console.log('render');
    const completedTodos = this.calculateCompletedTodos();

    const visibleTodos = this.getVisibleTodos();

    return (
      <>
      <button type='button' onClick={this.toggleModal}>Open modal</button>

      {this.state.showModal && (
       <Modal onClose={this.toggleModal}>
        <h1>Context Modal-children</h1>
        <p>Lorem fdfgdfgdgdgdgdgsdfhdfhsdfhshsfghfghsfghsfghsfhgfsdghs</p>
        <button type="button" onClick={this.toggleModal}>Close</button>
        </Modal>)}
      
        <TodoEditor onSubmit={this.addTodo} />
        <Filter value={this.state.filter} onChange={this.changeFilter} />

        <h1>Component state</h1>
        {/* <Counter  initialValue={50}/> */}
        {/* <DropDown/> */}
        {/* <ColorPicker options={colorPicker}/> */}


         <div>
          <p>Total amount : {this.state.todos.length}</p>
          <p>Completed amount : {completedTodos}</p>
        </div>
        <TodoList
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodos}
          onToggleCompleted={this.onToggleCompleted}
        />
        <Form onSubmit={this.formSubmitHandler} /> 
      </>
    );
  }
}

export default App;
