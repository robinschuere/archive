# The Eight Point Estimation Strategy

The eight point strategy is a personal interpretation of how to do story splitting into smaller stories with a simple estimation strategy.

## What you should know:

- I did not invent this on my own, I combined different things and it is perfectly possible something similar already exists and is used.
- A feature is a stakeholder request that has to be created to give more value to a project or product.
- A story is a Scrummee request for a functional piece of the feature which on its own has to bring value to the project. A story is time dependant as it has to be completed during a sprint.
- A Spike is a Scrummee request to increase value linked to a feature, but remains a separate track inside Scrum as it is more time dependant then a Story. It can envelop multiple sprints.
- A Story is linked to 1 feature.
- A Spike is linked to 1 feature.
- A Feature is linked to many stories, and linked to 1 Epic.
- A Refinement is a Scrum tradition to gain knowledge of a feature or story and can be used to estimate story points.
- Scrummees are members of a scrum team.
  - Scrum Master
  - Product Owner (PO)
  - Analysts
  - Developers (Architect, Tech Leads, Devs, QA)
 
IMPORTANT:
- However you want to use this strategy, make sure your team understands what is is, and that they have an equal say in an estimation proposal. No ones vote is heavier!

## Per Google

8-point estimation is a relative sizing technique used in Scrum Agile to estimate the complexity or effort required to complete a product backlog item (PBI) or user story. It involves assigning a numerical value, typically between 0 and 8, to represent the relative size or complexity of the task.

## Preparing the stories:

- Customer, User, or Backlog idea requests a functionality
- PO captures this functionality and moves it into a feature
- High-end analysis
- Analysis is discussed during Story Refinement
- Scrummees decide if extra technical analysis is required
- Scrummees split the feature into stories (and spikes whenever necessary)

## Definining Estimations Tags: Is is complex, is it a lot (or both)

During my time as a developer, I felt that a lot of my stories revolved around doing something complex or doing something a lot. For this I started working with 2 values namely Complexity and Weight.

For instance, you have a truck with different payloads, meaning, each payload has to be seperately handled, these handlers have their own interests and functionalities, so we can speak here of a high complexity.
You could also have a truck filled with 10000 payloads of the same type, meaning that the complexity isn't as high, but the workload is.

So with regards to the example, I feel that stories should receive a tag regarding the Complexity and a tag regarding the Weight.

### Complexity Tags

- Simple
- Somewhat Complex
- Complex

### Weight Tags

- Light
- Medium
- Heavy

## Defining another rule: A story, one day

An important rule that I find necessary in the Eight Point Estimation Strategy is: `A Story should always be completable in one day!`.
This sounds very harsch, but the reasoning behind this is to make the life of the developer easier. By setting a hard requirement on, a story has to be completed in one day, it gives more weight to the Refinement process. Developers have to think thoroughly about the requirements of a story and have to make sure that it is in fact completable in one day. If it isn't, the story has to be split up or pulled into a spike.

## Estimating with Fibonacci? 1 - (2) - 3 - 5 - 8 - 13?

The numbers you see here are part of the fibonacci sequence without some numbers.

### Based on

- Relative sizing based on comparing similar tasks without estimating absolute time
- Values make sense as they are linked to something
- shared understanding of values
- velocity tracking can be setup after a period of time.
- Relative sizing cannot be merged to granularity.

BEWARE for the common mistakes

- A story point suddenly is one hour?
- Why does this task of 1 point takes more time then this task of 5 points?

### 1 - (2)

A 1 - (2) story estimation means that we talk about something that is Simple and is Light.

Examples are:

- Update a FeatureFlag
- Add config to a certain environment
- change the color of a generic button
- write a test to see if a button is visible on a page
- ...

### 3

A 3 story estimation means that we talk about something that is Somewhat Complex or has Medium Weight.

Examples are: 

- Create an API endpoint to do a small database update
- Update a form functionality
- Add a specific service
- ...

### 5

A 5 story estimation means that we talk about something that is Somewhat Complex and has Medium Weight.

Examples are: 

- Create API endpoints with complete CRUD functionality
- Create a form
- Create a job
- ...

### 8

An 8 story estimation means that we talk about something that has is Complex or | and is Heavy in Weight

Examples are: 

- Create API endpoints with complex structure or calculation
- Use a new library for the first time
- ...

### 13

A 13 story estimation means that we talk about something that is Complex and is Heavy and from which we think it is impossible to do in one day.
Examples are:

- Create API endpoints with complex structure and calculation models
- A specific Frontend functionality has to be added to complete the story
- Update a Frontend component and update all relying components to work with it.

As soon as a 13 estimation is given, the story should be taken up for simplification in complexity or weight, and be split into smaller stories.

If, after discussing, no concessus is to be found to do the request in a story, we opt-out of the story track and create a spike to take time to understand what is requested, take time to understand how to build it and take time to investigate.

### Playthrough example

- can the story be completed in one day?
  - No: Value 13
  - Yes: How does the story translate to Complexity and Weight?
    - Complex and heavy: Value 13
    - Complex != heavy: How Complex|Heavy is the story
      - very: Value 13
      - Somewhat: Value 1, 3, 5, 8 or 13 can be discussed.
     
## Analysis, Development and Testing track

The Eight Point Strategy can be used during a sprint by developers inside a Refinement meeting. However, this estimation does not take into account that during the sprint, the story should undergo a functional review and or a testing cycle. A possible solution would be to add tasks and do the estimations on each task. The status of the Story then tells who has to start on a task.

- Estimation (DEV): X Points
- Estimation (FUNC): Y Points
- Estimation (TEST): Z Points

This is important because we can never imply that one roles work an a story is as complex as another role.

## Conclusion

The Eight Point Strategy is a Relative Sizing Technique to estimate Stories. We can use this strategy to split features and user stories into smaller testable stories. 
We apply specific rules:

- A Story should always be completed in one day!
- A feature should have a functional analysis before the feature is refined into smaller stories.
- Each story should receive a tag regarding Complexity and Weight. This will make the estimation part easier.
- If a 13 point estimation is given, the Scrummees should split the story into smaller pieces.
- If different roles have to work on the story during the sprint, different estimations can be made for each role and be placed on the story.
- Requests that supercede the rule of completable in one day should be elevated to a Spike. (Exceptionally)
