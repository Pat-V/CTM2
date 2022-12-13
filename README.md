# CTM
Clinical Trial Management (CTM)

This app to manage Clinical Trials regarding what is in porfolio and related Patients/Physicians.

It provides list views of below recorded elements:
 - Clinical Trials
 - Physicians
 - Patients

It encompass below Business Rules
 - All logged users can view lists
 - Only Trial Manager can Manage the Trial Portfolio
 - Only People Managers can manage Physicians and Patients
 - The session expires the CTM tab or the browser is closed






Start commands from the root folder of the project:
 - Backend:  npm run start (classic), or npm run watch (with nodemon)
 - frontend: npm run front

Ports:
 - Backend: 8018, or 1880 in case of unavailability
 - frontend: 3000
link between back and front is handled by proxy (front package.json, line 2)