import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { userSelectorState } from '../stores/slicers/userSlice';

export const AboutPage = () => {
    const user = useSelector((state: userSelectorState) => state.user.user);

    return (
        <div className="mt-5">
            <h1>Template made by Rhuan!</h1>
            <Link to="/">Go to HomePage!</Link>
            <h1 className="mt-5 uppercase text-xl font-bold">Redux Magic: {user}</h1>
        </div>
    );
};
