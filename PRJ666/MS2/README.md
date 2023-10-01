## **Milestone 2: Task Assignment and Management**

- ![Duration](https://img.shields.io/badge/⏳%20Duration-Oct.%2002,%202023%20--%20Oct.%2016,%202023-blue)
- ![Label](https://img.shields.io/badge/📖%20Label-Task%20Assignment%20and%20Managment-blue)
- ![Deadline](https://img.shields.io/badge/⏰%20Deadline-Oct.%2016,%202023-red)
- ![Buffer](https://img.shields.io/badge/⌛%20Buffer-Approximately%201%20week-brightgreen)

### **Issue 1: Team Assignment API**

**User Story**: As a team lead, I want to have the ability to create teams for specific projects, including adding team members and defining their roles.

**Description**: This user story involves developing the Team Creation feature, enabling team leads to establish teams and configure their compositions for project collaboration.

**Acceptance Criteria**:

- [ ] Team leads can access the team creation feature from the project management interface.
- [ ] Team leads can create a new team for a specific project.
- [ ] Team leads can add team members to the created team, specifying their roles.
- [ ] Team leads can save the team configuration for future reference.
- [ ] The created team and its members are visible within the project's team management section.

**Testing**:

- [ ] Test team creation with different team compositions.
- [ ] Verify that team members are correctly added with their assigned roles.
- [ ] Ensure the saved team configurations are accessible for editing and reference.

#### Subtasks:

1. [ ] Develop Team Creation API endpoint.
2. [ ] Implement team creation functionality in the project management interface.
3. [ ] Enable team leads to add team members and assign roles.
4. [ ] Implement a mechanism to save and retrieve team configurations.
5. [ ] Ensure the created teams and their members are displayed in the project's team management section.

### **Issue 2: Task Assignment API**

**User Story**: As a project manager, I want to be able to assign tasks to team members, specifying responsibilities and deadlines.

**Description**: This part involves implementing the Task Assignment API, allowing project managers to assign tasks to specific team members.

**Acceptance Criteria**:

- [ ] Project managers can access the task assignment feature from the project dashboard.
- [ ] Project managers can select a task and assign it to a team member.
- [ ] Task assignments include responsibilities and deadlines.
- [ ] Assigned tasks are visible to the team member on their dashboard.
      
**Testing**:

- [ ] Test task assignment with different responsibilities and deadlines.
- [ ] Verify that assigned tasks are correctly displayed to team members.
      
#### Subtasks:

1. [ ] Create Task Assignment API endpoint
2. [ ] Implement task assignment functionality on the project dashboard
3. [ ] Ensure project managers can select tasks, assign responsibilities, and set deadlines
4. [ ] Verify that assigned tasks are visible to the assigned team members

### **Issue 3: Task Assignment View**

**User Story**: As a team member, I want to be able to view the tasks assigned to me with all relevant details.

**Description**: This part involves creating the Task Assignment View, allowing team members to see tasks assigned to them.

**Acceptance Criteria**:

- [ ] Team members can access their assigned tasks from their dashboard.
- [ ] Assigned tasks display task details, responsibilities, and deadlines.
- [ ] Task details are updated in real-time when changes occur.
      
**Testing**:

- [ ] Test the task assignment view for accuracy and real-time updates.
- [ ] Verify that team members can see their assigned tasks.

#### Subtasks:

1. [ ] Develop the Task Assignment View on the team member's dashboard
2. [ ] Ensure assigned tasks are listed with their details, responsibilities, and deadlines
3. [ ] Implement real-time updates of task details on the assignment view

### **Issue 4: Task Update API**

**User Story**: As a team member, I want to be able to update the tasks assigned to me, so I can reflect progress and changes.

**Description**: This part involves implementing the Task Update API, allowing team members to update task details and progress.

**Acceptance Criteria**:

- [ ] Team members can access the task update feature from their dashboard.
- [ ] Team members can edit task details, including name, description, and deadlines.
- [ ] Progress updates are reflected in real-time to project managers.

**Testing**:

- [ ] Test task updates for accuracy and real-time synchronization.
- [ ] Confirm that progress updates are visible to project managers.

#### Subtasks:

1. [ ] Create Task Update API endpoint
2. [ ] Integrate task update functionality with the team member's dashboard
3. [ ] Ensure team members can edit task details and update progress
4. [ ] Ensure progress updates are reflected in real-time to project managers
