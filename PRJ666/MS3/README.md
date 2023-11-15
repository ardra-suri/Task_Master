## **Milestone 3: Update User Interface**

- ![Duration](https://img.shields.io/badge/⏳%20Duration-Oct.%2030,%202023%20--%20Nov.%2013,%202023-blue)
- ![Label](https://img.shields.io/badge/📖%20Label-Team%20Security-blue)
- ![Deadline](https://img.shields.io/badge/⏰%20Deadline-Oct.%2013,%202023-red)
- ![Buffer](https://img.shields.io/badge/⌛%20Buffer-Approximately%201%20week-brightgreen)

### **Issue 1: Team Creation and Assignment Security**

**User Story**: As a team lead, I want to have the ability to add and assign tasks to team members only with valid emails to increase overall security of the process.

**Description**: This issue involves the updating of the Task Management Interface, providing a seamless experience for team leads to create teams and assign tasks securely.

**Acceptance Criteria**:

- [ ] Users with only valid credentials can be added into a team.
- [ ] Tasks can only be assigned by team leads to users who have already been added to the team.
- [ ] Team leads can see a list of added team members to make team assignment straightforward.

**Testing**:

- [ ] Verify that users with only valid existing credentials can be added to a team.
- [ ] Verify that users that are part of the only can be assigned tasks.

#### Subtasks:

1. [ ] Upgrade the Task Management Interface
2. [ ] Implement list of team members during task assignment

### **Issue 2: Specific Group Search**

**User Story**: As a user, I want to have the ability to search specific groups without having to scroll the list of groups on the dashboard.

**Description**: This issue involves the adding a new feature to the Collaboration Team page, providing a better experience to the user when searching for a group name.

**Acceptance Criteria**:

- [ ] User can search for a specific group by group name on the search bar.

**Testing**:

- [ ] Verify that groups can be searched by group name to be viewed separately.

#### Subtasks:

1. [ ] Upgrade the Collaboration Team Page
2. [ ] Implement search bar to search groups

### **Issue 3: Filter Tasks**

**User Story**: As a user, I want to have the ability to filter tasks by current date to stay updated on deadlines for the day.

**Description**: This issue involves the adding a new feature to the Collaboration Team page,  helping the user to filter out tasks to the current date.

**Acceptance Criteria**:

- [ ] User can filter out tasks under a team for the current date.

**Testing**:

- [ ] Verify that tasks are filtered successfully according to the current date

#### Subtasks:

1. [ ] Upgrade the Collaboration Team Page
2. [ ] Implement filter task feature

### **Issue 4: Unique Team Name Constraint - Resolution**

**User Story**: As a system administrator, I want to enforce the uniqueness of team names to prevent any potential confusion or overlap between teams.

**Description**: This issue addresses the need to implement a constraint that ensures all team names are unique within the system. This will contribute to a more organized and manageable team structure.

**Acceptance Criteria**:

- [ ] System prevents the creation of a new team with a name that already exists.
- [ ] Existing teams with duplicate names are identified and appropriately handled.

**Testing**:

- [ ] Verify that creating a new team with an existing name is not allowed.
- [ ] Verify that existing teams with duplicate names are accurately identified.

#### Subtasks:

1. [ ] Implement unique team name constraint.
2. [ ] Develop handling mechanism for teams with duplicate names.

