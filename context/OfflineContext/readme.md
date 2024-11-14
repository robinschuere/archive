!Disclaimer!
The code in this folder was never tested!

This folder has 3 files to maintain an OfflineContext.

  - OfflineContext.tsx which holds all information about the reducer, provider, context and localstorage logic
  - types.d.ts which holds all types information
  - syncer which holds all information about how the data is synced and a default wrapper for a default fallback mechanism.

The Provider is wrapped around all necessary components that should have offline behaviour.
Child components should derive the dispatch event from the useOfflineContext whenever necessary to update the localStorage.
Wrapped actions are provided which will store the values inside the localStorage whenever it is not possible to update the values whenever necessary.

What is not handled

  - A complete sync process to place offline values next to online values.
