const login = (data) =>
  fetch("http://10.254.61.24:8095/api/login", {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((res) => res.json()) 
    .then( 
      (response) => {
        console.log(response);
        if (response.access_token) {
          localStorage.setItem(
            "userInfo",
            JSON.stringify({
              username: response.username,
              roles: response.roles,
              access_token: response.access_token,
            })
          );
        }
        return response;
      },
      (error) => {
        console.log(error);
        return error;
      }
    );

const logout = () => {
  localStorage.removeItem("userInfo");
};

const LoginService = {
  login,
  logout,
};

export default LoginService;
