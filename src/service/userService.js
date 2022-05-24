import http from "./http";

const apiendpoint = "/login";
http.setToken(getToken());

const login = async (user) => {
  const { data, headers } = await http.post(apiendpoint, {
    email: user.email,
  });

  localStorage.setItem("x-auth-token", headers["x-auth-token"]);

  // explicitly set header token for SPA
  http.setToken(getToken());

  // Creating User on backend
  const { data: userData } = await http.post("/users", {
    name: user.name,
  });

  console.log(userData);

  return data;
};

const logout = () => {
  localStorage.removeItem("x-auth-token");
};

function getToken() {
  return localStorage.getItem("x-auth-token");
}

export default {
  login,
  logout,
};
