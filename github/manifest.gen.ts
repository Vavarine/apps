// DO NOT EDIT. This file is generated by deco.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $$$$$$$$$0 from "./actions/createGist.ts";
import * as $$$$$$$$$1 from "./actions/oauth/callback.ts";
import * as $$$0 from "./loaders/getAuthenticatedUser.ts";
import * as $$$1 from "./loaders/getRepoFileContent.ts";
import * as $$$2 from "./loaders/listAuthenticatedUserRepos.ts";
import * as $$$3 from "./loaders/listPublicGists.ts";
import * as $$$4 from "./loaders/oauth/start.ts";

const manifest = {
  "loaders": {
    "github/loaders/getAuthenticatedUser.ts": $$$0,
    "github/loaders/getRepoFileContent.ts": $$$1,
    "github/loaders/listAuthenticatedUserRepos.ts": $$$2,
    "github/loaders/listPublicGists.ts": $$$3,
    "github/loaders/oauth/start.ts": $$$4,
  },
  "actions": {
    "github/actions/createGist.ts": $$$$$$$$$0,
    "github/actions/oauth/callback.ts": $$$$$$$$$1,
  },
  "name": "github",
  "baseUrl": import.meta.url,
};

export type Manifest = typeof manifest;

export default manifest;
