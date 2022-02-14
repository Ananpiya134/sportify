import '../App.css'

function NavBar() {


    return (
        <div className={`Nav`}>

            <div className={`nav_body d-flex justify-content-around`}>
                <button className={`btn`}><i className={`fa-solid fa-house nav_btn`} /></button>
                <button className={`btn`}><i className={`fa-solid fa-calendar-days nav_btn`} /></button>
                <button className={`btn add_btn`}><i className={`fa-solid fa-plus`} style={{ color: "#ffffff", backgroundColor: "#34A853" }} /></button>
                <button className={`btn`}><i className={`fa-solid fa-message nav_btn`} /></button>
                <button className={`btn`}><i className={`fa-solid fa-user nav_btn`} /></button>
            </div>

        </div>
    );
};

export default NavBar;