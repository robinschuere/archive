# Environment branching techniques

Or, the issue with starting from one main branch as a whole and never splitting it up.

## The one-branch-rules-all rule

![Single Branch](../images/single_branch.png)

This could be an exaggerated image. What we see here is a single point of entry that is the driven force between all our environments. This however will present us with a not-so-nice issue.

`We always deploy a snapshot of the main branch which becomes obsolete as soon as a new piece of content is added to the main branch.`

In most teams, this setup presents us with a very volatile environment. Cherry picking strategies have to be added to fix certain environments while other pieces of code are not supposed to be pushed to said environment.

## Splitting main up in designated branches

![Multiple Environment Branch](../images/environment_branches.png)

The idea behind this technique is that each environment gets its own dedicated branch on which developers can work.

|branch|environment|comment
|--|--|--|
|dev|development|necessary with bigger teams and to see changes without breaking production
|test|test|necessary when test teams are independantly checking the outcomes
|qa|qa|necessary when creating QA-teams to do E2E testing and business approvals
|demo|demo|necessary when creating sales-teams to do demos
|master|production|necessary for having a production environment
|master|pre-production|necessary when having an environment that resembles the latest release
|master_[release_version]|production|necessary for having a production environment
