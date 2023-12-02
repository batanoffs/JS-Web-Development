function getUserData() {
    const userData = sessionStorage.getItem("userData");
    if (userData) {
        return JSON.parse(userData);
    }
    return null;
}

function setUserData(userData) {
    sessionStorage.setItem("userData", JSON.stringify(userData));
}

function getUserId() {
    const userData =  getUserData()
    return userData._id;
}

function removeUserData() {
    sessionStorage.removeItem("userData");
}
export const userHelper = {
    getUserData,
    setUserData,
    getUserId,
    removeUserData
}