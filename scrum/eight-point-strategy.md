# The Eight Point Estimation Strategy

The eight point strategy is a personal interpretation of how to do Complex or Gravitas story splitting combined with estimations into smaller and more easily to work on stories.
As I want to highlight how this is related to features, a small explanation is also represented here.

Some pointers of what you should know:

- I did not invent this Strategy on my own, I combined different things and it is perfectly possible that a strategy like this already exists.
- A feature is a stakeholder request that has to be created to give more value to a project.
- A story is a Scrummee request for a functional piece of the feature which on its own has to bring value to the project.
- A story is linked to 1 feature.
- A feature is linked to many stories.
- Scrummees are members of a scrum team.
  - Scrum Master
  - PO  
  - Analysts
  - Developers (Architect, Tech Leads, Devs)
- However you want to use this strategy, make sure your team understands that they have an equal say in an estimation proposal.
 
As per google: 8-point estimation is a relative sizing technique used in Scrum Agile to estimate the complexity or effort required to complete a product backlog item (PBI) or user story. It involves assigning a numerical value, typically between 0 and 8, to represent the relative size or complexity of the task.

## Preparing the stories:

After a feature has been given to a PO, a high-end analysis should be created to give a first impression of the complexity of the feature. Afterwards, a technical review of this analysis is necessary to attain all technical requirements of the feature.
Afterwards, the analysis should be discussed with the Scrummees as to create and refine the feature into different stories.

## Tagging Complexity, Weight or both

During my time as a developer, I felt that a lot of my job was either heavily linked to Complexity, Weigth or both.

For instance, you have a truck with different payloads, meaning, each payload has to be seperately handled, these handlers have their own interests and functionalities, so we can speak here of a high complexity.
You could also have a truck filled with 10000 payloads of the same type, meaning that the complexity isn't as high, but the workload is.

So with regards to the example, I feel that stories should receive a tag regarding the complexity and a tag regarding the payload weight.
These can be written as:

- Simple
- Somewhat Complex
- Complex

And

- Light
- Medium
- Heavy

## A story, one day

An important rule that accomplishes the Eight Point Estimation Strategy is: `A Story should always be completable in one day!`.
This sounds very harsch, and by no means should be taken as a means to monitor Developers. The reasoning behind this is to make the life of the developer easier. By setting a hard requirement on, a story has to be completed in one day, means that the Developer has 1 day for each story to complete.

## 1 - 3 - 5 - 8 - 13?

The numbers you see here are part of the fibonacci sequence without some numbers.

It will generate some things:

- Relative sizing based on comparing similar tasks without estimating absolute time
- Values make sense as they are linked to something
- shared understanding of values
- velocity tracking can be setup after a period of time.
- Relative sizing cannot be merged to granularity.

But, it can also be prone to mistakes:

- A story point is an hour
- All Scrummees should have a very good understanding of what the values represent.

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

As soon as a 13 estimation is given, the story should be taken up for simplification in complexity or weight, and be split into smaller stories.

### Playthrough example

- can the story be completed in one day?
  - No: Value 13
  - Yes: How does the story translate to Complexity and Weigth?
    - Complex and heavy: Value 13
    - Complex != heavy: How Complex|Heavy is the story
      - very: Value 13
      - Somewhat: Value 1, 3, 5, 8 or 13 can be discussed.
     
## Analysis, Development and Testing track

The Eight Point Strategy can be used during a sprint by developers. However, this estimation does not take into account that during the sprint, the story should undergo a functional review and or a testing cycle. A possible solution would be to add tasks and do the estimations on each task. The status of the Story then tells who has to start on a task.

- Estimation (DEV): X Points
- Estimation (FUNC): Y Points
- Estimation (TEST): Z Points

This is important because we can never imply that one roles job an a story is as complex as another role.

## Conclusion

The Eight Point Strategy is a Relative Sizing Technique to estimate Stories. We can use this strategy to split user stories into smaller testable stories. 
We apply specific rules:

- A Story should always be completed in one day!
- A feature should have a functional and technical analysis before the feature is refined into smaller stories.
- Each story should receive a tag regarding Complexity and Weight. This will make the estimation part easier.
- A checklist can be used to shortcut the value.
- If a 13 point estimation is given, the Scrummees should split the story into smaller pieces.
- If different roles have to work on the story during the sprint, different estimations can be made for each role and be placed on the story.