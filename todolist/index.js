class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [
        { id: 1, title: "Buy milk", },
        { id: 2, title: "Buy eggs", },
        { id: 3, title: "Buy cheese", },
      ],
    };
  };

  render() {
    return React.createElement("div", null, [
      React.createElement(ItemForm, { key: "item-form", }),
      React.createElement(
        TodoList,
        {
          key: "item-list",
          list: this.state.list,
        }
      )
    ]);
  };
};

class ItemForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { title: "", };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  };

  handleSubmit(e) {
    e.preventDefault();
    // call function from App component
    this.setState({ title: "", });
  };

  handleChange(e) {
    this.setState({ title: e.target.value, });
  };

  addItem(item) {
    this.setState(prevState => {
      return {
        list: prevState.list.concat({ id: this.getUniqueId() title: item, })
      }
    })
  }

  render() {
    return React.createElement(
      "form",
      { onSubmit: this.handleSubmit, },
      React.createElement(
        "input",
        {
          onChange: this.handleChange,
          value: this.state.title,
          name: "title",
          placeholder: "Add an item",
        },
      )
    );
  };
};


const TodoList = ({ list, handleComplete }) => {
  return React.createElement(
    "ul",
    { key: "list", },
    list.map(item => {
      return React.createElement(
        Item,
        {
          key: item.id,
          id: item.id,
          title: item.title,
          complete: item.complete,
          handleComplete: handleComplete,
        }
      );
    })
  );
};


const Item = ({ id, title, complete, handleComplete, }) => {
  return React.createElement(
    "li",
    {
      style:
      {
        textDecoration: complete && "line-through",
        color: complete && "grey",
      },
      onClick: () => handleComplete(id)
    },
    title
  );
};

ReactDOM.render(
  React.createElement(App),
  document.getElementById("root")
);
