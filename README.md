<!--
README.md
Created: 7/7/2026
Last Edited: 7/7/2026
Author: John Wesley Thompson
-->

# The Community Atlas
The Community Atlas is a work-in-progress project that will allow its users to share photos and see 
their connections' photos based on the location that they were taken. It's a platform designed to 
promote community among travelers and to inspire adventure.

*All details below may change as the system is designed and implemented. They are all part of the initial plan and have not been implemented yet.*

## Features
- Custom feed containing posts from people you follow and thier connections up to the 2nd degree
- Ability to post photos publicly or privately to show others where you have been
- Serves as an adventure photobook for those who want to view their photos privately
- Photos are viewable on a small interactive globe, fitting for a traveler
- Each post contains an image and comments so you can learn more about your friends' adventures
- After posting, in a new location, you can see the posts that other users have taken in the same place and learn about the culture around you
- TOTP authentication and JWT for login sessions
- RESTful API for front-end communication and AWS integrations

## Tech Stack
### **Front-end**
- Typescript
- React

### **Back-end**
- Python
- FastAPI

### **Database**
- PostgreSQL + PostGIS
- Redis

### **CI/CD & Deployment**
- Github Actions
- Docker
- Amazon S3, EC2, CloudFront, RDS
- Alembic

## System Architecture
The following diagrams are meant to follow the C4 documenting style.


## Current Goal
Build a dockerized bare bones front-end and back-end that communicate with each other

