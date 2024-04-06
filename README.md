          
        
 ***<p class=" text-center">Clean Archi : Pattern Proxy</p>***


``` run docker compose :  sudo docker compose up ```


[center]then make the migration[/center]

``` sudo docker exec -it backend /bin/sh -c "npx prisma migrate dev --schema=./src/prisma/schema.prisma" ```

[center]then restart your docker compose[/center] 

``` sudo docker compose restart ``` 

[center]then seed your db[/center] 

``` sudo docker exec -it backend /bin/sh -c "npm run prisma:seed" ```



***Enjoy***