console.log(typeof [])

const f1 = () => {
    return "function 1"
}

const f2 = () => {
    return "function 2"
}

for(let i = 0; i < 5; i=i+1) {
    console.log(i)
}

console.log(f1())

let a = {
    one: 1,
    two: "two",
    three: {
        four: "four",
    },
    five: true,
}

let b = 10

let c = true
console.log(typeof a)

console.log('Hello')

console.log("Hello")

console.log(`Hello`);

console.log("the value of b is " + b + " and the value of c is " + c + " f1 " + f1());

console.log(`the value of b is ${b} and the value of c is ${c} f1 ${f1()}`);

console.log(typeof b)


console.log(1 + "5");

console.log("1" + 5);

console.log(1 - "5");

console.log("1" - 5);

console.log("5" + 2);


console.log(1 == "1");


console.log(null == undefined);

console.log(0 * null);

console.log(undefined * 0);

console.log(null === undefined);

console.log(1 === "1");


console.log("1" === "1");

console.log(1 === 1);


let num1 = 10;

let num2 = "10";

console.log(num1 + num2);

if(typeof num2 === "string" || typeof num1 === "string") {
    console.log(Number(num1) + Number(num2))
} else {
    console.log(num1 + num2);
}

const response = {
    "login": "rahulsoibam",
    "id": 5185590,
    "node_id": "MDQ6VXNlcjUxODU1OTA=",
    "avatar_url": "https://avatars.githubusercontent.com/u/5185590?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/rahulsoibam",
    "html_url": "https://github.com/rahulsoibam",
    "followers_url": "https://api.github.com/users/rahulsoibam/followers",
    "following_url": "https://api.github.com/users/rahulsoibam/following{/other_user}",
    "gists_url": "https://api.github.com/users/rahulsoibam/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/rahulsoibam/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/rahulsoibam/subscriptions",
    "organizations_url": "https://api.github.com/users/rahulsoibam/orgs",
    "repos_url": "https://api.github.com/users/rahulsoibam/repos",
    "events_url": "https://api.github.com/users/rahulsoibam/events{/privacy}",
    "received_events_url": "https://api.github.com/users/rahulsoibam/received_events",
    "type": "User",
    "site_admin": true,
    "name": "Rahul Soibam",
    "company": null,
    "blog": "www.rahulsoibam.com",
    "location": "India",
    "email": "rahulsoibam@gmail.com",
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 626,
    "public_gists": 15,
    "followers": "21",
    "following": 59,
    "created_at": "2013-08-07T22:11:51Z",
    "updated_at": "2022-01-17T05:52:14Z"
  }

  console.log("social score: ", response.followers + response.following);

console.log(Boolean(null));


let rahulEmail = response.email || "Rahul has not specified an email"

console.log(rahulEmail);


response.site_admin && console.log("<p>Rahul is an admin</p>");

let isAdmin = (response.site_admin)? "Is an admin" : "Not an admin";

console.log(isAdmin);

let lessThanFive = (6 < 5)? "Yes" : "No";

console.log(lessThanFive);



// condition ? if condition is true, execute this: if condition is false execute this

(2 > 7) ? console.log("true") : console.log("false")