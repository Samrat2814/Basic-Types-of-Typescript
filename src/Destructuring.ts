{
  // Destructuring in TypeScript

  // Object Destructuring
  const user = {
    id: 12311066,
    name: {
      firstName: "Md Aslam",
      middleName: "Hossain", // Corrected "middeName" to "middleName"
      lastName: "Samrat",
    },
    contact: "01790866",
    address: "BD",
  };

  // Destructure user object with meaningful variable names
  const {
    contact: phoneNumber, // Rename contact to phoneNumber
    name: { middleName: midName }, // Rename middleName to midName
  } = user;

  console.log(phoneNumber); // Output: "01790866"
  console.log(midName); // Output: "Hossain"

  // Array Destructuring
  const myFriends = ["John", "Alice", "Bob", "Charlie"];

  // Destructure the first and third elements from the array
  const [friend1, , friend3] = myFriends;
  console.log(friend1); // Output: "John"
  console.log(friend3); // Output: "Bob"

  // Destructure using rest operator to capture the remaining elements
  const [firstFriend, secondFriend, ...remainingFriends] = myFriends;
  console.log(firstFriend); // Output: "John"
  console.log(secondFriend); // Output: "Alice"
  console.log(remainingFriends); // Output: ["Bob", "Charlie"]
}