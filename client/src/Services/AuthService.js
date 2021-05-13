// eslint-disable-next-line import/no-anonymous-default-export
export default {
  register: async (user) => {
    const res = await fetch("/user/register", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    return data;
  },
  login: async (user) => {
    const res = await fetch("/user/login", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.status !== 401) return res.json().then((data) => data);
    // We get the user data
    else return { isAuthenticated: false };
  },
  logout: async () => {
    const res = await fetch("/user/logout");
    const data = await res.json();
    return data;
  },
  delete: async (_id) => {
    const res = await fetch(`/user/${_id}`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    return data;
  },
  // Sync backend and front end
  isAuthenticated: async () => {
    const res = await fetch("/user/c/isAuthenticated");
    if (res.status !== 401) return res.json().then((data) => data);
    else return { isAuthenticated: false, user: { role: null } };
  },
};
