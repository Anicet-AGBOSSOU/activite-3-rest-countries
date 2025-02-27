//Etape 1: Récupération des pays
 async function fetchCountries(){
    try{
        const response = await fetch(`https://restcountries.com/v3.1/all`);
        const countries=await response.json();
        console.log(countries);
        return countries;
        
    }
    catch (error){console.error(`Erreur lors de la récupération des pays:Veillez vérifier votre code ou votre lien`,error);}
}
fetchCountries()

//Etape 2: Filtrage des Pays (Sélection de 05 Pays Africains,05 Pays Européens,05 Pays Asiatiques et 05 Pays Américains)

function filterCountries(countries)
{
    const african=countries.filter(country=>country.region===`Africa`).slice(0,5);
    const american=countries.filter(country=>country.region===`Americas`).slice(0,5);
    const european=countries.filter(country=>country.region===`Europe`).slice(0,5);
    const asian=countries.filter(country=>country.region===`Asia`).slice(0,5);
    console.log(filterCountries);
    console.log(african)
    return [...african,...american,...european,...asian
    ];
   
    
}

function displayCountries(countries)
{
    const countryContainer=document.getElementById(`country-container`);
    countries.forEach(country=>{
        const countryCard=document.createElement(`div`);
        countryCard.className = `country-card`;
            countryCard.innerHTML=` <h2>${country.name.common}</h2>
            <img src="${country.flags.png}" alt="Drapeau de ${country.name.common}" />
            <p><strong>Capital:</strong> ${country.capital ? 
                country.capital[0]:`N/A`}</p>
            <p><strong>Devise:</strong> ${country.currencies && Object.values(country.currencies)[0] ? Object.values(country.currencies)[0].name:`N/A`}</p>`;    
           
            countryContainer.appendChild(countryCard);
        })
        
        }

        async function main() {
            const countries=await fetchCountries();
            const filteredCountries=filterCountries(countries);
            console.log(filteredCountries);
            displayCountries(filteredCountries);
            
        } 

        document.addEventListener(`DOMContentLoaded`,main);
