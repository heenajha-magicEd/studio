🎨 **Studio Hub: Angular Showcase with Microfrontend & NgRx Magic**
Welcome to Studio Hub, an Angular-powered, microfrontend-enhanced, RxJS-fueled web application for browsing cool pictures ˙✧˖°📸⋆｡˚

This project is a modular, scalable Angular application built with all the good stuff: routing, guards, lazy loading, NgRx, custom components &directives, and a sprinkle of microfrontend via Webpack Module Federation.

![image](https://github.com/user-attachments/assets/88030c7a-9665-41cf-86e7-804a7b1a491f)

🚀 **Features Implemented:**
      Because it’s not just about building — it's about building right.

🔐 1. Authentication: 
       - Login/Logout using localStorage and Google Sign-In
       - AuthGuard to protect routes from sneaky intruders

🧭 2. Routing: Nested routing and Lazy loading for blazing-fast navigation
🎨 3. UI Libraries: Designed with PrimeNG + Bootstrap = modern and responsive
🛠️ 4. Custom Elements
✨ 5. Custom Directive
🔐 6. HTTP Interceptor
🔗 7. API Integration: Robust API handling + real-time filtering
🧱 8. Standalone Components: Leveraged Angular's modern standalone component support
🧬 9.Reactive Forms used where appropriate
📐 10. Type Safety First: Interfaces & data types defined for strict typing and clarity
💡 11. Reactive Goodness: RxJS in action: Observables, map, catchError, of — the works
🧪 12. Unit Testing: Jasmine + Karma setup for components like Home

📦 13. State Management (NgRx Store)
        - Favourites page managed with NgRx
        - Navbar badge shows live count of favorites

🧩 14. Microfrontend using Webpack Module Federation
       - Profiles app runs standalone and integrates seamlessly into host shell

🗂️ Project Structure
📁 studio             => Main Host Angular App (Shell)
📁 micro-frontend
   └── profiles       => Microfrontend Angular App (Profiles)

⚙️ **Instructions to run the apps:**
**🧩 Start the Microfrontend (Profiles)**
    cd micro-frontend/profiles
    npm run start  # Runs on http://localhost:4200

**🏠 Start the Host App (Studio)**
    cd studio
    npm run start  # Runs on http://localhost:3000

