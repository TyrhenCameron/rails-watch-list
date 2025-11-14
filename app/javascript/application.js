// app/javascript/controllers/application.js
import { Application } from "@hotwired/stimulus"
import { eagerLoadControllersFrom } from "@hotwired/stimulus-loading"

// Start Stimulus application
const application = Application.start()

// Automatically load all controllers in this folder
eagerLoadControllersFrom("controllers", application)

export { application }
