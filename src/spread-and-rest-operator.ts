{
    // ------------------------------------------
    // SPREAD OPERATOR
    // ------------------------------------------
  
    // Spread with Arrays: Merge two arrays into one
  
    const frontendTeam: string[] = ["Alice", "Bob"]; // Array of frontend developers
    const backendTeam: string[] = ["Charlie", "Dave"]; // Array of backend developers
  
    // Using the spread operator (...) to merge both arrays into one
    const fullTeam: string[] = [...frontendTeam, ...backendTeam];
    console.log(fullTeam); 
    // Output: ['Alice', 'Bob', 'Charlie', 'Dave']
    // Explanation: It copies all items from frontendTeam and backendTeam into fullTeam
  
    // Spread with Objects: Merge two objects
  
    const mentorGroup1 = {
      typescript: "John", // Mentor for TypeScript
      redux: "Mike",      // Mentor for Redux
    };
  
    const mentorGroup2 = {
      redux: "Anna",     // This key already exists in mentorGroup1
      docker: "Sara",    // Mentor for Docker
    };
  
    // Merge both objects. If a key is repeated, the one from the second object (mentorGroup2) overrides the first
    const allMentors = {
      ...mentorGroup1,
      ...mentorGroup2,
    };
  
    console.log(allMentors);
    // Output: { typescript: 'John', redux: 'Anna', docker: 'Sara' }
    // Explanation: 'redux' was in both objects, so 'Anna' (from mentorGroup2) replaced 'Mike'
  
    // ------------------------------------------
    // REST OPERATOR
    // ------------------------------------------
  
    // Rest in Function Parameters: Collect all arguments into an array
  
    // The '...' before the parameter means collect all passed arguments into one array
    const greetFriends = (...friends: string[]) => {
      // Loop through each friend and print a greeting
      friends.forEach((friend: string) => console.log(`Hi, ${friend}!`));
    };
  
    // Calling the function with 3 names. These are collected into the 'friends' array
    greetFriends("Alice", "Bob", "Charlie");
  
    // Output:
    // Hi, Alice!
    // Hi, Bob!
    // Hi, Charlie!
    // Explanation: All arguments are collected into 'friends' array and then greeted one by one
  }
  