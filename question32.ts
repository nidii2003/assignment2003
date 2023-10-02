const current_users: Array<string> = [
    "ashuu",
    "hira",
    "laiba",
    "disha",
    "hani",
  ];
  const new_users: Array<string> = [
    "Amna",
    "Zobia",
    "lina",
    "ayesha",
    "hina",
  ];
  
  new_users.map((name: string) => {
    if (current_users.includes(name.toLowerCase())) {
      console.log("username", name, "already in use. Please rename yourself");
    } else {
      console.log("username", name, "is available");
    }
  });