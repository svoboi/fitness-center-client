# How to use this app

After starting up this app (as described in readme here: https://github.com/svoboi/fitness-center-server),
you will be presented with homescreen. There's navigation bar on top, which you can use to get to classes, users, rooms and sports.

Each of these categories has creation form and table for management of already existing entities. You can edit or delete whichever entity you would like.

Classes are a bit special - they connect all the other entities together, since you need to know where the class is,
who will lead it and what kind of sport you can look forward to. When adding or editing class, make sure you use ids of existing sports, trainers and rooms.

Trainers are added to the classes either in create form or later by clicking the Add button in Trainer column.
In the form brought up by Add button, you can add trainers by filling in their usernames.
If the trainer is busy in the requested time, the app will tell you so.

