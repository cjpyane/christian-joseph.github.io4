'use strict';

// YOU KNOW WHAT TO DO //
/**
 * identity: identity is made to take in a value and return it unchanged
 * @param {any value} value: the input value to return
 * 
 * 
 * 
 */
function identity(value){
    return value
}
module.exports.identity = identity;

/**
 * typeOf: this func is made to return the type of value that is input as a string
 * @param {any value}  value: this is used to find the type value and return as a string
 * 
 * 
 */
function typeOf(value){
    if(Array.isArray(value)){
        return 'array'
    }else if(value === null){
        return 'null'
    }else{
        return typeof value
    }
}
module.exports.typeOf = typeOf;


/**
 * 
 * 
 * 
 * 
 */
function first(array, number){
    var hold = [];
    if(!Array.isArray(array)){
        return hold
    }else if(number === undefined || typeof number !== 'number'){
        return array[0]
    }else if(number < 0){
        return hold
    }else if(number > array.length){
        return array
    }else {
        return array.slice(0 , -1)
    }
}
module.exports.first = first;

/**
 * 
 * 
 * 
 * 
 */
function last(array, number){
    var hold = [];
    if(!Array.isArray(array)){
        return hold
    }else if(number === undefined || typeof number !== 'number'){
        return array.pop();
    }else if(number < 0){
        return hold
    }else if(number > array.length){
        return array
    }else {
        return array.slice(1, 3)
    }
}
module.exports.last = last;

/**
 * 
 * 
 * 
 */

function(array, value){
    for(let i = 0; i < array.length; i++){
        if(array.includes(value)){
            return 1
        }else{
            return -1
        }
    }
}
module.exports.indexOf = indexOf;


/**
 * 
 * 
 * 
 * 
 */
function contains(array, value){
    var now = false;
    if(value === undefined){
        return false
    }
    for(let i = 0; i < array.length; i++){
        array[i] === value ? now = true : now;
    }
    return now
}
module.exports.contains = contains;

/**
 * 
 * 
 * 
 * 
 * 
 */
function unique(array){
    let arr = []
    for(let i of array){
        if(arr.indexOf(i) === -1){
            arr.push(i)
        }
    }
    return arr
}
module.exports.unique = unique;


/**
 * 
 * 
 * 
 * 
 */
function filter(array, func){
    var hold = [];
    for(let i = 0; i < array.length; i++){
        if(func(array[i], i, array)){
            hold.push(array[i])
        }
    }return hold
}
module.exports.filter = filter;

/**
 * 
 * 
 * 
 * 
 */
function reject(array, func){
    var hold = [];
    for(let i = 0; i < array.length; i++){
        if(!func(array[i], i, array)){
            hold.push(array[i])
        }
    }return hold
}
module.exports.reject = reject


/**
 * 
 * 
 * 
 * 
 */
function partition(array, func){
    var subArr = [];
    var subArr2 = [];
    var ret = [];
    for(let i = 0; i < array.length; i++){
        if(func(array[i], [i], array)){
            subArr.push(array[i])
        }else if(!func(array[i], i, array)){
            subArr2.push(array[i])
        }
    }
    ret.push(subArr)
    ret.push(subArr2)
    return ret
}
module.exports.partition = partition

/**
 * 
 * 
 * 
 */
function map(coll, func){
    var ret = [];
    if(Array.isArray(coll)){
        for(let i = 0; i < coll.length; i++){
            if(func(coll[i], i, coll)){
                ret.push(func(coll[i], i, coll))
            }
        }
    }else for(let key in coll){
        if(func(coll[key], key, coll)){
            ret.push(func(coll[key], key, coll))
        }
    }
    return ret
}
module.exports.map = map;


/**
 * 
 * 
 * 
 */
function pluck(array, prop){
    return _.map(array, function(array){
        for(let key in array){
            return array[key]
        }
    })
}
module.exports.pluck = pluck;




/**
 * 
 * 
 * 
 * 
 */

function every(coll, func){
    let allItemsPassed = true;
    if(func === undefined){
        if(Array.isArray){
            for(let i = 0; i < coll.length; i++){
                if(!coll[i]){
                    allItemsPassed = false
                }
            }
        }
        else{
            for(let key in coll){
                if(!coll[key]){
                    allItemsPassed = false
                }
            }
        }
    }
    else{
        if(Array.isArray(coll)){
            for(let i = 0; i < coll.length; i++){
                if(!func(coll[i], i, coll)){
                    allItemsPassed = false;
                }
            }
        }
        else{
            for(let key in coll){
                if(!func(coll[key], key, coll)){
                    allItemsPassed = false
                }
                else func(coll[key], key, coll)
            }
        }
    }
    return allItemsPassed
}
module.exports.every = every


/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * 
 * 
 * 
 */

function(coll, func){
    var ret = false
    if(func === undefined){
        if(Array.isArray(coll)){
            for(let i = 0; i < coll.length; i++){
                if(coll[i]){
                    ret = true;
                    break;
                }
            }
        }
        else{
            for(let key in coll){
                if(coll[key]){
                    ret = true;
                    break;
                }
            }
        }
    }
    else{
        if(Array.isArray(coll)){
            for(let i = 0; i < coll.length; i++){
                if(func(coll[i], i, coll)){
                    ret = true;
                    break;
                }
            }
        }
        else{
            for(let key in coll){
                if(coll[key]){
                    ret = true
                    break;
                }
            }
        }
    }
    
    return ret
};
module.exports.some = some;


/**
 * 
 * 
 * 
 * 
 */

function reduce(arr, func, seed){
    let ret;
    if(seed === undefined){
        ret = arr[0];
        for(let i = 1; i < arr.length; i++){
            ret = func(ret, arr[i], i, arr);
        }
    }else{
        ret = seed;
        for(let i = 0; i < arr.length; i++){
            ret = func(ret, arr[i], i, arr)
        }
    }return ret
}

module.exports.reduce = reduce;

/**
 * 
 * 
 * 
 * 
 */
function extend(target, ...obj){
    Object.assign(target, ...obj)
    return target
}
module.exports.extend = extend;
