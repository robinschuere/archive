# Board structure

I created 2 boards for working on feature requests and their stories.

## Feature Board

|To Approve|Approved|In Analysis|Analysed|In Technical Review|To Refine|Refined|Active|To Validate|Validating|Demo|Closed (Canceled, Completed)|
|--|--|--|--|--|--|--|--|--|--|--|--|

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
  - As soon as all the stories have a completed state, the status of the feature should be changed to `To Validate`. Should be automated!
- To Validate: A feature that has been worked on but still needs to be validated by the stakeholders and PO.
  - PO changes the status to `Validating` to validate the complete feature.
- Validating: A feature is being validated
  - Should the feature not be completed (Not enough depth of the story was provided or something else).
    - PO creates session for extra story refinement
    - The team creates new stories to be made with regards to the feature.
    - After the session, the PO changes the status of the feature to `Active`.
  - Should the feature be completed (True Definition of Done).
    - PO creates an appointment for a Demo to all stakeholders and scrummees
    - PO changes the status to `To Demo`.
- To Demo: A feature is ready for demo for the different stakeholders and Scrummees
  - When the feature was completed, but new insights were learned, the status should be changed to `Completed` and a new Feature request should be made.
  - When the feature was almost complete, but the stakeholders miss something, the missing topics should be re-analysed as to complete the feature. The feature status changes to `Approved` and should be  picked up as soon as possible by an analyst, preferably the one that did the first analysis.
- Closed: A feature final state for completion or abandonment.

What If ...

A feature request is abandoned during the Active state:

- All stories should be cancelled
- The feature status is updated to Canceled
- A new feature named rollback feature X should be made to do necessary code cleanup whenever possible.

A feature request is updated during the Active state:

- The update is immediatly communicated to the Scrummees!
- Stories that are not to be picked up are to be put on-hold as the analysis document is being updated.  
- The analysis document is updated and refinement sessions are held to communicate the changes, stories that no longer matter are removed and new stories are refined and added to the feature.

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

## Extended Story board

|New|In Development|Merged|In Test|Tested|Validating|Validated|To Demo|To Deploy|Deployed|Closed (Completed, Canceled)|
|--|--|--|--|--|--|--|--|--|--|--|

- New: A story is ready to be taken up
  - a Developer changes the status to `Active` as soon as they start working on it.
- In Development: A story is actively being worked on
  - a Developer changes the status to `Merged` as soon as the the story is Peer-reviewed and merged to the destination branch.
- Merged: A story was merged into a specific branch and is ready to be tested
  - The tester changes the status to `To Test` as soon as they start testing the story.
- In Test: A story is currently being tested
  - The tester changes the status to `Tested` as soon as they completed their job.
- Tested: A story was tested and is ready to be validated
  - The PO changes the status to `To Validate` as soon as they start validating the story.
- Validating: A story is being validated
  - The PO changes the status to `Validated`.
- Validated: A story was validated and is ready to be demod
  - The PO changes the status to `To Demo`.
- To Demo: A story is ready to be demo'ed to the team
  - the Scrum Master adds the story to the demo agenda.
  - After the demo, the PO changes the status to `To Deploy`
- To Deploy: A story is ready to be deployed
  - As soon as the next release cycle begins, the code is deployed to the correct environment
- Deployed: A story was deployed to the correct environments
  - the PO Changes the status to `Completed`.
- Closed: A story final state for completion or abandonment.

What If ...

A story is abandoned during the Active state

- The story status is updated to Canceled

