/*
 * Complete the TODO items below
 *               FINISHED!!!
 */
const users = [
  {
    name: 'zach',
    email: 'zach@codeup.com',
    languages: ['javascript', 'bash']
  },
  {
    name: 'ryan',
    email: 'ryan@codeup.com',
    languages: ['clojure', 'javascript']
  },
  {
    name: 'luis',
    email: 'luis@codeup.com',
    languages: ['java', 'scala', 'php']
  },
  {
    name: 'fernando',
    email: 'fernando@codeup.com',
    languages: ['java', 'php', 'sql']
  },
  {
    name: 'justin',
    email: 'justin@codeup.com',
    languages: ['html', 'css', 'javascript', 'php']
  }
];

// declared as `const`
const name = 'Joe Garcia';
const email = 'fakeemail@gmail.com';
const languages = ["java", "javascript", "python"];

users.push({
  name,
  email,
  languages
});

let emails = [];
let names = [];

users.forEach( user => {
  return emails.push(user.email);
});

users.forEach( user => {
  return names.push(user.name);
});

let developers = [];
users.forEach(function(user) {
  const {name, email, languages} = user;

  developers.push(`${name}'s email is ${email}. ${name} knows ${languages.join(', ')}`);
});

let list = '<ul>';

for (let developer of developers){
  list += `<li>${developer}</li>`;
}
list += '</ul>';
