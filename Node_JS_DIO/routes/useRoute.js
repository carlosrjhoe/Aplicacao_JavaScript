const fs = require('fs');
const { join } = require('path');

const filePath = join(__dirname, 'user.json');
const getUser = () => {
  const data = fs.existsSync(filePath)
  ? fs.readFileSync(filePath)
  : [];

  try{
    return JSON.parse(data);
  } catch (erro) {
    return [];
  }
}

const saveUser = (user) => fs.writeFileSync(filePath, JSON.stringify(users, null, '/t'))
const useRoute = (app) => {
  app.route('/users/:id?')
    .get((req, res) => {
      const users = getUser()
      res.send({ users })
    })
}

module.exports = useRoute