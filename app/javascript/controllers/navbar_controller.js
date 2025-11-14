import { Controller } from "@hotwired/stimulus"
import { gsap } from "gsap"

export default class extends Controller {
  connect() {
    console.log("Navbar controller connected")

    gsap.from(this.element, {
      y: -80,
      opacity: 0,
      duration: 1,
      ease: "power4.out"
    })
  }

  toggle(event) {
    const content = this.element.querySelector(".accordion-content")

    if (content.classList.contains("expanded")) {
      content.classList.remove("expanded")
      gsap.to(content, {
        maxHeight: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in"
      })
    } else {
      content.classList.add("expanded")
      gsap.to(content, {
        maxHeight: 200,
        opacity: 1,
        duration: 0.4,
        ease: "power2.out"
      })
    }
  }
}
