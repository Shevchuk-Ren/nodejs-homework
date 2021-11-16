const listContacts = require('./listContacts');
const fs = require('fs').promises;


const contactsPath = require('./contactPath')

async function updateById(name, email, phone, contactId) {
    const contacts = await listContacts();
   
    const result = contacts.findIndex(contact => contact.id === contactId);

   
 
    if (result === -1) {
        return null;
    };
     console.log(result)
    contacts[result] = {
      name, email, phone, contactId
    }
    await fs.writeFile(contactsPath, JSON.stringify(contacts));
    return contacts[result]
}

module.exports = updateById;