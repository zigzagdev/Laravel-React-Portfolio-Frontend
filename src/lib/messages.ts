export const messages = {
    success: {
        registration: 'Registration successful!',
        login: 'Logged in successfully!',
    },
    error: {
        required: (field: string) =>  `${ field } is required.`,
        min: (field: string, min: number) => `${ field } must be at least ${ min } characters.`,
        max: (field: string, max: number) => `${ field } must be at most ${ max } characters.`,
        registration: 'Registration failed. Please try again.',
        unexpected: 'Unexpected error occurred. Please try again later.',
        login: {
            default: 'Login failed. Please check your email or password.',
            accountLocked: 'Your account has been locked. Please contact support.',
        },
    },
};
