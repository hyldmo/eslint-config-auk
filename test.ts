// Example interface
interface User {
	id: number
	name: string
	email?: string
}

// Function with type annotations
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const fetchUser = async (id: number): Promise<User> => {
	// Unused variable (ESLint should catch this)
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const temp = 'test'

	// Missing return type annotation
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	function helper() {
		return { id: 1, name: 'test' }
	}

	// Unnecessary template literal (ESLint should catch this)
	const name = `John`

	return {
		id,
		name,
		// Property might be undefined
		email: undefined
	}
}

// Class with accessibility modifiers
export class UserService {
	private users: User[] = []

	public async addUser(user: User) {
		// Console log (ESLint might warn about this)
		// eslint-disable-next-line no-console
		console.log(user)
		this.users.push(user)
	}

	// Method missing return type
	public getUsers() {
		return this.users
	}
}

// Unused export (ESLint should catch this)
export const unused = 'unused'
