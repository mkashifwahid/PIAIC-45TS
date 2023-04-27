// Exercise # 2
{
    console.log("Exercise # 2");
    var user = "Asad";
    console.log("Hello $".concat(user));
}
// Exercise # 3
{
    console.log("Exercise # 3");
    var user = "Asad cheemA";
    console.log("Uppercase :  ".concat(user.toUpperCase()));
    console.log("Lowercase :  ".concat(user.toLowerCase()));
    console.log("Titles :  ".concat(user
        .split(" ")
        .map(function (s) {
        return s.replace(s, s.charAt(0).toUpperCase() + s.substring(1).toLowerCase());
    })
        .join(" ")));
}
//Exercise # 4
{
    console.log("Albert Einstein once said, \u201CA person who never made a mistake never tried anything new.\"");
}
//Exercise # 5
{
    var famous_peron = "Albert Einstein";
    var message = "".concat(famous_peron, " once said, \u201CA person who never made a mistake never tried anything new.\"");
    console.log(message);
}
//Exercise # 6
{
    var user_name = "  A \tli \nRaza  ";
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
    var fav_num = 12;
    console.log("My favorite number is ".concat(fav_num));
}
//Exercise # 10 is comment
//Exercise # 11
{
    var arr = [];
    arr = ["ali", "ahmed", "khan"];
    arr.map(function (a) { return console.log(a); });
}
//Exercise # 12
{
    var arr = [];
    arr = ["ali", "ahmed", "khan"];
    arr.map(function (a) { return console.log("Hello ".concat(a)); });
}
//Exercise # 13
{
    var your_own = ["car", "motorcycle", "jet", "private jet"];
    your_own.map(function (o) { return console.log("I would like to own a ".concat(o)); });
}
//Exercise 14
{
    var guest_list = ["ali", "ahmed", "khan"];
    guest_list.map(function (g) { return console.log("".concat(g, ", I want to invite you on dinner")); });
}
//Exercise # 15
{
    var guest_list = ["ali", "ahmed", "khan"];
    guest_list.map(function (g) { return console.log("".concat(g, ", I want to invite you on dinner")); });
    var r = guest_list.splice(1, 1);
    guest_list[1] = 'Imam';
    guest_list.map(function (g) { return console.log("".concat(g, ", I want to invite you on dinner")); });
    console.log(r);
}
