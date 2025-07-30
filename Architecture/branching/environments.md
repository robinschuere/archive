# Environment branching techniques

Or, the issue with starting from one master branch as a whole and never splitting it up.

## The one-branch-rules-all rule

During early development, a developer starts with a MVP approach. Meaning that the least requirement amount of time should be used to create a minimal viable product.

Often this means that a `main` branch is created which is then moved into an environment where the developer can test his code against the real world.

This approach is in no matter bad, but it will give issues later on as more then the case represents, this first environment setup becomes the default standard for a long time.

<img width="956" height="1308" alt="image" src="https://github.com/user-attachments/assets/45448b0b-ef67-4477-bb15-4b6753b5c82b" />
