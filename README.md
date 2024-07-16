
## ReactLibraryManagement

Brief description or introduction to your project

### Features
 #### Login Authentication and Authorization:
    Implement JWT token-based authentication.
    Users can log in with credentials and receive a JWT token.
    Differentiate between regular users and admin users based on roles.
 #### Books:
    Create: Admin users can add new books to the library.
    List: Display a list of all books in the library.
    Edit: Admin users can update book details.
    Delete: Admin users can remove books from the library.
 #### Users:
    Add Users: Admin users can add new users.
    List Users: Display a list of all users.
 #### Admin Users:
    Add Admin Users: Super admin users can add new admin users.
    List Admin Users: Display a list of all admin users.
 #### Transactions:
    Add Transaction: Users can borrow or return books, which are recorded as transactions.
    List Transaction History: Users can view their transaction history.
    
### Technologies Used
  Node.js
  Express.js
  MongoDB 
  JWT (JSON Web Tokens) for authentication and authorization


#### Setup Instructions

### Prerequisites

- Node.js installed

### Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd ReactLibraryManagement
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

### Running the Application

1. **Start the development server:**

   ```bash
   npm start
   ```


   The application should now be running locally on `http://localhost:3000`.
### Login for user and admin

  #### only add username for user privilage
    username: user1
  #### for admin privilage
    username: admin1
    password: admin1pass
