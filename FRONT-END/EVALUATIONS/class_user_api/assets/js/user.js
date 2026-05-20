export class Users {
    constructor({id, name, username, email, address: { street, suite, city, zipcode, geo: { lat, lng } }, phone, website, company: { companyName, catchPhrase, bs}}) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.address = {
            street,
            suite,
            city,
            zipcode,
            geo: {
                lat,
                lng
            }
        };
        this.phone = phone;
        this.website = website;
        this.company = {
            companyName,
            catchPhrase,
            bs
        };
    }

    afficheInfos(){        
        console.log(`ID: ${this.id}`);
        console.log(`Nom: ${this.name}`);
        console.log(`Nom d'utilisateur: ${this.username}`);
        console.log(`Email: ${this.email}`);
        console.log(`Adresse: ${this.address.street}, ${this.address.suite}, ${this.address.city}, ${this.address.zipcode}`);
        console.log(`Coordonnées: Lat ${this.address.geo.lat}, Lng ${this.address.geo.lng}`);
        console.log(`Téléphone: ${this.phone}`);
        console.log(`Site web: ${this.website}`);
        console.log(`Entreprise: ${this.company.companyName}`);
        console.log(`Catch Phrase: ${this.company.catchPhrase}`);
        console.log(`BS: ${this.company.bs}`);
    }
}
