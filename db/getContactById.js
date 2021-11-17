const listContacts = require('./listContacts');


async function getContactById(contactId) {
    const contacts = await listContacts();
     console.log(contactId, `id contact`)
    const result = contacts.find(item => item.id.toString() === contactId);

    if (!result) {
        return null;
    }
    return result;
}

module.exports = getContactById;