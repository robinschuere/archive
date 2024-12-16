# Board structure

I created 2 boards for working on feature requests and their stories.

## Feature Board

|To Approve|Approved|In Analysis|Analysed|In Technical Review|To Refine|Refined|Active|Validate|Demo|Closed (Canceled, Completed)|
|--|--|--|--|--|--|--|--|--|--|--|

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

## Simplified Story board

|New|Active|Validate|Validated|Deployed|To Demo|Closed (Completed, Canceled)|
|--|--|--|--|--|--|--|

- New: A story is ready to be taken up
  - a Developer changes the status to `Active` as soon as they start working on it.
- Active: A story is actively being worked on
  - a Developer changes the status to `Validate` as soon as they completed the story.
- Validate: A story was completed and is ready to be validated
  - The PO changes the status to `Validated` as soon as they validated the story, if not, the story is placed back into `Active`.
- Validated: A story was validated and is ready to be deployed
  - a Developer starts the pipeline to merge the branch to the main branch and into the correct environments.
  - A Developer changes the status to `Deployed`.
- Deployed: A story was merged to main branch and deployed to the correct environments
  - the Scrum Master places the story on the demo agenda and changes the status to `To Demo`.
- To Demo: A story was demo'ed for the team
  - the PO changes the status to `Completed`.
- Closed: A story final state for completion or abandonment.

What If ...

A story is abandoned during the Active state

- The story status is updated to Canceled
