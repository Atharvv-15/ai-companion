const {PrismaClient} = require('@prisma/client')

const db = new PrismaClient()

async function main() {
    try {
        await db.category.createMany({
            data: [
                {name: 'Famous People'},
                {name: 'Movies & TV'},
                {name: 'Muscians'},
                {name: 'Animals'},
                {name: 'Philosophy'},
                {name: 'Scientists'},
                {name: 'Sports'},
            ]
        })
    } catch (error) {
        console.error('Error seeding database: ', error)
    }finally{
        await db.$disconnect()
    }
};

main();