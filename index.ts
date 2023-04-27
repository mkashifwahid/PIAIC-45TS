// Exercise # 2
{
  console.log("Exercise # 2");
  let user: string = "Asad";
  console.log(`Hello $${user}`);
}

// Exercise # 3
{
  console.log("Exercise # 3");
  let user: string = "Asad cheemA";
  console.log(`Uppercase :  ${user.toUpperCase()}`);
  console.log(`Lowercase :  ${user.toLowerCase()}`);
  console.log(
    `Titles :  ${user
      .split(" ")
      .map((s) =>
        s.replace(s, s.charAt(0).toUpperCase() + s.substring(1).toLowerCase())
      )
      .join(" ")}`
  );
}

//Exercise # 4
{
  console.log(
    `Albert Einstein once said, “A person who never made a mistake never tried anything new."`
  );
}

//Exercise # 5
{
  const famous_peron: string = "Albert Einstein";
  const message: string = `${famous_peron} once said, “A person who never made a mistake never tried anything new."`;
  console.log(message);
}

//Exercise # 6
{
  const user_name: string = "  A \tli \nRaza  ";
  console.log(user_name);
  console.log(user_name.trim());
}

//Exercise # 7 & 8
{
  console.log(4 + 4);
  console.log(10 - 2);
  console.log(4 * 2);
  console.log(16 / 2);
}

//Exercise # 9
{
  let fav_num: number = 12;
  console.log(`My favorite number is ${fav_num}`);
}

//Exercise # 10 is comment

//Exercise # 11
{
  let arr: string[] = [];
  arr = ["ali", "ahmed", "khan"];
  arr.map((a) => console.log(a));
}

//Exercise # 12
{
  let arr: string[] = [];
  arr = ["ali", "ahmed", "khan"];
  arr.map((a) => console.log(`Hello ${a}`));
}

//Exercise # 13
{
  let your_own: string[] = ["car", "motorcycle", "jet", "private jet"];
  your_own.map((o) => console.log(`I would like to own a ${o}`));
}

//Exercise 14
{
  let guest_list: string[] = ["ali", "ahmed", "khan"];
  guest_list.map((g) => console.log(`${g}, I want to invite you on dinner`));
}

//Exercise # 15
{
  let guest_list: string[] = ["ali", "ahmed", "khan"];
  guest_list.map((g) => console.log(`${g}, I want to invite you on dinner`));
  const r:string[] = guest_list.splice(1,1)
  guest_list[1] = 'Imam'
  guest_list.map((g) => console.log(`${g}, I want to invite you on dinner`));
  console.log(r)

}