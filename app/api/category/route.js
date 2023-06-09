import prisma from "@/lib/prisma";

export const GET = async (request) => {
  try {
    const allCategory = await prisma.category.findMany({take: 4,orderBy: {
        type_id: 'desc',
      }});
    return new Response(JSON.stringify(allCategory), { status: 200 });
  } catch (error) {
    console.log("🚀 ~ file: route.js:44 ~ POST ~ error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch all category" }),
      { status: 500 }
    );
  }
};
