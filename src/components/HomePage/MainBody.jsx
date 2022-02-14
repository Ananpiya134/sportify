

function MainBody() {

    return (
        <div className="main_body ">
            <div className={`filter_container d-flex `}>
                <button className={`btn filter_btn`}>filter activity</button>
            </div>


            {/* event button */}
            <div className={`event_container`}>
                <div className={`event_image`}></div>
                <div className={`mt-3 mx-2`}>
                    <h3 className={`event_thumbnail_title`}>Basketball Society</h3>
                    <h3 className={`event_thumbnail_title`}>Thammasat U.</h3>
                    <p className={`b-text`}>date: <span>Thursday 28, April, 2022</span> <span> 5: 45</span> <span> P.M.</span></p>
                    <p className={`b-text mt-4`}>1.3 k.m.</p>
                </div>


            </div>
        </div>
    );
};

export default MainBody;