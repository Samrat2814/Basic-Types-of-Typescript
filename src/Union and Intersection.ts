{
    // Union types

    // Define a type called FrontendDev which can only be 'fakibazDev' or 'juniorDev'
    type FrontendDev = 'fakibazDev' | 'juniorDev'

    // Define a type called FullStackDev which can only be 'fakibazDev' or 'expertDev'
    type FullStackDev = 'fakibazDev' | 'expertDev'

    // Union type: Developer can be either a FrontendDev or a FullStackDev
    // So it can be 'fakibazDev', 'juniorDev', or 'expertDev'
    type Developer = FrontendDev | FullStackDev

    // This is valid because 'juniorDev' is one of the values allowed in FrontendDev
    const newDev : FrontendDev = 'juniorDev'

    // Define a type called User with 4 required properties
    type User = {
        name: string; // name must be a string
        email: string; // email must be a string
        gender: 'male' | 'female'; // gender must be either 'male' or 'female'
        bloodGroup: 'O+' | 'A+'; // bloodGroup must be either 'O+' or 'A+'
    }

    // Create an object user1 that matches the User type
    const user1 : User = {
        name: 'samrat', // string
        email: 'samrat@example.com', // string
        gender: 'male', // one of the allowed gender values
        bloodGroup: 'O+' // one of the allowed blood group values
    }

    // Intersection type

    // FrontendDeveloper has two properties:
    // - skills: an array of strings
    // - designation1: must be the string 'Frontend Developer'
    type FrontendDeveloper = {
        skills: string[];
        designation1: 'Frontend Developer'
    }

    // BackendDeveloper has two properties:
    // - skills: an array of strings
    // - designation2: must be the string 'Backend Developer'
    type BackendDeveloper = {
        skills: string[];
        designation2: 'Backend Developer'
    }

    // FullStackDeveloper is a combination of both FrontendDeveloper and BackendDeveloper
    // So it must have:
    // - skills (string[])
    // - designation1 ('Frontend Developer')
    // - designation2 ('Backend Developer')
    type FullStackDeveloper = FrontendDeveloper & BackendDeveloper

    // Create a FullStackDeveloper object that includes all required properties
    const fullstackDeveloper : FullStackDeveloper = {
        skills: ['Html', 'css'], // shared skills array
        designation1: 'Frontend Developer', // required by FrontendDeveloper
        designation2: 'Backend Developer' // required by BackendDeveloper
    }
}
