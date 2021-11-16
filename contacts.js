// import contacts from './db/contacts.json'
const fs = require('fs').promises;
const contactsOperation = require('./db')

// const contactsOperation = require('db/contacts.json')
const invokeAction = async ({ action, id, data }) => {
    
     switch (action) {

        case "getAll":
            const contacts = await contactsOperation.getAll()
            console.log(contacts)
            break;
        
        case "add":
            await fs.appendFile(contactsOperation, data);
            break;
        
        case "replace":
            await fs.writeFile(contactsOperation, data);
            break;
    
        default:
            console.log('Unknown operation')
            break;
    }
}

invokeAction({action: "getAll", })
// const contactsOperation = async (contactsPath, action = "read", data = "") => {
//     switch (action) {

//         case "read":
//             const text = await fs.readFile(contactsPath, "utf-8");
//             console.log(text)
//             break;
        
//         case "add":
//             await fs.appendFile(contactsPath, data);
//             break;
        
//         case "replace":
//             await fs.writeFile(contactsPath, data);
//             break;
    
//         default:
//             console.log('Unknown operation')
//             break;
//     }
// };
// contactsOperation('files/file.txt', "replace", "\nЗаратустра таки сказал, я вам говорю!")
// fs.readFile('files/file.txt','utf8')
//     .then(data => console.log(data))
//     .catch(error => console.log(error.message))
// const contactsPath
// const contacts = [ "name", "Pumba"];
// // const contactsPath = require("./db/contacts.json")();
// module.exports = contacts;


/*
 * Раскомментируй и запиши значение
 * const contactsPath = ;
 */

// TODO: задокументировать каждую функцию
function listContacts() {
  // ...твой код
}

function getContactById(contactId) {
  // ...твой код
}

function removeContact(contactId) {
  // ...твой код
}

function addContact(name, email, phone) {
  // ...твой код
}