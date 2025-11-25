import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database...')

  // Create demo organization
  const demoOrg = await prisma.organization.upsert({
    where: { slug: 'demo-company' },
    update: {},
    create: {
      name: 'Demo Company',
      slug: 'demo-company',
      plan: 'PRO',
      settings: {
        theme: 'light',
        notifications: true,
      }
    }
  })

  // Create demo users
  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@demo.com' },
    update: {},
    create: {
      email: 'admin@demo.com',
      name: 'Admin User',
      role: 'ADMIN',
      organizationId: demoOrg.id,
    }
  })

  const regularUser = await prisma.user.upsert({
    where: { email: 'user@demo.com' },
    update: {},
    create: {
      email: 'user@demo.com',
      name: 'Regular User',
      role: 'USER',
      organizationId: demoOrg.id,
    }
  })

  // Create demo projects
  await prisma.project.upsert({
    where: { id: 'demo-project-1' },
    update: {},
    create: {
      id: 'demo-project-1',
      name: 'Demo Project 1',
      description: 'A sample project for demonstration purposes',
      status: 'ACTIVE',
      userId: adminUser.id,
      organizationId: demoOrg.id,
    }
  })

  await prisma.project.upsert({
    where: { id: 'demo-project-2' },
    update: {},
    create: {
      id: 'demo-project-2',
      name: 'Demo Project 2',
      description: 'Another sample project',
      status: 'ACTIVE',
      userId: regularUser.id,
      organizationId: demoOrg.id,
    }
  })

  // Create demo subscription
  await prisma.subscription.upsert({
    where: { id: 'demo-subscription' },
    update: {},
    create: {
      id: 'demo-subscription',
      plan: 'PRO',
      status: 'ACTIVE',
      userId: adminUser.id,
      organizationId: demoOrg.id,
    }
  })

  console.log('✅ Database seeded successfully!')
  console.log('👤 Demo users created:')
  console.log('   - admin@demo.com (Admin)')
  console.log('   - user@demo.com (User)')
  console.log('🏢 Demo organization: Demo Company')
  console.log('📁 Demo projects created')
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })