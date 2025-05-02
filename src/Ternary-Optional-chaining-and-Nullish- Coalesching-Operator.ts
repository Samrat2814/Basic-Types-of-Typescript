{
    // Ternary Operator || Optional Chaining || Nullish Coalescing
  
    const age: number = 15;
  
    // Regular if-else check
    if (age >= 18) {
      console.log("adult"); // if age is 18 or more
    } else {
      console.log("not adult"); // if age is less than 18
    }
  
    // Ternary operator: short way to write if-else
    const isAdult = age >= 18 ? "adult" : "not adult";
    console.log(isAdult); // prints 'not adult' because age is 15
  
    // Nullish coalescing operator (??)
    // Only checks if the value is null or undefined
    const isAuthenticated = null;
  
    // result1 will be 'Guest' because isAuthenticated is null
    const result1 = isAuthenticated ?? "Guest";
  
    // result2 also becomes 'Guest', but this uses normal truthy/falsy logic
    // null is falsy, so it returns 'Guest'
    const result2 = isAuthenticated ? isAuthenticated : "Guest";
  
    console.log({ result1 }, { result2 }); // both print 'Guest'
  
    // Define a User type with nested address object
    type User = {
      name: string;
      address: {
        city: string;
        road: string;
        presentAddress: string;
        permanentAddress?: string; // optional
      };
    };
  
    // Create a user without a permanent address
    const user: User = {
      name: 'samrat',
      address: {
        city: 'ctg',
        road: 'awesome road',
        presentAddress: 'ctg town'
      }
    };
  
    // Optional chaining: safely checks if permanentAddress exists
    // Nullish coalescing: if it's undefined/null, use fallback
    const permanentAddress = user?.address?.permanentAddress ?? 'no permanent address';
  
    console.log({ permanentAddress }); // outputs 'no permanent address'
  }
  