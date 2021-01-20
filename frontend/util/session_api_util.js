export const signup = (userForm) => {
    return $.ajax({
        method: "POST",
        url: "/api/user/",
        data: { user: userForm }
    });
}

export const login = (userForm) => {
    return $.ajax({
        method: "POST",
        url: "/api/session/",
        data: { user: userForm }
    });
}

export const logout = () => {
    return $.ajax({
        method: "DELETE",
        url: "/api/session"
    });
}

export const exampleUser = {
    username: "firstUser",
    password: "123456",
    email: "test@test.com",
    first_name: "Appo",
    last_name: "Academio"
}

export const exampleUserLogin = {
    username: "firstUser",
    password: "123456"
}