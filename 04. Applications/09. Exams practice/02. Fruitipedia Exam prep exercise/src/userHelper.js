function setUserData(data) {
    sessionStorage.setItem("userData", JSON.stringify(data));
}

function getUserData() {
    const userData = sessionStorage.getItem("userData");
    if (userData !== null && userData !== `undefined`) {
        return JSON.parse(userData);
    }
    // handle the case when "userData" is null or undefined
    // return an appropriate value or throw an error
}
function getUserId() {
    const userData = getUserData();
    if (!userData) {
        // handle the case when userData is null or undefined
        return null; // or any other appropriate value
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
