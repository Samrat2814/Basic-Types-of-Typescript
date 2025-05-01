{
  // ------------------------------------------
  // TYPE ALIAS
  // ------------------------------------------

  // Define a custom type (alias) called 'Student' with required fields
  type Student = {
    name: string; // Student's name (must be a string)
    age: number; // Student's age (must be a number)
    gender: string; // Gender (must be a string)
    contactNo?: string; // Optional field (can be string or undefined)
    address: string; // Address (must be a string)
  };

  // Create a student object using the Student type
  const student1: Student = {
    name: "samrat",
    age: 24,
    gender: "male",
    contactNo: "123456", // This field is optional, but provided here
    address: "bip colony barishal",
  };

  // Another student object of type Student
  const student2: Student = {
    name: "siam",
    age: 23,
    gender: "male",
    contactNo: "1234567", // Also using the optional contactNo
    address: "chowmatha barishal",
  };

  // Create type alias for primitive types
  type UserName = string; // Now you can use 'UserName' instead of writing 'string'
  type IsAdmin = boolean; // Now you can use 'IsAdmin' instead of writing 'boolean'

  // Use the new type aliases
  const userName: UserName = "samrat"; // Same as const userName: string = "samrat";
  const isAdmin: IsAdmin = true; // Same as const isAdmin: boolean = true;

  // Function type alias
  type Add = (num1: number, num2: number) => number;
  // Add is a type for functions that take 2 numbers and return a number

  // Use the Add type for a function
  const add: Add = (num1, num2) => num1 + num2;

  // Example: calling the add function
  console.log(add(5, 3)); // Output: 8
}
