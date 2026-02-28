// Global counter using var
var userCount = 8; // You can change this to generate more users

// Fixed roles using const
const roles = ["admin", "editor", "viewer", "tester", "manager"];

for (let i = 1; i <= userCount; i++) {
  // Generate padded ID (USR-0001 format)
  let id = "USR-" + String(i).padStart(4, "0");

  // Generate name and email
  let name = 'TestUser_${i}';
  let email = 'testuser${i}@testingacademy.com';

  // Cycle through roles
  let role = roles[(i - 1) % roles.length];

  // Every 3rd user is INACTIVE
  let status = (i % 3 === 0) ? "INACTIVE" : "ACTIVE";

  // Print user data
  console.log(`${id} | ${name} | ${email} | ${role} | ${status}`);
}