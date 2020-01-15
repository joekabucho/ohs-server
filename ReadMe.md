
# Endpoints Documentation
 ### Users Endpoints
 
 #### Description: Verify an email and send an account verification code.

 ``` POST ipaddress:port/api/user/verify ```

 Data 
 ```json
 {
  "email": "String"
 }
 ```
 
 #### Description: Finalize on regstering a user. 
 ``` POST ipaddress:port/api/user/register ```

 Data

 ```json
 {
  " name": "String",
   "email": "String",
   "role": "Enum(Admin, Customer, Manager)",
   "department": "String()",
   "password": "String",
   "code":" Number(The verification code sent earlier)"
 }
 ```

 #### Description: Sent an inviatation link
 ``` POST ipaddress:port/api/user/invite ```
 
 Data 
 ```json
 {
  "email": "String"
 }
 ```

 #### Description: Login
 ``` POST ipaddress:port/api/user/login ```
 
 Data 
 ```json
 {
  "email": "String",
  "password": "String"
 }

```
#### Description: Get a users object
 ``` GET ipaddress:port/api/user/getOne/:id ```

### Files Endpoints

#### Description: Upload files
  ``` POST ipaddress:port/api/files ```
  
  Data
  ```json
  {
   "file":
      {
         "sampleFile": "File",
         "name":" String"
       },
  " user": "ObjectId(UserId of whom it is uploaded for)",
  " uploadedby": "ObjectId(UserId of whom uploads it)",
   }
   ```

#### Description: Read all files
   ``` GET ipaddress:port/api/files ```

#### Description: Read a user's files(Files uploaded for a particular user)
   ``` GET ipaddress:port/api/files/user ```
   
   Data 

   ```json
   {
    "userid": "ObjectId(Id of the user whom it was uploaded for)"
   }
   ```



 ### Cart Endpoints

 #### Description: Create a cart object
  ``` POST ipaddress:port/api/cart ```
  
  Data 
  ```json
    {
     "user": "ObjectId(User id of Owner of the cart)",
     "items": "[{}](An array of objects, could be templates..)",
     "status": "Enum(Pending, Paid)",
     "amount": "Number"
     }

     ```

#### Description: Get a user's cart objects
  ``` GET ipaddress:port/api/cart/user ```
   
   Data 

   ```json
   {
    "userid": "ObjectId(Id of the user who owns the cart)"
   }
   ```
  
  #### Description: Get all crt objects
   ``` GET ipaddress:port/api/cart ```
   
  #### Description : Add an item to a cart object
   ```POST ipaddress:port/api/cart/add ```
   
   Data
```json 
   {
     "_id": "ObjectId(Id of the cart object)",
     "user": "ObjectId(User id of Owner of the cart)",
     "items": "[{}](An array of objects, could be templates..)",
     "status": "Enum(Pending, Paid)",
     "amount": "Number"
    }
```

#### Description: Delete a cart object
    ``` DELETE ipaddress:port/api/cart ```
    
    Data 

```json
    {
      "_id": "ObjectId(Id of the cart object)"
     
     }
 ```

#### Description: Make payments for a cart object
   ``` POST ipaddress:port/api/cart/pay ```
    
    Data 

    ```json
    {
      "_id": "ObjectId(Id of the cart object)",
      "phone": "String(Phone number of the person paying(Should start with country code eg. +254))"
    }
    ```

#### Description: Get all payments
  ``` GET ipaddress:port/api/cart/payments ```

#### Description: Get payments by a specific user 
   ``` GET ipaddress:port/api/cart/paymentsbyuser ```
    
    Data 
    

    ```json
    {
        "user":"ObjectId(Id of the user)"
    }
    ```


### Chat Endpoints
 
 #### Description: Send a message
  ``` POST ipaddress:port/api/chat ```
  
  Data 
  ```json
  {
   "receiver_id": "ObjectId(Id of the user who is supposed to receive the message)",
   "message": "String"
  } 
  ```