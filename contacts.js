const fs = require('fs').promises;

const contactsOperation = require('./db')

const { program } = require('commander');
program.version('0.0.1');





const invokeAction = async ({ action, id, name, email, phone }) => {
    
     switch (action) {

        case "list":
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
         
          case "update":
           
             const updateContact = await contactsOperation.updateById(name, email, phone, id);
             if (!updateContact) {
                 throw new Error(`Contact with ${id} not found`)
             }
             console.log(updateContact)
             break;
         
         case "remove":
             
             const deleteContact = await contactsOperation.removeContact(id);
    
             if (!deleteContact) {
                 throw new Error(`Contact with ${id} not found`)
             }
             console.log(deleteContact)
             break;
         
         default:
             
         console.warn('\x1B[31m Unknown action type!');
             break;
         
    }
}

program
    .option('-o, --action <type>', 'contacts operation')
    .option('-n, --name <type>', 'users name')
    .option('-i, --id <type>', 'users id')
    .option('-e, --email <type>', 'users email')
    .option('-p, --phone <type>', 'users phone')
    .parse(process.argv);
const option = program.opts();

// const id = 5;
// const newData = {
// name: "Baba Galamaga", email:"babagalamaga.ante@vestibul.co.uk", phone: "(007) 010-0031"
// }
// const updateData = {
// name: "Baba Gugagaga", email:"babugagaga.ante@vestibul.co.uk", phone: "(007) 011-0131"
// }
// invokeAction({ action: "list", })
// invokeAction({ action: "getById", id })
// invokeAction({ action: "add", name: newData.name, email: newData.email, phone: newData.phone})

// invokeAction({ action: "update", name: updateData.name, email: updateData.email, phone: updateData.phone, id})
// invokeAction({ action: "remove", id })

invokeAction(option);