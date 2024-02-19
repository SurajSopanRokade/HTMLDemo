// 9. Write a TypeScript program that defines an enumeration 'Color' with values 'Red', 'Green', 'White' and Blue. Create a variable 'selectedColor' of type 'Color' and assign it one of the enumeration values.  
// Define the Color enumeration
enum Color1 {
    Red="red",
    Green="green",
    White="white",
    Blue="blue",
  }
  
  // Create a variable of type Color and assign a value
  let selectedColor1: Color1 = Color1.Red;
  
  // Print the selected color
  console.log("Selected color:", selectedColor1);
  
//   // You can also use a switch statement with the Color enumeration
//   switch (selectedColor) {
//     case Color.Red:
//       console.log("The selected color is Red.");
//       break;
//     case Color.Green:
//       console.log("The selected color is Green.");
//       break;
//     case Color.White:
//       console.log("The selected color is White.");
//       break;
//     case Color.Blue:
//       console.log("The selected color is Blue.");
//       break;
//     default:
//       console.log("Invalid color selected.");
//       break;
//   }
  