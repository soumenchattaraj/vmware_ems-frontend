This is the simple view to display all employee list.

Dockerfile is already created for the same.

Please use the following commands to run the application.

1. docker build -t [any tag name] [directory]
Example : docker build -t ems-view_v1.0 .

2. docker run -d -p 3000:3000 [image id for the above docker build]


Note:
Port 3000 is the default port and the same can be changed.
