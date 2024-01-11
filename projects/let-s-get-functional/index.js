// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./christian-joseph.github.io4/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
let males = _.filter(array, function(customer){
    return customer.gender === 'male'
});
return males.length
};

var femaleCount = function(array){
    let females = _.reduce(array, function(count, customer){
        if(customer.gender === 'female'){
            return count + 1
        }
        return count
    }, 0);
    return females
}

var oldestCustomer = function(array){
    let oldest = _.reduce(array, function(oldest, current){
if(oldest.age < current.age){
oldest = current
}
return oldest
    });
    return oldest.name
};

var youngestCustomer = function(array){
    let youngest = _.reduce(array, function(youngest, current){
        if(youngest.age > current.age){
            youngest = current
        }
        return youngest
    });
    return youngest.name
};

var averageBalance = function(array){
    let total = _.reduce(array, function(acc, current){
        let balence = '';
        for(let i = 0; i < current.balance.length; i++){
            if(current.balance[i] !== '$' && current.balance[i] !== ','){
                balence += current.balance[i];
            }
        }
        return acc += Number(balence)
    }, 0)
    return total / array.length
};

var firstLetterCount = function(array, letter){
    let num = _.reduce(array, function(acc, curr){
        if(curr.name[0].toUpperCase() === letter.toUpperCase()){
            acc++
        }
        return acc
    }, 0);
    return num
}

var friendFirstLetterCount = function(array, customer, letter){
    let FirstL = _.reduce(array, function(acc, cur){
    if(cur.name === customer){
        acc += firstLetterCount(cur.friends, letter)
    }
    return acc
    }, 0)
    return FirstL
    };

var friendsCount = function(array, name){
    let ret = _.reduce(array, function(acc, curr){
    if(_.contains(_.pluck(curr.friends, 'name'), name)){
        acc.push(curr.name)
    
    }
    return acc
    }, [])
    return ret;
};

var topThreeTags = function(array){
    let uniqueTagsObject = _.reduce(array, function(acc, curr){
        for(let i = 0; i < curr.tags.length; i++){
            if(!acc[curr.tags[i]]){
                acc[curr.tags[i]] = 1;
            }else{
                acc[curr.tags[i]]++
            }
        }
        return acc
    }, {});
    let sorted = Object.values(uniqueTagsObject).sort()
    let reversed = sorted.reverse();
    let FirstIndex = _.reduce(Object.values(uniqueTagsObject), function(acc, curr, index){
        if(curr === reversed[0] && acc[0] === undefined){
            acc[0] = index;
        }else if(curr === reversed[1] && acc[1] === undefined){
            acc[1] = index
        }else if(curr === reversed[2] && acc[2] === undefined){
            acc[2] = index
    }
    return acc;
}, [])
let topTag = [];
topTag[0] = Object.keys(uniqueTagsObject)[FirstIndex[0]]
topTag[1] = Object.keys(uniqueTagsObject)[FirstIndex[1]]
topTag[2] = Object.keys(uniqueTagsObject)[FirstIndex[2]]
return topTag;
}
var genderCount = function(array){
    let obj = _.reduce(array, function(acc, person){
let {gender} = person;
acc[gender] = (acc[gender] || 0) + 1;
return acc

    }, {});
    return obj
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
