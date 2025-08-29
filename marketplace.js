// page to display the marketplace of the application
// Connects to the hmepage.js file
// Shows the different developers and their skillsets
// It includes links to the product listing and product details pages.

const developers = [
  {
    id: 1,
    name: "Alice Johnson",
    skills: ["React", "Node.js", "MongoDB"],
    profileUrl: "/developer/1",
    productsUrl: "/products?developer=1"
  },
  {
    id: 2,
    name: "Bob Smith",
    skills: ["Python", "Django", "PostgreSQL"],
    profileUrl: "/developer/2",
    productsUrl: "/products?developer=2"
  }
];

// Function to render the marketplace
function renderMarketplace() {
  const container = document.getElementById('marketplace');
  if (!container) return;

  container.innerHTML = `
    <h1>Developer Marketplace</h1>
    <ul>
      ${developers.map(dev => `
        <li>
          <strong>${dev.name}</strong><br>
          Skills: ${dev.skills.join(', ')}<br>
          <a href="${dev.profileUrl}">View Profile</a> |
          <a href="${dev.productsUrl}">Product Listings</a>
        </li>
      `).join('')}
    </ul>
  `;
}

// Connect to homepage.js (example import, adjust as needed)
// import { goToHomepage } from './homepage.js';

// Call render on page load
window.addEventListener('DOMContentLoaded', renderMarketplace);