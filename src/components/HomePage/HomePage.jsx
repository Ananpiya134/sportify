import '../../App.css';
import MainBody from './MainBody';
import NavBar from '../layout/NavBar';

function HomePage() {

    return (
        <div
            className={``}
            style={{ width: "340px", height: "844px" }}
        >
            <MainBody />
            <NavBar />
        </div>
    );
}

export default HomePage;