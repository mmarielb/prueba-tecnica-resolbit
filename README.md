Pasos para que puedan ejecutar el codigo y funcione, yo utilicé postman para las pruebas.

1.- Crear la base de datos en postgresql

psql -U postgres
CREATE DATABASE "prueba-tecnica-resolbit";
les debe salir algo como esto
![image](https://github.com/user-attachments/assets/473332f3-7eb8-4dc6-8478-b10c25e4a7e6)


2.- Ejecutar el app.js y les correra en el puerto 3000
![image](https://github.com/user-attachments/assets/53f6603c-a381-40dd-82d2-b079ea76f04a)


3.- Ir a postman y probar cada metodo

3.1 Crear los usuarios (cliente y agente) con el metodo post/users

![image](https://github.com/user-attachments/assets/538a3bad-4288-44ad-8982-27c88bb889e2)


![image](https://github.com/user-attachments/assets/8d4fc137-2e33-4454-be15-23f45c1c5719)


Si se intenta crear otro usuario, pero con el mismo numero de tlf de otro, dará error


![image](https://github.com/user-attachments/assets/fd75e3d2-50f6-4ace-b04d-a07f912be681)



Y si intentan colocar otro rol, distinto a cliente o agent, también dará error


![image](https://github.com/user-attachments/assets/fbf998b6-3130-4c67-aefd-d4e31e14cfb5)



3.2 Verificamos que los usuarios hayan sido creados (método get/users)

![image](https://github.com/user-attachments/assets/e76b459f-c177-4046-a153-2d3004850dda)


3.3 Creamos la conversacion post/conversations

![image](https://github.com/user-attachments/assets/0ef518aa-1e13-45bf-99a3-7ba7b1e98c5e)


Si se quieren agregar mas conversaciones, se deben agregar mas clientes y agentes.

3.3 Obtener todas las conversaciones (get/conversations)

![image](https://github.com/user-attachments/assets/bcb7dabe-9e5a-41ae-bf4b-482a0582c687)


![image](https://github.com/user-attachments/assets/50709a50-cdf1-4405-900b-870f6c411ee1)


3.3 Registrar un mensaje:

![image](https://github.com/user-attachments/assets/54ebe09e-4004-4e00-8d00-b3d15330c7d9)


3.4 Mostrar todos los mensajes de una conversacion

![image](https://github.com/user-attachments/assets/faef910d-b375-42a7-8832-f90680a25042)


![image](https://github.com/user-attachments/assets/adad4f53-7cad-4873-b4e8-5d0a06a807b3)


![image](https://github.com/user-attachments/assets/94f57dce-efea-441a-8382-e0c23e0f37ad)






























































































