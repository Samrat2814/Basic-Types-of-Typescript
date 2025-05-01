{
  // Object, Optional, Readonly, and Literal Types in TypeScript

  // Type alias `TUser` represents the structure of a user object
  type TUser = {
    // Literal type: country must be exactly "Bangladesh"
    country: "Bangladesh";

    // Readonly property: cannot be reassigned after initialization
    readonly firstName: string;

    // Optional property: may or may not be present in the object
    middleName?: string;

    // Required property
    lastName: string;
  };

  // Example with all properties provided (including optional)
  const user: TUser = {
    country: "Bangladesh",
    firstName: "Md Aslam",
    middleName: "Hossain", // optional, included here
    lastName: "Samrat",
  };

  // Example without the optional `middleName` property
  const user2: TUser = {
    country: "Bangladesh",
    firstName: "Md Aslam",
    lastName: "Samrat",
  };

  // Trying to change a readonly property will result in an error
  // user.firstName = "Changed"; // Error: Cannot assign to 'firstName' because it is a read-only property
}