import { useStore } from '../../Context/Store';
import { Ride } from './Ride';
import { NoResults } from '../NoResults/NoResults';
import  { sortByNearest } from '../../utils/helpers/helpers';



export const Rides = () => {
    const { user, getRides } = useStore();
    const ride = sortByNearest( getRides(), user.station_code )
    
    return (
        <div>
            { ride.length ? ride.map( ( r, i ) => (
                <Ride key = { i } station_code = { user.station_code } { ...r } /> )) :
                <NoResults />
            }
        </div>
    );
};