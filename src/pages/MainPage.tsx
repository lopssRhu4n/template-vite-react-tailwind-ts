import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setUser, userSelectorState } from '../stores/slicers/userSlice';

export const MainPage = () => {
    const user = useSelector((state: userSelectorState) => state.user.user);
    const dispatch = useDispatch();

    const handleInput = (e) => {
        dispatch(setUser(e.target.value));
    };
    return (
        <div className="mt-4">
            <h1>This is the main page</h1>
            <Link className="block" to="/about">
                Go to about page!
            </Link>
            <input
                className="my-5 border border-gray-400 p-3 rounded-md"
                placeholder="Type something to test redux..."
                type="text"
                onChange={handleInput}
            />
            <h1 className="uppercase text-xl font-bold">Redux Magic: {user}</h1>
        </div>
    );
};
