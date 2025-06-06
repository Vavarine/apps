// DO NOT EDIT. This file is generated by deco.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $$$$$$$$$0 from "./actions/createContact.ts";
import * as $$$$$$$$$1 from "./actions/deleteContact.ts";
import * as $$$$$$$$$2 from "./actions/updateContact.ts";
import * as $$$0 from "./loaders/getContact.ts";
import * as $$$1 from "./loaders/getSegmentationContacts.ts";
import * as $$$2 from "./loaders/getSegmentations.ts";

const manifest = {
  "loaders": {
    "rd-station-marketing/loaders/getContact.ts": $$$0,
    "rd-station-marketing/loaders/getSegmentationContacts.ts": $$$1,
    "rd-station-marketing/loaders/getSegmentations.ts": $$$2,
  },
  "actions": {
    "rd-station-marketing/actions/createContact.ts": $$$$$$$$$0,
    "rd-station-marketing/actions/deleteContact.ts": $$$$$$$$$1,
    "rd-station-marketing/actions/updateContact.ts": $$$$$$$$$2,
  },
  "name": "rd-station-marketing",
  "baseUrl": import.meta.url,
};

export type Manifest = typeof manifest;

export default manifest;
