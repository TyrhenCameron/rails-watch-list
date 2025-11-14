import { Controller } from "@hotwired/stimulus"
import { gsap } from "gsap"

// Connects to data-controller="accordion"
export default class extends Controller {

  connect() {
  console.log("Accordion controller connected")
};

  expand(event) {
    const item = event.currentTarget
    const content = item.querySelector(".accordion-content")

    // Add a class for styling
    item.classList.add("expanded")

    // Animate the expansion
    gsap.to(content, {
      maxHeight: 200,
      opacity: 1,
      duration: 0.4,
      ease: "power2.out"
    })
  }

  collapse(event) {
    const item = event.currentTarget
    const content = item.querySelector(".accordion-content")

    // Remove class for styling
    item.classList.remove("expanded")

    // Animate collapse
    gsap.to(content, {
      maxHeight: 0,
      opacity: 0,
      duration: 0.3,
      ease: "power2.in"
    })
  }
}
