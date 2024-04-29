const Pet = (props) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.name),
        React.createElement("h2", {}, props.animal),
        React.createElement("h2", {}, props.breed),
    ])
}
const App = () => {
    return React.createElement(
        "div",
        {},
        React.createElement("h1", {}, "Adopt Me!"),
        React.createElement(Pet
            , {
                animal: "Dog",
                name: "Luna",
                breed: "Havenese"
            }),
        React.createElement(Pet
            , {
                animal: "Bird",
                name: "Bob",
                breed: "Cockatiel"
            }),
        React.createElement(Pet
            , {
                animal: "Dog",
                name: "Luna",
                breed: "Havenese"
            }),
    );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
// const root = createRoot(container);
root.render(React.createElement(App));