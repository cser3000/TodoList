import './Header.css';
import CreateTodoForm from "../CreateTodoForm";
import {useState} from "react";

function Header({onChange}) {

    const [isCreate, setIsCreate] = useState(false)

    const onClose = () => {
        setIsCreate(!isCreate);
    }

    const btn = <div className="headerContent"><button
        className="createButton" onClick={ () => onClose() }>создать</button></div>;

    const create = <CreateTodoForm onChange={onChange} onClose={onClose}/>;

    return (
        <header className="headerTodo">

            {isCreate ? create : btn}

        </header>
    )
}

export default Header;