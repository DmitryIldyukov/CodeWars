function friend(friends){
    let setOfFriends = [];
    for (let i = 0; i < friends.length; i++) {
        if (friends[i].length == 4) {
            setOfFriends.push(friends[i]);
        }
    }

    return setOfFriends;
}