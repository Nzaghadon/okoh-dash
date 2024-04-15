import { IProduct } from "@/lib/data";
import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

const handler = async (req: Request) => {
  try {
    const {
      id,
      name,
      categories,
      price,
      image,
      description,
      currentInventory,
      brand,
      rating,
    } = (await req.json()) as IProduct;

    const product = await prisma.product.create({
      data: {
        id,
        name: name,
        price: price,
        image: image,
        rating: rating,
        description: description,
        currentInventory: currentInventory,
        brand: brand,
        categories: {
          connect: categories?.map((id) => ({ id })),
        },
      },
    });

    return NextResponse.json({ product });
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({ status: "error", message: error.message }),
      { status: 500 }
    );
  }
};

export { handler as POST };
