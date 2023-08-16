import './Header.css';
import CreateTodoForm from "../CreateTodoForm";
import {useState} from "react";
import {createItem} from "../../store/todoThunk";
import {useDispatch} from "react-redux";

function Header() {

    const [isCreate, setIsCreate] = useState(false)

    const dispatch = useDispatch()

    const createTodo = (title, description) => {
        dispatch(createItem({title, description}))
    }

    const onClose = () => {
        setIsCreate(!isCreate);
    }

    const btn = <div className="headerContent"><button
        className="createButton" onClick={ () => onClose() }>создать</button></div>;

    const create = <CreateTodoForm onChange={createTodo} onClose={onClose}/>;

    return (
        <header className="headerTodo">

            {isCreate ? create : btn}

        </header>
    )
}

export default Header;