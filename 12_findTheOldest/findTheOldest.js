const findTheOldest = function(people) {
    return people.map((e) => ({
            name: e.name,
            age: e.yearOfDeath ? e.yearOfDeath - e.yearOfBirth : new Date().getFullYear() - e.yearOfBirth,
        })).reduce((target, curr) => curr.age > target.age ? curr : target);
};

// Do not edit below this line
module.exports = findTheOldest;
