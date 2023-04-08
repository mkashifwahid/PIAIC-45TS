// Exercise # 2
{
  console.log('Exercise # 2');
  let user: string = 'Asad';
  console.log(`Hello $${user}`);
}

// Exercise # 3
{
  console.log('Exercise # 3');
  let user: string = 'Asad';
  console.log(`Uppercase :  $${user.toUpperCase()}`);
  console.log(`Lowercase :  $${user.toLowerCase()}`);
  console.log(
    `Titlecase :  $${
      user.charAt(0).toUpperCase() + user.substring(1).toLowerCase
    }`
  );
}
