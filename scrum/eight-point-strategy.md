# The Eight Point Estimation Strategy

The eight point strategy is a personal interpretation of how to do Complex or Gravitas story splitting combined with estimations into smaller and more easily to work on stories.
As I want to highlight how this is related to features, a small explanation is also represented here.

Some pointers of what you should know:

- I did not invent this Strategy on my own, I combined different things.
- A feature is a stakeholder request that has to be created to give more value to a project.
- A story is a Scrummee request for a functional piece of the feature which on its own has to bring value to the project.
- A story is linked to 1 feature.
- A feature is linked to many stories.
- Scrummees are members of a scrum team.
  - Scrum Master
  - PO  
  - Analysts
  - Developers (Architect, Tech Leads, Devs)
 
8-point estimation is a relative sizing technique used in Scrum Agile to estimate the complexity or effort required to complete a product backlog item (PBI) or user story. It involves assigning a numerical value, typically between 0 and 8, to represent the relative size or complexity of the task.

## Preparing the stories:

After a feature has been given to a PO, a high-end analysis should be created to give a first impression of the complexity of the feature. Afterwards, a technical review of this analysis is necessary to attain all technical requirements of the feature. This to define all necessary technical equipment.
Afterwards, the analysis should be discussed with the Scrummees as to create the refine the feature into different stories.

### Tagging Complexity, Gravity or both

During my time as a developer, I felt that a lot of my job was either heavily linked to Complexity, Gravity or both.

For instance, you have a truck with different payloads, meaning, each payload has to be seperately handled, these handlers have their own interests and functionalities, so we can speak here of a high complexity.
You could also have a truck filled with 10000 payloads of the same type, meaning that the complexity isn't as high, but the workload is.

So with regards to the example, I feel that stories should receive a tag of complex, gravitas or both.

## A story, one day

An important rule that accomplishes the Eight Point Estimation Strategy is: `A Story should always be completable in one day!`.
This sounds very harsch, and by no means should be taken as a means to monitor Developers. The reasoning behind this is to make the life of the developer easier. By setting a hard requirement on, a story has to be completed in one day, means that the Developer has 1 day for each story to complete.
It will generate some things:

- Relative sizing based on comparing similar tasks without estimating absolute time
- Values make sense as they are linked to something
- shared understanding of values
- velocity tracking can be setup after a period of time.

But, it can also generate some mistakes:

- A story point is an hour

## 1 - 3 - 5 - 8 - 13?

The numbers you see here are part of the fibonacci sequence without specific numbers, 0, 0.5, 2, etc are missing from this equation as they are easily

### 1

A 1 story estimation means that we talk about something that is almost not complex and has a small gravity.

Examples are:

- Update a FeatureFlag
- Add config to a certain environment
- change the color of a generic button
- ...

### 3

A 3 story estimation means that we talk about something that has a bit more complexity or|and some gravity.

Examples are: 

- Create an API endpoint to do a small database update
- Update a form functionality
- Add a specific service
- ...

### 5

A 5 story estimation means that we talk about something that has a complexity or gravity.

Examples are: 

- Create API endpoints with complete CRUD functionality
- Create a form
- Create a job
- ...

### 8

An 8 story estimation means that we talk about something that has a a lot of complexity or gravity.

Examples are: 

- Create API endpoints with complex structure
- Use a new library for the first time
- ...

### 13

A 13 story estimation means that we talk about something that has a a lot of complexity or gravity and probably cannot be completed in one day. Perhaps some extra analysis (functional or technical) is necessary to better estimate the story.

Examples are:

- Create API endpoints with complex structure
- A specific Frontend functionality has to be added to complete the story
- ...

As soon as a 13 estimation is given, the story should be taken up for simplification or whenever the gravity of the ticket is to high, be split into parts so that the developer is still able to complete one story.

### Playthrough example

- can the story be completed in one day?
  - No: Value 13
  - Yes: does the story hold both tags of complexity and gravity?
    - Yes: Value 13
    - No: How Complex|Gravitas is the story
      - very: Value 13
      - Somewhat: Value 1, 3, 5, 8 or 13 can be discussed.


## Board structure

### Feature Board

|To Approve|Approved|In Analysis|Analysed|In Technical Review|To Refine|Refined|Active|Validate|Demo|Closed (Canceled, Completed)|
|--|--|--|--|--|--|--|--|--|--|--|

We define the next columns for a feature:

- To Approve: A new feature is requested by a stakeholder and should be picked up by the PO
  - Scrum master decides a timeframe to consult PO, Stakeholders and Scrummees to approve the feature
    - When approved, the PO changes the status to `Approved`.
    - When disapproved, the PO Changes the status to `Canceled`.
- Approved: A feature was approved and is now ready for analysation
  - An analyst picks up the feature.
    - Analyst changes the status to `In Analysis`.
- In Analysis: A feature is in analysis to get the complete view of the feature.
  - An analyst is analysing the feature and processes the feature and what is necessary
    - After the analysis is completed, the analyst changes the status to `Analysed`
- Analysed: A feature is analysed and can be picked-up by an architect or lead to start the technical review
  - The PO discusses with the architect and analyst what the feature is about and asks the do a technical analysis
  - An architect picks up the feature
    - Architect changes the status to `In Technical Review`.
- In Technical Review: A feature is in a technical analysis to discover the technical requirements
  - An architect or team lead is discovering all technical requirements
    - After the analysis is completed, the architect changes the status of the feature to `To Refine`.
- To Refine: A feature is ready to be refined into smaller stories.
  - PO creates session for story refinement.
  - The team creates new stories to be made with regards to the feature.
  - After the session, the PO changes the status of the feature to `Refined`.
- Refined: A feature was refined in stories.
  - As soon as one of these stories gets a working status, the status of the feature should be changed to `Active`. Should be automated!
- Active: A feature is being actively worked on.
  - As soon as all the stories have a completed state, the status of the feature should be changed to `Validate`. Should be automated!
- Validate: A feature that has been worked on but still needs to be validated by the stakeholders and PO.
  - Should the feature not be completed (Not enough depth of the story was provided or something else).
    - PO creates session for story refinement
    - The team creates new stories to be made with regards to the feature.
    - After the session, the PO changes the status of the feature to `Active`.
  - Should the feature be completed (True Definition of Done).
    - PO creates an appointment for a Demo to all stakeholders and scrummees
    - PO changes the status to `To Demo`.
- To Demo: A feature is shown through a demo to the different stakeholders and Scrummees
  - PO changes the status to `Completed`.
- Closed: A feature final state for completion or abandonment.

What If ...

A feature request is abandoned during the Active state:

- All stories should be cancelled
- The feature status is updated to Canceled
- A new feature named rollback feature X should be made to do necessary code cleanup whenever possible.

### Story board

|New|Active|Validate|Validated|Deployed|Demo|Closed (Completed, Canceled)|
|--|--|--|--|--|--|--|

We define the next columns for a story:

- New: A story is ready to be taken up
- Active: A story is actively being worked on
- Validate: A story was completed and is ready to be validated
- Validated: A story was validated and is ready to be deployed
- Deployed: A story was merged to main branch and deployed to the correct environments
- Demo: A story was demo'ed for the team
- Closed: A story final state for completion or abandonment.

What If ...

A story is abandoned during the Active state

- The story status is updated to Canceled
