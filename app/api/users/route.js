// import Prompt from "@models/prompt";
// import { connectToDB } from "@utils/database";

import prisma from "@/lib/prisma";

export const GET = async (request, { params }) => {
  // const newData = await request.json();

  // newData.us_createdate = new Date();

  // return
  // const users = [
  //   { id: 1, name: "John" },
  //   { id: 2, name: "Jane" },
  //   { id: 2, name: "Bob" },
  // ];

  const allUsers = await prisma.users.findMany();

  // {
  //   us_username: "user001",
  //   us_password: "1234",
  //   us_fname: "firstname",
  //   us_lname: "lastname",
  //   us_email: "user001",
  //   us_address: "",
  //   us_phone: "",
  //   us_createdate: new Date(),
  //   us_role: 1,
  // }

  try {
    // const user = await prisma.users.update({
    //   where: {
    //     us_id : 35,
    //   },
    //   data: newData,
    // });

    return new Response(JSON.stringify(allUsers));
  } catch (error) {
    console.log("🚀 ~ file: route.js:44 ~ POST ~ error:", error)
    return new Response(
      JSON.stringify({ error: "ไม่สามารถสร้าง user ซ้ำได้" }),
      { status: 500 }
    );
  }
};
