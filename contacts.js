// import contacts from './db/contacts.json'
const fs = require('fs').promises;
const contactsOperation = require('./db')

// const contactsOperation = require('db/contacts.json')
const invokeAction = async ({ action, id, name, email, phone }) => {
    
     switch (action) {

        case "get":
             const contacts = await contactsOperation.listContacts()
            console.log(contacts)
            break;
        
         case "add":
             const newData = await contactsOperation.addContact(name, email, phone)
             console.log(newData)
            break;
        
         case "getById":
             const contact = await contactsOperation.getContactById(id);
             if (!contact) {
                 throw new Error(`Contact with ${id} not found`)
             }
             console.log(contact)
             break;
         
          case "remove":
           
            //  const contact = await contactsOperation.getContactById(id);
            //  if (!contact) {
            //      throw new Error(`Contact with ${id} not found`)
            //  }
            //  console.log(contact)
             break;
         
          case "update":
           
             const updateContact = await contactsOperation.updateById(name, email, phone, id);
             if (!updateContact) {
                 throw new Error(`Contact with ${id} not found`)
             }
             console.log(updateContact)
            break;
    
        default:
            console.log('Unknown operation')
            break;
    }
}
const id = "c6f61e5e-434c-4c24-afcb-0fdfb320eea2";
const newData = {
name: "Baba Galamaga", email:"babagalamaga.ante@vestibul.co.uk", phone: "(007) 010-0031"
}
const updateData = {
name: "Baba Gugagaga", email:"babugagaga.ante@vestibul.co.uk", phone: "(007) 011-0131"
}
// invokeAction({ action: "getAll", })
// invokeAction({ action: "getContactById", id })
// invokeAction({ action: "add", name: newData.name, email: newData.email, phone: newData.phone})
// invokeAction({ action: "remove", id })
invokeAction({ action: "update", name: updateData.name, email: updateData.email, phone: updateData.phone, id})

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