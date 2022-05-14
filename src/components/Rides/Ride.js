import styles from './Rides.module.css';
import map from '../../assets/map.png';
import { calcDistance } from '../../utils/helpers/helpers';

export const Ride = ( props ) => {

    const { 
        id,
        origin_station_code,
        station_path,
        date,
        state,
        city,
        station_code
    } = props;

    const { _map, ride, ride_d, val, badges, badge } = styles;
    const d = new Date( date * 1000 );


    // time
    const _date = d.toDateString().split(" ");
    const _time = d.toTimeString().substring(0, 5)
    const txtDate =  `${ _date[2] }th ${ _date[1] } ${ _date[3] } ${ _time }` ;

    const distance = calcDistance( station_path,  station_code );

    return (
        <div className='--container'>
            <div className = { ride }>
                <div className = { _map }>
                    <img src = { map } alt = "map"/>
                </div>

                <div className = { ride_d }>
                    <p>
                        Ride Id : {" "}
                        <span 
                        className = { val }>
                            { id }
                        </span>
                    </p>

                    <p>
                        Origin Station : {" "}
                        <span 
                        className = { val }>
                            { origin_station_code }
                        </span>
                    </p>

                    <p>
                        station_path : {" "}
                        <span 
                        className = { val }>
                            { `[${ station_path.join(", ") }]` }
                        </span>
                    </p>

                    <p>
                        Date: {" "}
                        <span 
                        className = { val }>
                            { txtDate }
                        </span>
                    </p>
                    
                    <p>
                        Distance: {" "}
                        <span 
                        className = { val }>
                            { distance }
                        </span>
                    </p>
                </div>


                <div className = { badges }>
                    <span className = { badge } >{ city }</span>
                    <span className = { badge } >{ state }</span>
                </div>
            </div>
        </div>
    );
};