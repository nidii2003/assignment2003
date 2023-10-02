function describe_city(city:string, country = "Unknown") {
    console.log(`${city} is in ${country}.`);
  }
  
  // Call the function for three different cities
  describe_city("Karachi", "Pakistan");
  describe_city("New York", "USA");
  describe_city("Tokyo"); // Uses the default country value "Unknown"