import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function resetDb() {
    await prisma.request.deleteMany();
}