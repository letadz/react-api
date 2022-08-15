import React from "react";

// Array Object
const contactInfo = 
[
    {name: 'Juan', phone: '+63 912 3456 789'},
    {name: 'Pedro', phone: '+63 978 9456 123'},
    {name: 'Antonio', phone: '+63 998 7654 321'}
];

const contacts = contactInfo.map((contact, index) => {
    return <li key = {index} > {contact.name}: {contact.phone}</li>
});

class ArrayList extends React.Component {
    render() {
        return (
            <div  className="container">
                <ul>
                    {contacts}
                </ul>
            </div>
        );
    }
}

export default ArrayList;