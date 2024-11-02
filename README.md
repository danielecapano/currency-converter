# Currency Converter

Currency Converter è un'applicazione sviluppata in React con Vite, progettata per aiutarti a convertire valute in modo semplice e veloce, oltre a visualizzare l'andamento dei tassi di cambio nel tempo.

![Currency Converter Screenshot](./path-to-image-file.png)

## Caratteristiche

- **Conversione in tempo reale**: Inserisci l'importo in una valuta e ottieni la conversione istantanea nell'altra valuta selezionata.
- **Selezione Valute**: Sono disponibili due campi di input con dropdown per scegliere la valuta di partenza e quella di destinazione.
- **Grafico storico**: Visualizza l'andamento storico del tasso di cambio per gli ultimi periodi (un mese, tre mesi, sei mesi, un anno).
- **Interfaccia intuitiva e moderna**: UI pulita con la possibilità di cambiare tema per un'esperienza piacevole e moderna.

## Tecnologie utilizzate

- **React**: Libreria per costruire l'interfaccia utente.
- **Vite**: Ambiente di sviluppo veloce e leggero.
- **CSS Modules** (o Tailwind, Bootstrap, se hai usato uno di questi per lo stile): Per creare uno stile visivo moderno e reattivo.
- **API**: L'app utilizza un'API di cambio valuta (specifica l'API usata, se presente) per ottenere i tassi di cambio aggiornati e i dati storici.

## Installazione

1. Clona il repository:
   ```bash
   git clone https://github.com/danielecapano/currency-converter.git
   ```

2. Installa le dipendenze:
   ```bash
   cd currency-converter
   npm install
   ```

3. Avvia l'applicazione:
   ```bash
   npm run dev
   ```

L'app sarà disponibile su `http://localhost:5173`

È possibile provarla a questo [link](https://currency-converter-2024.netlify.app/)

## Utilizzo
1. Seleziona la valuta di partenza e di destinazione nei campi dedicati.
2. Inserisci l'importo da convertire.
3. Visualizza la conversione istantanea in tempo reale.
4. Usa i pulsanti per cambiare il periodo di riferimento nel grafico e analizzare l'andamento storico dei tassi di cambio.

## Struttura del progetto
```bash
src/
├── components/        # Componenti riutilizzabili (input, grafico, ecc.)
├── pages/             # Pagine principali dell'app
├── services/          # Chiamate API e funzioni di utilità
└── styles/            # File di stile
```

## Note
- L'app è stata sviluppata per scopi didattici e non è destinata a essere utilizzata per la gestione di transazioni finanziarie reali.
- Assicurati di avere accesso a una connessione Internet per caricare i dati di cambio valuta aggiornati.

