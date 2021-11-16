const fs = require('fs').promises;
console.log(__dirname, `ditr`)
const add = async(data) => {
    const addContacts = await fs.appendFile(`${__dirname}/contacts.json`, data);
    return addContacts;
}
module.exports = add;