# Environment branching techniques

Or, the issue with starting from one main branch as a whole and never splitting it up.

## The one-branch-rules-all rule

![Single Branch](../images/single_branch.png)

This could be an exaggerated image. What we see here is a single point of entry that is the driven force between all our environments. This however will present us with a not-so-nice issue.

`We always deploy a snapshot of the main branch which becomes obsolete as soon as a new code is added to the main branch.`

In most teams, this setup presents us with some disadvantages:

- Cherry picking techniques have to be used to fix certain environments.
- Features, bugfixes, hotfixes and deprecated code are all the same from a process point of view.
- In bigger teams, this creates a volatile developer environment. (Sometimes hostile envrionments)
- Teams are depending on the same branch
- Teams are working on the same branch

## Splitting main up in designated branches

![Multiple Environment Branch](../images/environment_branches.png)

The idea behind this technique is that each environment gets its own dedicated branch on which developers can work.

### Necessary Branches

Some branches are more necessary then others:

|Branch|Environment|Who
|--|--|--|
|development|development|developers
|test|test|test engineers
|main|production|users

### Branches regarding more specific teams

|branch|environment|Who
|--|--|--|
|qa|qa|QA-teams
|uat|uat|UAT teams
|demo|demo|Sales-teams
|master|pre-production|anyone except users
|master_[release_version]|production|users

This also presents us with some disadvantages

- Upgrading a branch must always happen under a strict form of communication.
- strict merge strategies per branch
- More repositories
- More costs

### Merging strategies
|what|environment|on which branch|merge to|when
|--|--|--|--|--|
|new feature|*|dev|test|all tests are green
|bugfix|*|dev|test|all tests are green
|hotfix|*|the branch where it broke|all lower branches (*)|hotfix was tested on that branch
