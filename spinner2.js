const spinnerArray = ['\r|   ', '\r/   ', '\r-   ', '\r\\   '];
let timeout = 100;
const numberOfSpins = 4;

for (let x = 0; x<numberOfSpins; x++){
  for (const spin of spinnerArray) {
    setTimeout(() => {
      process.stdout.write(spin); 
    }, timeout);
    timeout += 200;
  }
}  
