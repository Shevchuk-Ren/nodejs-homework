const fs = require('fs').promises;
const listContacts = require('./listContacts');


const contactsPath = require('./contactPath')

async function updateById(name, email, phone, contactId) {
    const contacts = await listContacts();
    const index = contacts.findIndex(contact => contact.id.toString() === contactId);

    if (index === -1) {
        return null;
    };
   
    contacts[index] = {
     id: contactId, name, email, phone, 
    }
    await fs.writeFile(contactsPath, JSON.stringify(contacts));
    return contacts[index]
}

module.exports = updateById;