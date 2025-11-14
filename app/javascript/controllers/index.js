import { application } from "controllers/application"

import { eagerLoadControllersFrom } from "@hotwired/stimulus-loading"
eagerLoadControllersFrom("controllers", application)

console.log(application)  // should print the Stimulus application object
