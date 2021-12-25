// arraySort.js

const myFriends = ['rasik', 'atik', 'manik', 'bokti'];
const sortedFriends = myFriends.sort();
// const sortedFriendsReverse = myFriends.reverse();
console.log(sortedFriends);


// numeric sort ascending
const points = [40, 100, 1, 5, 25, 10];
const ascendingSort = points.sort((a, b) => a - b);
console.log(ascendingSort);

// numeric sort descending
const point2 = [40, 100, 1, 5, 25, 10];
const descendingSort = point2.sort((a, b) => b - a);
console.log(descendingSort);