function setUserData(data) {
    sessionStorage.setItem("userData", JSON.stringify(data));
}

function getUserData() {
    const userData = sessionStorage.getItem("userData");
    if (userData !== null && userData !== `undefined`) {
        return JSON.parse(userData);
    }
}
function getUserId() {
    const userData = getUserData();
    if (!userData) {
        return null; 
    }
    return userData._id;
}

function removeUserData() {
    sessionStorage.removeItem("userData");
}

export const userHelper = {
    setUserData,
    getUserData,
    getUserId,
    removeUserData
};
