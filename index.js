require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT;
const githubData = {
  login: "Agrawal-Ayush-009",
  id: 118624479,
  node_id: "U_kgDOBxIQ3w",
  avatar_url: "https://avatars.githubusercontent.com/u/118624479?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/Agrawal-Ayush-009",
  html_url: "https://github.com/Agrawal-Ayush-009",
  followers_url: "https://api.github.com/users/Agrawal-Ayush-009/followers",
  following_url:
    "https://api.github.com/users/Agrawal-Ayush-009/following{/other_user}",
  gists_url: "https://api.github.com/users/Agrawal-Ayush-009/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/Agrawal-Ayush-009/starred{/owner}{/repo}",
  subscriptions_url:
    "https://api.github.com/users/Agrawal-Ayush-009/subscriptions",
  organizations_url: "https://api.github.com/users/Agrawal-Ayush-009/orgs",
  repos_url: "https://api.github.com/users/Agrawal-Ayush-009/repos",
  events_url: "https://api.github.com/users/Agrawal-Ayush-009/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/Agrawal-Ayush-009/received_events",
  type: "User",
  site_admin: false,
  name: "Ayush Agrawal",
  company: null,
  blog: "",
  location: "Noida, Uttar Pradesh",
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 19,
  public_gists: 0,
  followers: 3,
  following: 2,
  created_at: "2022-11-19T16:37:21Z",
  updated_at: "2024-04-30T14:11:38Z",
};

const uiData = {
  type: "LinearLayout",
  properties: {
    orientation: "vertical",
  },
  children: [
    {
      type: "TextView",
      properties: {
        text: "Hello, This is Ayush!",
        textColor: "#ff0000",
      },
    },
    {
      type: "Button",
      properties: {
        text: "Click Me",
      },
    },
  ],
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("its_ayushh_here");
});

app.get("/ayush", (req, res) => {
  res.send("<h1> This is Ayush Agrawal's Route </h1>");
});

app.get("/github", (req, res) => {
  res.json(githubData);
});

app.get("/ui", (req, res) => {
  res.json(uiData);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.list;
