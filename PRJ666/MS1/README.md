## **Milestone 1: User Registration and Authentication**

- ![Duration](https://img.shields.io/badge/⏳%20Duration-Sept.%205,%202023%20--%20Sept.%2027,%202023-blue)
- ![Label](https://img.shields.io/badge/📖%20Label-User%20Registration%20and%20Authentication-blue)
- ![Deadline](https://img.shields.io/badge/⏰%20Deadline-Sept.%2027,%202023-red)
- ![Buffer](https://img.shields.io/badge/⌛%20Buffer-Approximately%201%20week-brightgreen)

### **Issue 1: User Registration API**

**User Story**: As a new user, I want to be able to create an account on the TaskMaster platform, so I can start managing my tasks.

**Description**: This part involves implementing the User Registration API, which allows users to create accounts by providing their information.

**Acceptance Criteria**:

- [ ] Users can access the registration page from the login page.
- [ ] Users must provide a valid email address, unique username, and strong password during registration.
- [ ] Passwords are securely hashed before storage.
- [ ] After successful registration, users receive a confirmation email with a verification link.
- [ ] Users can click the verification link to activate their accounts.

**Testing**:

- [ ] Test user registration with valid and invalid inputs.
- [ ] Verify that user data is stored securely.
- [ ] Confirm that verification emails are sent and accounts are activated upon clicking the link.

#### Subtasks:

1. [ ] Create User Model
2. [ ] Implement User Registration API

### **Issue 2: User Authentication API**

**User Story**: As a registered user, I want to be able to log in to the TaskMaster platform securely to access my tasks.

**Description**: This part involves implementing the User Authentication API, allowing registered users to log in securely.

**Acceptance Criteria**:

- [ ] Users can access the login page from the homepage.
- [ ] Users must provide their registered email and password to log in.
- [ ] Passwords are securely verified during the login process.
- [ ] Successful login redirects users to their dashboard.

**Testing**:

- [ ] Test user login with valid and invalid credentials.
- [ ] Verify that users are securely authenticated.
- [ ] Confirm that successful login redirects to the correct page.

#### Subtasks:

1. [ ] Implement User Authentication API

### **Issue 3: User Profile Management**

**User Story**: As a user, I want to be able to view and update my profile information.

**Description**: This part involves creating the User Profile View and implementing the User Profile Update API.

**Acceptance Criteria**:

- [ ] Users can access their profile from the dashboard.
- [ ] Users can view their profile details, including username and email.
- [ ] Users can update their profile information, including changing their username and email.
- [ ] Changes to the profile information are reflected in the database.

**Testing**:

- [ ] Test user profile viewing and updating.
- [ ] Confirm that profile changes are saved correctly.

#### Subtasks:

1. [ ] Create User Profile View
2. [ ] Implement User Profile Update API

### **Issue 4: User Logout Functionality**

**User Story**: As a user, I want to be able to log out securely when I'm done using the platform.

**Description**: This part involves implementing the User Logout Functionality.

**Acceptance Criteria**:

- [ ] Users can log out from any page within the application.
- [ ] After logout, users are redirected to the login page.
- [ ] Users must log in again to access protected resources.

**Testing**:

- [ ] Test user logout functionality.
- [ ] Verify that users are redirected to the login page after logout.
- [ ] Confirm that users are required to log in again to access protected resources.

#### Subtasks:

1. [ ] Create User Logout Functionality
