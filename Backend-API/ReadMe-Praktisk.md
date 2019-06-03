#API - Inlamningsuppgift1

## Praktisk del

Du ska ta fram backend för den nya läroplatformen BongBong. Det första steget är att kunna hantera studenter.
Utgå från valfri exempelkod som tillhandahållits under kursens gång.

I ett gitrepo ska det finnas ett API skrivet i node/express som sparar informationen i en mongodatabas.

Det ska finnas en README.md som beskriver vad applikationen gör och hur man startar den.



### Starta upp:

```
npm init

npm install --save express

```
Lägg till "start": "node index.js",in package json under scripts.

Skapa och lägg till innehållet i ìndex.js filen.

### Instruktioner

```
npm install
npm start

```

## Test

```
$ curl -i localhost:2000

HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 17
ETag: W/"11-2KXtcX4n/Oy0kKelr93APqLTZ0Y"
Date: Mon, 27 May 2019 10:08:45 GMT
Connection: keep-alive

{"Hello":"World"}

```
## Lägg till Mongoose
```
npm install --save mongoose

```
## Beskrivning App

Vår app skapar en ny databas som heter studentsDB. Databasen innehåller  
tabell som har följande schema:

## Databeskrivning
```
$ curl -i -X POST -H "Content-Type:application/json" localhost:2000/students -d '{
  "email": "studentNamn@gmail.com",
  "name":"studentNamn",
  "address" : {
      "gata":"studentGatan",
      "postnummer":12345,
      "ort":"studentOrt"
      }
    }'

```
## Metodbeskrivning
Följande metoder är implementerade i appen:

### students GET lista alla studenter som en array
```
$ curl -i -X GET localhost:2000/students


Respons Status: 200 ok

```

### students/?name="Pelle kanin" hämtar alla studenter med namn
```
$ curl -i -X GET localhost:2000/students/?name=studentNamn


Response Status 200 OK

{"address":{"gata":"studentGatan","postnummer":12345,"ort":"studentOrt"},"_id":"5ced1baeaa26ac5340e67fe8","email":"studentNamn@gmail.com","name":"studentNamn","__v":0}

```

### students POST skapa en ny student
```
$ curl -i -X POST -H "Content-Type:application/json" localhost:2000/students -d '{
  "email": "studentNamn@gmail.com",
  "name":"studentNamn",
  "address" : {
      "gata":"studentGatan",
      "postnummer":12345,
      "ort":"studentOrt"
      }
    }'


Respons Status: 201 Created    

```
### students/{id} GET visa en student
```
$ curl -i -X GET localhost:2000/students/5ced1baeaa26ac5340e67fe8

Response Status: 200 OK

{"address":{"gata":"studentGatan","postnummer":12345,"ort":"studentOrt"},"_id":"5ced1baeaa26ac5340e67fe8","email":"studentNamn@gmail.com","name":"studentNamn","__v":0}

```

### students/{id} PUT skapa eller uppdatera en student (response code 201 om skapad, 200 om uppdaterad och 204 om inte ändrad)
```
$ curl -i -X PUT localhost:2000/students/5ced2f96f9560949acc0193b -H "Content-Type: application/json; charset=utf-8" -d
 '{
     "email": "fabregas@hotmail.com",
     "name": "Jennie",
      "address": {
         "gata":"Put NyGata",
          "postnummer": 12345,
           "ort": "Monaco"}
  }'

  Response Status: 200 Ok

  {"address":{"gata":"Put NyGata","postnummer":12345,"ort":"Monaco"},"_id":"5ced2f96f9560949acc0193b","email":"fabregas@hotmail.com","name":"Jennie","__v":0}
```
Id:t till nedanstående kod fanns inte från början eftersom vi deleteat den.
För att 'upsert' (skapa ny i metoden PUT) ska funka måste id likna formatet: 5ced2f96f9560949acc0193b men vara unikt och inte existera i databasen.
```
$ curl -i -X PUT localhost:2000/students/5ced2f96f9560949acc0193b -H "Content-Type: application/json; charset=utf-8" -d
 '{
     "email": "fabregas@hotmail.com",
     "name": "Jennie",
      "address": {
         "gata":"Put NyGata",
          "postnummer": 99999,
           "ort": "Monaco"}
  }'
  Response Status: 201 Created
```
I nedan exempel ändrade vi ingenting från föregående request och fick statuskoden att inget är ändrat.
```
$ curl -i -X PUT localhost:2000/students/5ced2f96f9560949acc0193b -H "Content-Type: application/json; charset=utf-8" -d
 '{
     "email": "fabregas@hotmail.com",
     "name": "Jennie",
      "address": {
         "gata":"Put NyGata",
          "postnummer": 99999,
           "ort": "Monaco"}
  }'
  Response Status: 204 No Content
```

### students/{id} DELETE ta bort en ny student (response code 200 om borta, 204 om inget togs bort)
```
$ curl -i -X DELETE localhost:2000/students/5ced2f96f9560949acc0193b

Response Status: 200 OK

{"address":{"gata":"Put NyGata","postnummer":12345,"ort":"Monaco"},"_id":"5ced2f96f9560949acc0193b","email":"fabregas@hotmail.com","name":"Jennie","__v":0}

```
