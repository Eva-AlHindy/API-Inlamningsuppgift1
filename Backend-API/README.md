# API-Inlamningsuppgift1


API-Inlamningsuppgift1 består av en teoretisk och praktisk del.
Den teoretiska delen finns i den här filen (README) och de praktiska delarna i (ReadMe-Praktisk).

## Teoretisk del

Svara på följande frågor:

 ### 1- Hur används HTTP-protokollet när du surfar in på en websida? Beskriv vilken metod, path, URI, response code och body som skickas in och svarar.
Om du har svårt att bestämma dig för en url, ta ex. http://www.smp.se/kultur-noje/

```
"HTTP" definierar hur detta samtal sker mellan klienten och servern (två datorer). Det används för att begära HTML-sidor,
bilder och annat innehåll som finns på webben.Det definierar också olika fel som kan hanteras av användaragenten eller
visas för användaren.

I den här example vi använder GET method.
Example består av:
-  Schemat anger protokollet som ska användas för att hämta resursen (det kallas även URL-protokollet). Den här webbadressen hämtas med hjälp av HTTP.
- www.smp.se: är servern (eller värdnamn). Detta är namnet på den dator som webbläsaren behöver kontakta för att hämta den här informationen.
 Serverprogramvaran på den kommer att svara på förfrågan.
- kultur-noje : Är sökvägen vilken sida på den här servern vi är intresserade av?
Detta används av servern för att bestämma vilken del av innehållet användaren har begärt och sedan skickar den tillbaka svarskoden och
 i detta exempel är svarskoden 200 ok.

. Method => GET
. Path => kultur-noje
. URI => http://www.smp.se/kultur-noje/
. Response code => 200
. Body => HTML

```

 ### 2 -  Beskriv HTTP-protokollets vanligaste metoder och vad de gör.
```
HTTP definierar en uppsättning förfrågningsmetoder för att ange önskad åtgärd som ska utföras för en given resurs.

- GET
GET-metoden begär en representation av den angivna resursen. Förfrågningar som använder GET bör bara hämta data.

- HEAD
HEAD-metoden kräver ett svar som är identiskt med det för en GET-förfrågan, men utan svaret.

- POST
POST-metoden används för att skicka en enhet till den angivna resursen, vilket ofta orsakar en förändring
 av tillstånd eller biverkningar på servern.

- PUT
PUT-metoden ersätter alla aktuella representationer av målresursen med begäran nyttolast.

- DELETE
DELETE-metoden raderar den angivna resursen.

- PATCH
PATCH-metoden används för att tillämpa partiella modifieringar av en resurs.

```

 - "http://localhost:3000/users?username=something" är en URI, beskriv vilka delar den består av och vad de kallas

```
En URI (Uniform Resource Identifier) är en textidentifierare för hur man når en resurs. Den har två specialiseringar
som kallas URL (Uniform Resource Locator), som definierar hur resursen kan erhållas, och ett URN (Uniform Resource Name),
 som identifierar en resurs med namn i en given namnrymd.

Scheme => delen före den första kolon i URI (http: //), som används för att identifiera resursens "syfte".
Host => håller resursen. Den innehåller ett värdnamn (localhost) följt av portnumret separerat med ett kolon (3000).
Path => identifierar den specifika resursen i värden som användaren vill komma åt (/ användare).
Query string => följer sökvägen och ger en sträng information som resursen kan använda för något ändamål (användarnamn = något).
```

 - På vilka tre sätt kan man skicka in parametrar i en HTTP-request? Ge exempel med curl.
 ```
- Path parameters => see /students/{id}
- Query parameters => see /students/{name}
- Header => see /students/{name}

 ```

## Feedback

feedback på kursen och övningsuppgiften ska lämnas i readmeuppgiften. Exempel på feedback kan vara
```
- Kursens takt:
Jag tror att det finns en bra balans när det gäller tid mellan teori och praktik.

- Kurs material:
Boken och exempel som finns i GitHub var bra att följa dem och hjälpa mig att förstå kursen,
men jag tror att bilderna kan bli bättre.

- format:
I början trodde jag att kursen är svår att förstå men läraren var positiv och hjälpsam.
Han hjälpte mig genom att svara på alla mina frågor.

```
