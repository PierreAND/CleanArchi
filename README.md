``` run docker compose :  sudo docker compose up ```
then make the migration

``` sudo docker exec -it backend /bin/sh -c "npx prisma migrate dev --schema=./src/prisma/schema.prisma" ```

then restart your docker compose 

``` sudo docker compose restart ``` 

then seed your db 
``` sudo docker exec -it backend /bin/sh -c "npm run prisma:seed" ```



***Enjoy***