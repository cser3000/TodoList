import './Header.css';
import CreateTodoForm from "../CreateTodoForm";
import {useState} from "react";

function Header({onChange}) {

    const [createF, setCreateF] = useState(false)

    const onClose = () => {
        setCreateF(!createF);
    }

    const btn = <div className="headerContent"><button className="createButton" onClick={
        () => onClose() }>создать</button></div>;
    const create = <CreateTodoForm onChange={onChange} onClouse={onClose}/>;

    return (
        <header className="headerTodo">

            {createF ? create : btn}

        </header>
    )
}

export default Header;