export const selectGroup = ({ groups }, groupId) => {
    return groups[groupId];
};

export const asArray = ({ groups }) => {
    Object.keys(groups).map(key => groups[key])
};

