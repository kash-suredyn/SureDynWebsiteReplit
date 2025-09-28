import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Add meta description programmatically for SEO
const metaDescription = document.querySelector('meta[name="description"]');
if (metaDescription) {
  metaDescription.setAttribute('content', 'Expert Microsoft Dynamics 365 implementation, upgrade, and support services. 80+ years combined experience. Cost-effective, quick, and personal service.');
}

createRoot(document.getElementById("root")!).render(<App />);
