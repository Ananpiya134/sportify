
import '../../App.css'
import NavBar from '../NavBar';

function EventDetail() {
    return (
        <div style={{ backgroundColor: "#ffffff" }}>
            {/* header imgae */}
            <div className={`event_detail_image_header`} />

            {/* event header */}
            <div className={`mt-2  mx-3`}>
                <h1 className={`event_detail_header`} style={{ fontSize: "32px" }}> Basketball Society</h1>
                <h1 className={`event_detail_header`} style={{ fontSize: "32px" }}> Thammasat U.</h1>
                <div className={`d-flex justify-content-between `}>
                    <p className={`b-text`}>date: Thursday, 28 April, 2022. 5:45 P.M.</p>
                    <p className={`b-text`}> 1.3 k.m.</p>
                </div>
                <p className={`b-text`} style={{ fontSize: "12px", lineHeight: "14px" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>

            {/* event stats */}
            <div className={`event_stats d-flex justify-content-around`}>
                <div
                    className={`d-flex flex-column align-items-center event_stats_element justify-content-around`}
                >
                    <p className={`b-text `}>Event Capacity</p>
                    <p className={`b-text`}>60</p>
                </div>
                <div
                    className={`d-flex flex-column align-items-center event_stats_element justify-content-around`}
                >
                    <p className={`b-text `}>No. people attenting</p>
                    <p className={`b-text`}>29</p>
                </div>
                <div
                    className={`d-flex flex-column align-items-center event_stats_element justify-content-around`}
                >
                    <p className={`b-text `}>skill level</p>
                    <p className={`b-text`}>intermediate</p>
                </div>
            </div>

            {/* join button */}
            <div className={`d-flex justify-content-center my-3`}>
                <button className={`add_btn`} style={{ width: "301px" }}>Join</button>
            </div>

            {/* location detail */}
            <div className={`mx-3 `}>
                <b style={{}}>location</b>
                <p className={`b-text`} style={{ fontSize: "12px", lineHeight: "14px" }}> 77/2 Chakkapetch Road, Wangburapapirom, phranakorn district, bangkok 10200</p>
                <div className={`event_detail_map`} />

            </div>
            <NavBar />
        </div>

    );
}

export default EventDetail;