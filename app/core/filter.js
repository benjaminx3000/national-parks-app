// Wrapper service for customizations underscore utilities
import {_} from 'underscore';

var filter = new Filter();

function Filter() {
    var service = {
        filter: filter,
        sortBy: sortBy,
        groupBy: groupBy
    }

    /*
    * Filter.filter
    * Leveraging _.filter to mirror angular $filter.filter
    *
    * returns: Array
    * @collection: Array, the array on wich to perfomr the filtering
    * @?properties: Array, if specified the object properties with which to match
    * @query: String, if the stirng is found, if the query contains spaces,
    *   the returned array will contain matches for each word.
    */
    function filter(collection, properties, query) {
        // Spliting the query and joining it with the
        // oiginal query creates a fuzzy search, returning
        // both the full string match and the individual tokesn
        query = _.union([query],query.split(' '));
        collection = _.filter(collection, (predicate) => {
            var match = false,
                matchProps = (properties !== null) ?
                    properties :
                    Object.keys(predicate)

            query.forEach(term => {
                matchProps.forEach(key => {
                    if (predicate[key].toString().toLowerCase().indexOf(term.toLowerCase()) !== -1) {
                        predicate.relevance = term.length;
                        console.log(predicate);
                        match = true;
                    }
                });
            })

            return match;

        }, query)

        return collection;
    }

    /*
    * Filter.sortBy
    * Small extensiton to _.sortBy enabeling ascending descending order
    *
    * returns Array
    * @collection: Array, the collection which is to be sorted.
    * @sortByProp: String, the propery with which the collection
    *    is to be sorted by
    * @?asc: boolean, return the arry in ascending order
    */
    function sortBy(collection, sortByProp, asc) {
        collection = (asc || typeof asc == 'undefined')?
            _.sortBy(collection, sortByProp) :
            _.sortBy(collection, sortByProp).reverse();

        return collection;
    }

    function groupBy() {
        //maybe not
    }

    return service;
}

export {filter};
