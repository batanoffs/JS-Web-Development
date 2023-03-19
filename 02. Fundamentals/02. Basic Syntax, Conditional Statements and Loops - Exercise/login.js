function login(input) {

    let username = input[0];
    let index = 1;
    let password = input[index];
    let passReversed = ``;    

    while (username !== passReversed) {
        passReversed = ``;
        
        for (let i=password.length-1; i >= 0; i--) {
            passReversed += password[i];  
        }

        if (index >= 4 && username !== passReversed) {
            console.log(`User ${username} blocked!`);
            break;   
        }        
        if (username === passReversed) {
            console.log(`User ${username} logged in.`);
        } else {
        console.log(`Incorrect password. Try again.`);
        }

        index ++;
        password = input[index];
    }    
}

login(['sunny','rainy','cloudy','sunny','not sunny']);