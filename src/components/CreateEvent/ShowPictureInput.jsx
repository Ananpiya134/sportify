import defaultPic from '../../public/image/map.jpeg'

function ShowPictureInput() {

    return (
        <div className={`container bg-secondary rounded rounded-5 d-flex justify-content-center align-items-center mt-4`} style={{ width: '320px', height: '240px' }}>
            <img src={defaultPic} alt="map-img" style={{ width: '300px', height: '220px' }} />
        </div>
    );
}

export default ShowPictureInput;