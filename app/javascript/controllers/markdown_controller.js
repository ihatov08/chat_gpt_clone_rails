import { Controller } from "@hotwired/stimulus"
import { marked } from "marked";
import DOMPurify from "dompurify";

// Connects to data-controller="markdown"
export default class extends Controller {
  connect() {
    this.element.innerHTML = DOMPurify.sanitize(marked.parse(this.element.innerHTML));
  }
}
