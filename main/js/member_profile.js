
    const url = "http://51.89.164.147:80/api/users/view_user/";

    const profile_username = document.querySelector('#profile_username');

    fetch ( url )
    .then (response => 
        response.json(),
        console.log(response.json())
    )
    .then (resolve => console.log(resolve));