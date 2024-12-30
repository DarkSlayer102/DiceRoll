<<<<<<< HEAD
# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
=======
# DiceRoll

# Dice Roller App

A fun and interactive **React Native** app that simulates rolling a dice. Users can roll the dice by pressing a button, and the app will display the dice number along with an image of the rolled face.

---

## Features

- 🎲 Roll a dice with the press of a button.
- 🎨 Displays the rolled number and its corresponding dice face image.
- ⚡ Responsive and visually engaging UI.



## How to Run

### Prerequisites

- Node.js installed (v14+ recommended)
- React Native environment set up ([Guide](https://reactnative.dev/docs/environment-setup))
- A mobile emulator or a connected physical device

---

### Steps to Run

1. Clone the repository:
   ```bash
   git clone <repository_url>
   ```
2. Navigate to the project directory:
   ```bash
   cd dice-roller-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the app:
   - For iOS:
     ```bash
     npx react-native run-ios
     ```
   - For Android:
     ```bash
     npx react-native run-android
     ```

---

## How It Works

1. **Random Dice Roll**:  
   When the "Roll Dice" button is clicked, a random number between 1 and 6 is generated.
   
2. **Dice Face Display**:  
   The rolled number's corresponding dice image is displayed using `Image` components.

3. **State Management**:  
   - The app uses `useState` to track the rolled number.
   - `useMemo` caches the dice images for performance.
   - `useCallback` ensures the `rollDice` function is optimized.

---

## File Structure

```
.
├── App.js                 # Main React Native app component
├── assets
│   └── images             # Folder containing dice face images
├── node_modules           # Dependencies
├── package.json           # Project configuration
└── README.md              # Project documentation
```

---

## Technologies Used

- **React Native** for building the app
- **JavaScript/TypeScript** for logic and interactivity
- **useState, useMemo, useCallback** for state and performance optimization

---

## Future Enhancements

- Add support for multiple dice rolls.
- Include sound effects on dice roll.
- Improve UI with animations and better styling.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.


