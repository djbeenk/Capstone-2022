This was a the final capstone project for University of Iowa's Informatics program. This project was a collaboration between me and two other students. Our initial goals for this project was to create an app that would serve as a maintenance tracker. The app would keep track of the number of miles ridden by a user and notify them when in need of certain maintenance services. We would provide the user with some information about their rides and support videos if they need help when doing their maintenance services themselves.

This application includes a login id that links the user's information to the database. In order to login, you must have an associated Strava Account. The application updates and stores miles ridden by the user, sends push notifications to the user when the miles exceed the maintenance required for the bike part, gives the user the ability to "snooze" maintenance alarms, and has settings to enable and disable features.

How to Run This:
1. Open command prompt and change directory to the folder containing all files. I placed all files in a folder called 'Capstone.' To change directory, type 'cd Desktop/Capstone' in command prompt.
2. Type 'php -S localhost:8000' in command prompt.
3. Open browser and type http://localhost:8000/ into address bar. You should be at the login page for the maintenance tracker.
4. Since this application was designed for people that have Strava and ElliptiGO accounts, you will need to have an associated account id in order to access the maintenance tracker. When designing the tracker, we used the id '2521816' to test functions. Type '2521816' to login.
5. You now have access to the maintenance tracker! In the settings at the bottom of the page, enable the manual update miles button in order to update the miles you have ridden. You should get an alarm when the miles exceeds what is required for your bike part. 
