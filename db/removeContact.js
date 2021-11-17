const fs = require('fs').promises;
const contactsPath = require('./contactPath')
const listContacts = require('./listContacts');

async function removeContact(contactId) {

    const contacts = await listContacts();
        const index = contacts.findIndex(contact => contact.id.toString() === contactId);

    if (index === -1) {
        return null;
    };

    const newContacts = contacts.filter((_, idx) => idx !== index);
    await fs.writeFile(contactsPath, JSON.stringify(newContacts));
    
    return contacts[index];
}

module.exports = removeContact;