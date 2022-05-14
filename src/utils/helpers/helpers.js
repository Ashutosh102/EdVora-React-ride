
export function calcDistance( path , stCode ) {
    let pointer = Math.abs( path[0] - stCode );
    let length = path.length;

    for( let i = 0; i < length; i++ ) {

        if( i === 0 ) {
            continue;
        }

        let temp = Math.abs( path[i] - stCode );

        if( temp < pointer ) {
            pointer = temp;
            continue;
        }

        break;
    }

    return pointer;
}

export function sortByNearest(ride, stCode) {
    return ride.sort( (a, b) =>  {
        let A = a.station_path;
        let B = b.station_path;

        return calcDistance(A, stCode) - calcDistance(B, stCode);

    })
}