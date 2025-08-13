# The Eight Point Estimation Strategy

The eight point strategy is a personal interpretation of how to estimations based on a simplified Fibonacci sequence while doing Story Refinements.

## What you should know:

- I did not invent this on my own, I combined different things and it is perfectly possible something similar already exists and is used.
- You should know what Scrum is (or have some experience with it)
- You should know what the difference roles in Scrum are (Scrum specific or Company specific)

## But, we have to agree on:
- The Members of a Scrum Team (Scrummees) are:
  - Scrum Master
  - Product Owner (PO)
  - Developers (Architect, Analysts, Tech Leads, Devs, QA, ...)
- Stakeholder request functionalities to give more value to a product.
  - A Stakeholder can be a User or Scrummee
- A Feature can have many stories and spikes
- A story is a Scrummee request for a functional piece of a feature which on its own has to bring value to the project.
  - A story is time dependant and has to be completed during a sprint.
  - A Story is linked to 1 feature.
- A Spike is a Scrummee request for a functional piece of a feature which on its own has to bring value to the project.
  - A Spike is time dependant and can envelop many sprints.
  - A Spike is linked to 1 feature.
- A Refinement is a way to gain knowledge of a feature request
  - it is used to discuss the feature and or analysis
  - it is used to split the feature up in stories and or spikes
  - it is used to define an estimation on the stories and or spikes
  
IMPORTANT:
- However you want to use this strategy, make sure your team agrees on this list what is is, and that they have an equal say in an estimation proposal. No ones vote is heavier!

## Per Google

8-point estimation is a relative sizing technique used in Scrum Agile to estimate the complexity or effort required to complete a product backlog item (PBI) or user story. It involves assigning a numerical value, typically between 0 and 8, to represent the relative size or complexity of the task.

## Preparing the stories:

- Customer, User, or Backlog idea requests a functionality
- PO captures this functionality and moves it into a feature
- High-end analysis
- Analysis is discussed during Story Refinement
- Scrummees decide if extra technical analysis is required
- Scrummees split the feature into stories (and spikes whenever necessary)

## Definining a rule about Estimation Tags: Is is complex, is it a lot (or both)

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

<img width="3132" height="3024" alt="image" src="https://github.com/user-attachments/assets/33f1caa3-4403-4ab6-be3a-95ed0f749afc" />

     
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
