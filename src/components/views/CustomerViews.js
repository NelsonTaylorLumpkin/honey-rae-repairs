import { Outlet, Route, Routes } from "react-router-dom"
import { TicketForm } from "../tickets/TicketForm"
import { TicketContainer } from "../tickets/TicketContainer"
import { CustomerList } from "../customers/CustomerList"
import { CustomerDetails } from "../customers/CustomerDetails"

export const CustomerViews = () => {
	return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>Honey Rae Repair Shop</h1>
                    <div>Your one-stop-shop to get all your electronics fixed</div>

                    <Outlet />
                </>
            }>

                <Route path="tickets" element={ <TicketContainer /> } />
                
				<Route path="ticket/create" element={ <TicketForm /> } />
                <Route path="customers" element={ <CustomerList /> } />
                <Route path="customers/:customerId" element={ <CustomerDetails/> } />
			
            </Route>
        </Routes>
    )
}
