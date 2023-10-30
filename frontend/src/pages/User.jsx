import { AccountHeader, Account } from '../components'
//import { useSelector } from 'react-redux'

export { User }

function User() {
	//const { userProfile } = useSelector((state) => state.auth)
	
	return (
		<main className="main bg-dark">
			<AccountHeader
				firstName="jack"
				lastName="mayol"
			/>
			<h2 className="sr-only">Accounts</h2>
			<Account 
				accountType="Checking"
				accountNumber="x8349"
				amount="2,082.79"
				description="Available"
			/>
			<Account 
				accountType="Savings"
				accountNumber="x6712"
				amount="10,928.42"
				description="Available"
			/>
			<Account 
				accountType="Credit Card"
				accountNumber="x8349"
				amount="184.30"
				description="Current"
			/>
		</main>
	)
}