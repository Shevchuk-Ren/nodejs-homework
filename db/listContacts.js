const fs = require('fs').promises;
const contactsPath = require('./contactPath')

// const getAll = async () => {
//     const data = await fs.readFile(contactsPath);
//     const contacts = JSON.parse(data)
//     return contacts;
// }

async function listContacts() {
   const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data)
    return contacts;
}
module.exports = listContacts;