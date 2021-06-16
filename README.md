# Autosalon

Web aplikacija razvija se za korištenje u raznim autosalonima koji prodaju rabljene automobile. 
Aplikacija omogu?ava prijavu za zaposlenika koji ima funkcije unosa automobila koji se prodaju, rezerviranja probne vožnje za klijenta te funkciju kreiranja ugovora za prodano vozilo.

Klijent bi u aplikaciji imao uvid u sva vozila iz ponude te bi mogao poslati upit za neko od ponu?enih vozila. Popis svih upita zaposlenik bi imao sistematiziran na jednom mjestu kako bi u svakom trenutku mogao vidjeti koji klijent je zainteresiran za koje vozilo. 

Za rezerviranje probne vožnje potrebno je unijeti podatke o klijentu i podatke o vozilu za koje se želi rezervirati probna vožnja. Prilikom rezerviranja probne vožnje od zaposlenika bi se tražio odabir termina u kojem klijent želi izvršiti probnu vožnju, što bi bilo potrebno ograni?iti na na?in da se termini probnih vožnji za isto vozilo ne poklapaju.

Prilikom realizacije prodaje vozila, kreira se ugovor. Zaposlenik unosi podatke o klijentu te o vozilu koje je prodano. Prilikom kreiranja ugovora, vozilo je potrebno obrisati sa popisa vozila koja su u ponudi na prodaju kako više ne bi bilo vidljivo ostalim klijentima koji pregledavaju aplikaciju.

# Instalacija aplikacije
##### Ako u sustavu nije instaliran Node.js, potrebno ga je preuzeti sa stranice https://nodejs.org/en/ i instalirati
## Instalacija na serverskoj strani

#### 1. korak
```
cd backend
```
#### 2. korak
```
Npm install axios core-js
```

#### Pokrenuti kod
```
node index
```
## Instalacija na klijentskoj strani
#### 1. korak
Otvoriti novi terminal i napisati
```
cd frontend
```
#### 2. korak
```
Npm install vue vue-router firebase
```
#### Pokrenuti kod
```
npm run serve
```
### Otvaranje aplikacije u pregledniku
```
http://localhost:8080/ 
```
