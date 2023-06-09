import prisma from "@/lib/prisma";

export const POST = async (request) => {
  const { type_name, type_status } = await request.json();

  try {
    const newData = {
      type_name: type_name,
      type_status: type_status,
    };

    const newCategory = await prisma.category.create({
      data: newData,
    });

    return new Response(JSON.stringify(newCategory), { status: 201 });
  } catch (error) {
    console.log("🚀 ~ file: route.js:44 ~ POST ~ error:", error);
    return new Response(
      JSON.stringify({ error: "ไม่สามารถสร้าง หมวดหมู่สินค้าได้" }),
      { status: 500 }
    );
  }
};
