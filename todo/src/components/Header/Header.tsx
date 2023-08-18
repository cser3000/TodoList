import './Header.css';
import CreateTodoForm from "../CreateTodoForm";
import {useState} from "react";
import {createItem} from "../../store/todoThunk";
import {useAppDispatch} from "../../hook";
import {Todo} from "../../store/todoSlice";

function Header(): JSX.Element {

    const [isCreate, setIsCreate] = useState<boolean>(false)

    const dispatch = useAppDispatch();

    const createTodo = ({title, description}: Todo): void => {
        dispatch(createItem({title, description}))
    }

    const onClose = (): void => {
        setIsCreate(!isCreate);
    }

    const btn: JSX.Element = <div className="headerContent"><button
        className="createButton" onClick={ () => onClose() }>создать</button></div>;

    const create: JSX.Element = <CreateTodoForm onChange={createTodo} onClose={onClose} data={undefined}/>;

    return (
        <header className="headerTodo">
            {isCreate ? create : btn}
        </header>
    )
}

export default Header;