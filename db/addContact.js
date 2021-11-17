const { v4: uuidv4 } = require('uuid');
const fs = require('fs').promises;
const listContacts = require('./listContacts');
const contactsPath = require('./contactPath')




async function addContact(name, email, phone) {
    const contacts = await listContacts();
    const newObjContact = {
        "id": uuidv4(),
        "name": name,
        "email": email,
        "phone": phone
    };
    contacts.push(newObjContact);
    await fs.writeFile(contactsPath, JSON.stringify(contacts));
    return newObjContact;
}

module.exports = addContact;