import { useEffect, useState } from "react"
import { Customer } from "./Customer"
import "./Customer.css"

export const CustomerList = () => {
    const [Customers, setCustomers] = useState([])

    useEffect(
        () => {
         fetch(`http://localhost:8088/users?isStaff=false`)
            .then(response => response.json())
            .then((customerArray) => {
                setCustomers(customerArray)
            })
        },
        []
    )
    return <article className="customers">
        {
            Customers.map(customer => <Customer id={customer.id} fullName={customer.fullName} email={customer.email}/>)
                
           
        }
    </article>
}