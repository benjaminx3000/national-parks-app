// Wrapper service for udercore utilities
import {_} from 'underscore';

var filter = new Filter();

function Filter() {
    var service = {
        filter: filter,
        sortBy: sortBy,
        groupBy: groupBy
    }

    /*
    * returns: Array
    * @param: Array collection, the array on wich to perfomr the filtering
    * @?param: Array properties, if specified the object properties with which to match
    * @param: String query, if the stirng is found, if the query contains spaces,
    *   the returned array will contain matches for each word.
    */
    function filter(collection, properties, query) {
        query = query.split(' ');
        collection = _.filter(collection, (predicate) => {
            var match = false,
                matchProps = (properties !== null) ?
                    properties :
                    Object.keys(predicate)

            query.forEach(term => {
                matchProps.forEach(key => {
                    if (predicate[key].toString().toLowerCase().indexOf(term.toLowerCase()) !== -1) {
                        match = true;
                    }
                });
            })

            return match;

        }, query)

        return collection;
    }

    function sortBy() {

    }

    function groupBy() {

    }

    return service;
}

export {filter};
