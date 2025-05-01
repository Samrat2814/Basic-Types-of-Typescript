{
  //
  // Basic Data Types in TypeScript

  // -------------------
  // ✅ Primitive Types
  // -------------------

  // string → used for text
  let firstName: string = "Md Aslam Hossain Samrat";

  // number → used for integers and decimals
  let role: number = 12311066;

  // boolean → used for true/false values
  let isAdmin: boolean = true;

  // undefined → a variable declared but not assigned
  let x: undefined = undefined;

  // null → intentionally assigned empty value
  let y: null = null;

  // -------------------
  // ✅ Non-Primitive Types
  // -------------------

  // Array → a list of elements of the same type
  let friends: string[] = ["Arafat", "Siam", "Mahim"];
  let rollNumbers: number[] = [101, 102, 103, 104];

  // Tuple → fixed-length array with specific types in order
  let ageAndName: [number, string] = [23, "Md Aslam Hossain Samrat"];
  // Example usage: Age with full name as a pair
}