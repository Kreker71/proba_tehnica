# Prob Tehnica LSAC 2020 

## Tema: Ajutor pentru programator - website 

## Made with React💻, Bootstrap🎨 and love❤

### How to run:

```bash
npm start
```

### Tasks: 

### Front-end

- [x] Pagina trebuie sa fie responsive (adica sa se vada ok pe orice rezolutie, fie pc, fie telefon, puteti testa prin redimensiona browserului).
- [x] Incercati sa respectati design-ul cat de bine se poate. E ok daca nu o sa fie 1:1, dar sa nu fie abateri prea mari de la el.
- [x] Recomandam cu incredere sa folositi un framework de front-end: Bootstrap sau Materialize. Acestea va fac viata mult mai usoara, avand elemente responsive deja codate in ele, voi doar trebuie sa le includeti.
- [x] Pop-up-ul, initial, nu va avea nimic in lista de “Plangeri introduse pana acum”, acestea vor fi actualizate dinamic dupa cum e descris mai jos.
Acesta va aparea la apasarea butonului, ca in mock. Atentie la butonul de X al lui care trebuie sa il inchida!

### Back-end 

- [x] Acest task se va rezolva in pop-up. Cand utilizatorul da click pe “Alege materia”, ar trebui sa apara un dropdown cu niste valori (ex. PC, USO).
Aceste valori NU vor fi hardcodate din HTML. Acestea trebuie adaugate dinamic din javascript, la incarcarea paginii. Sursa datelor poate fi, de
exemplu o variabila in codul JS (sau un fisier). Exemplu:
    - const subjects = [‘PC’, ‘USO’, ‘Mate1’, ‘Mate2’];
- [x] Dupa ce utilizatorul alege materia, acesta trebuie sa dea un titlu. Poate fi orice sir de caractere.
- [x] Dupa ce a completat formularul, daca datele introduse sunt corecte (a selectat o materie si campul de titlu nu e gol), acestea vor aparea in
lista de sub el. Daca input-ul e invalid, acesta va fi atentionat. (hint: alert)
- [ ] Nu e nevoie ca datele sa persiste la refresh (desi, intr-o aplicatie reala, ar trebui).

### Imbunatatiri

- [x] Plangerile sa persiste la refresh (stocare in fisier, baze de date).
- [ ]  Legarea la un server back-end (nodeJS, PHP). (note: github pages nu va mai merge)
- [ ]  Stergerea unei plangeri din lista (un buton de X in dreptul ei)
- [ ]  Contact form functional care sa trimita un mail cu ce s-a completat
