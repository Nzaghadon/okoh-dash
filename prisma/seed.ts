import { categories, customers, products } from "../src/lib/data";
import { prisma } from "../src/lib/db";

async function main() {
  // creates categories
  await Promise.all(
    categories.map(({ name, id, image }) =>
      prisma.category.upsert({
        where: { id: id },
        update: {},
        create: { name, id, image },
      })
    )
  );
  await Promise.all(
    products.map(
      ({
        categories,
        id,
        name,
        price,
        image,
        description,
        brand,
        currentInventory,
        rating,
      }) =>
        prisma.product.upsert({
          where: { id: id },
          update: {},
          create: {
            id,
            name,
            price,
            image,
            description,
            brand,
            currentInventory,
            rating,
            categories: {
              connect: categories?.map((id) => ({ id })),
            },
          },
        })
    )
  );

  await Promise.all(
    customers.map(({ id, name, phone, email, password, location }) =>
      prisma.customer.upsert({
        where: { id: id },
        update: {},
        create: {
          id,
          name,
          phone,
          email,
          password,
          location,
        },
      })
    )
  );
}

main()
  .then(() => console.log(`Seeded data successfully`))
  .catch((e) => console.error(`Failed to seed data, ${e}`))
  .finally(async () => {
    await prisma.$disconnect();
  });

export default main;
